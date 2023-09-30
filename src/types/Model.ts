export type Currency =
  | 'BRL'
  | 'ARS'
  | 'BOB'
  | 'CLP'
  | 'COP'
  | 'UYU'
  | 'VES'
  | 'PYG'
  | 'PEN'
  | 'EUR'
  | 'USD'
  | 'GBP';

export interface Price {
  currency: Currency;
  amount: number;
  decimals: number;
}

export interface Author {
  name: string;
  lastname: string;
}

export interface ProductItem {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
}
