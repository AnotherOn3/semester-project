import { get } from './common';

class Api {
  async getStores() {
    const { data } = await get('stores');
    return data;
  }

  async getProducts() {
    const { data } = await get('products');
    return data;
  }
}

export default new Api();
