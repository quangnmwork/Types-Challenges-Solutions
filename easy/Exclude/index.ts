type MyExclude<T, U> = T extends U ? never : T;

type objExclude = MyExclude<'a' | 'c', 'c'>;
