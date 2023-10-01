import axiosClient from './axiosClient';

export function getSearchResults(search: string) {
  return axiosClient.get(`/items?q=${search}`);
}

export function getProductDetails(id: string) {
  return axiosClient.get(`/items/${id}`);
}
