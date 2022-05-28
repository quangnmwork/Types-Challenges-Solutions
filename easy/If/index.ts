type If<Bool, A, B> = Bool extends boolean ? A : B;
type A = If<true, 'a', 'b'>;
const a: A = 'a';
