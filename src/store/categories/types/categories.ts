export interface ICategory {
  id: number;
  title: string;
  items: IProductCardItem[];
}

export interface IProductCardItem {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}
