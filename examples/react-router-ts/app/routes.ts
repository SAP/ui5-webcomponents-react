import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [index('./routes/index.tsx'), route('todos/:id', './routes/todo.tsx')] satisfies RouteConfig;
