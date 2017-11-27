import { get } from './common';

class Api {
  async getStores() {
    return await get('stores');
  }
}

export default new Api();
