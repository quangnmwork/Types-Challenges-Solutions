type MyOmit<T, K extends number | string | symbol> = {
  [key in Exclude<keyof T, K>]: T[key];
};
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TestOmit = MyOmit<Todo, 'title'>;
