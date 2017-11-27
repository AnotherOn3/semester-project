import axios from 'axios';

export async function get(resource) {
  try {
    const { data } = await axios.get(`http://localhost:3000/${resource}`);
    return data;
  } catch (error) {
    throw new Error('error fetching the resource', error);
  }
}
