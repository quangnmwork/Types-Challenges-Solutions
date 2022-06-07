type Push<
  T extends unknown[] | unknown,
  U extends unknown[] | unknown
> = T extends unknown[] ? [...T, U] : U extends unknown[] ? [T, ...U] : [T, U];
type Result = Push<[1, 2], '3'>;
type Result1 = Push<1, 2>;
