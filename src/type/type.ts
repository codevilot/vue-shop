export interface typeProductState {
  products: typeProductReduceAcc;
  category: Array<string>;
  idloader: { [key: number]: typeProductReduceCur };
}
export interface typeProductReduceAcc {
  [key: string]: Array<typeProductReduceCur>;
}
export interface typeProductReduceCur {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
