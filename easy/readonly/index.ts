type MyReadonly<Object> = {
  readonly [key in keyof Object]: Object[key];
};
interface Person {
  name: string;
  age: number;
}
const Enginner: MyReadonly<Person> = {
  age: 20,
  name: 'Quang',
};
console.log(Enginner);
// Enginner.name = 'Guys'; // error here
