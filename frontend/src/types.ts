export interface Dealer {
  id: number;
  name: string;
  location: string;
  rating: number | string;
  image: string;
  contact?: string; // add contact
}

export interface Car {
  id: number;
  name: string;
  year: number;
  price: string;
  image: string;
  dealer?: Dealer | number | null;
}