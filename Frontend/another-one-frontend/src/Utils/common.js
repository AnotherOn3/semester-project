import axios from 'axios';

export function get(resource) {
  try {
    const { data } = axios.get(`http://localhost:47120/api/${resource}`);
    return data;
  } catch (error) {
    throw new Error('error fetching the resource', error);
  }
}
