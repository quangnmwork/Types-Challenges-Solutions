type First<T extends any[]> = ReturnType<(U: T) => typeof U[0]>;
type test = [1, 2, 3];
type first = First<test>;
const testFirst: first = 1;
