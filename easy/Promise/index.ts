type WrapPromise<T> = T extends Promise<infer S> ? WrapPromise<S> : T;

const promiseObj: WrapPromise<Promise<{ name: string }>> = { name: 'quang' };
