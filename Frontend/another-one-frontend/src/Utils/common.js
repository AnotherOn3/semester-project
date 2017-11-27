import axios from 'axios';

export async function get(resource) {
  try {
    return await axios.get(`http://localhost:3000/${resource}`);
  } catch (error) {
    throw new Error('error fetching the resource', error);
  }
}
