import '@ui5/webcomponents-react/dist/Assets.js';
import ErrorScreenIllustration from '@ui5/webcomponents-fiori/dist/illustrations/ErrorScreen.js';
import { BreadcrumbsItem, IllustratedMessage, ThemeProvider } from '@ui5/webcomponents-react';
import { ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import './index.css';
import AppShell from './AppShell.tsx';
import { fetchToDos } from './mockImplementations/mockAPIs.ts';
import { Todo } from './mockImplementations/mockData.ts';
import TodoDetails from './TodoDetails.tsx';
import ToDos from './ToDos.tsx';

export interface SingleTodoHandle {
  getTitle: (todo?: Todo) => string | undefined;
  getBreadCrumbItems: (todo?: Todo) => ReactNode;
}

// To simulate a slow loader increase the `delay` to simulate a failed request set `shouldThrow` to `true`
async function toDosLoader() {
  const todosPromise = fetchToDos({ delay: 500, shouldThrow: false });
  return defer({ todos: todosPromise });
}

async function singleToDoLoader({ params }) {
  const todos = (await fetchToDos()) as Todo[];
  const paramId = parseInt(params.id, 10);
  return todos.find((item) => item.id === paramId) ?? null;
}

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        path: '/',
        element: <ToDos />,
        errorElement: <IllustratedMessage name={ErrorScreenIllustration} />,
        loader: toDosLoader
      },
      {
        path: 'todo/:id',
        loader: singleToDoLoader,
        element: <TodoDetails />,
        handle: {
          getTitle: (todo?: Todo) => todo?.title,
          getBreadCrumbItems: (todo?: Todo) => {
            if (!todo) {
              return null;
            }
            return (
              <>
                <BreadcrumbsItem href="/" target="_self">
                  Home
                </BreadcrumbsItem>
                <BreadcrumbsItem href={`/todo/${todo.id}`} target="_self">
                  {todo.title}
                </BreadcrumbsItem>
              </>
            );
          }
        }
      }
    ]
  }
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
