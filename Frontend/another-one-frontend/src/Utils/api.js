import { get } from './common';

class Api {
  async getStores() {
    const { data } = await get('stores');
    return data;
  }
}

export default new Api();
