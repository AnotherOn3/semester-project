import { get } from './common';

class Api {
  async getStores() {
    get('stores');
  }
}

export default new Api();
