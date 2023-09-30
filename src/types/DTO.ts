import { Author, ProductItem } from './Model';

export interface SearchResultsDTO {
  author: Author;
  categories: string[];
  items: ProductItem[];
}
