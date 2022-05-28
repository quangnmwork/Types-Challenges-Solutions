type Concat<A extends unknown[], B extends unknown[]> = [...A, ...B];
type Result = Concat<[1], [2]>;
const testConcat: Result = [1, 2];
