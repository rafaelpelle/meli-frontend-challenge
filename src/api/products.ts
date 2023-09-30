// import axiosClient from './axiosClient';
import { getProductDetailsMock, getSearchResultsMock } from './mock';

export function getSearchResults(search: string) {
  // return axiosClient.get(`/api/items?q=${search}`);
  return Promise.resolve(getSearchResultsMock);
}

export function getProductDetails(id: string) {
  // return axiosClient.get(`/api/items/${id}`);
  return Promise.resolve(getProductDetailsMock);
}
