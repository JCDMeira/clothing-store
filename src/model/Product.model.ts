export interface ProductModel {
  _id: string;
  title: string;
  modifiers: SetsAndModifiers[];
  sets: SetsAndModifiers[];
  price: number;
  created_at: number;
  updated_at: number;
}

export type SetsAndModifiers = {
  title: string;
  price: number;
};

export interface ProductCreateModel {
  title: string;
  price: number;
}
