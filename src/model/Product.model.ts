export interface ProductModel {
  _id: string;
  title: string;
  modifiers: string[];
  sets: string[];
  price: number;
  created_at: number;
  updated_at: number;
}

export interface ProductCreateModel {
  title: string;
  price: number;
}
