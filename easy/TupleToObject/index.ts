type TupleToObject<Object extends readonly any[]> = {
  [key in Object[number]]: key;
};
const tuple = ['tesla'] as const;
type result = TupleToObject<typeof tuple>;
const resultTesting: result = { tesla: 'tesla' };
console.log(resultTesting);
