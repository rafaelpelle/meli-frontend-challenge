import axiosClient from './axiosClient';
import { getSearchResultsMock } from './mock';

export function getSearchResults(search: string) {
  // return axiosClient.get(`/api/items?q=${search}`);
  return Promise.resolve(getSearchResultsMock);
}

export function getProductDetails(id: string) {
  return axiosClient.get(`/api/items/${id}`);
}
