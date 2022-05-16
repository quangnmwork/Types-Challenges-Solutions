type MyPick<Type, Key extends keyof Type> = {
  [Property in Key]: Type[Property];
};

interface Person {
  name: string;
  age: number;
}
const Engineer: MyPick<Person, 'age'> = {
  age: 1,
};
console.log(Engineer);
