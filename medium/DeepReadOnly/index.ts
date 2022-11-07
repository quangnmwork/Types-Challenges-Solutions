type MyDeepReadonly<T extends Record<string, any>> = {
  readonly [P in keyof T]: keyof T[P] extends never
    ? true
    : MyDeepReadonly<T[P]>;
};
type X = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: string;
  z: 2;
};

type xDeep = MyDeepReadonly<X>;
