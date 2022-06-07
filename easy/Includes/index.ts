type Includes<T extends unknown[], U> = T extends [
  infer firstElement,
  ...infer RestArray
]
  ? firstElement extends U
    ? true
    : Includes<RestArray, U>
  : false;
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>;
type Equal<T, U> = T extends U ? true : false;
type IncludesAlter<T extends readonly any[], U> = {
  [K in keyof T]: Equal<T[K], U>;
}[number] extends false
  ? false
  : true;
type isPillarMen1 = IncludesAlter<
  ['Kars', 'Esidisi', 'Wamuu', 'Santana'],
  'Dio'
>;
