import { Author, ProductItem } from './Model';

export interface SearchResultsDTO {
  author: Author;
  categories: string[];
  items: ProductItem[];
}

export interface ProductDetailsDTO {
  author: Author;
  categories: string[];
  item: ProductItem;
}
