import { todos } from './mockData.ts';

interface FetchToDosOptions {
  delay?: number;
  shouldThrow?: boolean;
}

// Mock API function to return the todos
export function fetchToDos(options: FetchToDosOptions = {}) {
  const { delay = 200, shouldThrow } = options;
  return new Promise((resolve, reject) => {
    // Simulating API call delay with setTimeout
    setTimeout(() => {
      if (shouldThrow) {
        reject(new Error('Error occurred while fetching todos.'));
      } else {
        resolve(todos);
      }
    }, delay);
  });
}
