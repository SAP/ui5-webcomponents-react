import '@ui5/webcomponents-react/dist/Assets.js';
import ErrorScreenIllustration from '@ui5/webcomponents-fiori/dist/illustrations/ErrorScreen.js';
import { BreadcrumbsItem } from '@ui5/webcomponents-react/BreadcrumbsItem';
import { IllustratedMessage } from '@ui5/webcomponents-react/IllustratedMessage';
import { ThemeProvider } from '@ui5/webcomponents-react/ThemeProvider';
import { ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, LoaderFunctionArgs } from 'react-router';
import { RouterProvider } from 'react-router/dom';
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

// To simulate a slow loader increase the `delay`, to simulate a failed request set `shouldThrow` to `true`
async function toDosLoader() {
  const todosPromise = fetchToDos({ delay: 500, shouldThrow: false });
  return { todos: todosPromise };
}

async function singleToDoLoader({ params }: LoaderFunctionArgs) {
  if (!params.id) {
    return null;
  }
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
        loader: toDosLoader,
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
          },
        },
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
