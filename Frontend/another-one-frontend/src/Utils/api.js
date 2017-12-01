import { get, getById } from './common';

class Api {
  async getStores() {
    const { data } = await get('stores');
    return data;
  }

  async getProducts() {
    const { data } = await get('products');
    return data;
  }

  async getStoreProducts(id) {
    const { data } = await getById('stores', id);
    return data;
  }
}

export default new Api();
