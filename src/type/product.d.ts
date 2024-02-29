export type Product = {
  id: number;
  title: string;
  description: string;
  price: any;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  buttonPressHandler: any;
  index: number;
};

export type Products = {
  products: Product[];
};
