type MyReadOnly<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key];
} & { [key in Exclude<keyof T, K>]: T[key] };
interface Person {
  name: string;
  age: number;
}
type TestReadOnly = MyReadOnly<Person, 'age'>;
