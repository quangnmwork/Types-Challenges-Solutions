import { Equal } from '@type-challenges/utils';

type Includes<T extends unknown[], U> = T extends [
  infer firstElement,
  ...infer RestArray
]
  ? firstElement extends U
    ? true
    : Includes<RestArray, U>
  : false;
type isPillarMen = Includes<[boolean, 2, 3, 5, 6, 7], false>;

type IncludesAlter<T extends readonly any[], U> = {
  [K in keyof T]: Equal<T[K], U>;
}[number] extends false
  ? false
  : true;
type isPillarMen1 = IncludesAlter<
  ['Kars', 'Esidisi', 'Wamuu', 'Santana'],
  'Dio'
>;
export type IsAny<T> = 0 extends 1 & T ? true : false;
type I = boolean extends false ? true : false;
