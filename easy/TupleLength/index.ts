type tesla = ['tesla', 'model 3', 'model X', 'model Y', 'model Z'];

type Length<T extends any[]> = T['length'];
type teslaLength = Length<tesla>;
const lengthTest: teslaLength = 5;
