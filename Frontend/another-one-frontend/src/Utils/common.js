import axios from 'axios';

export async function get(resource) {
  try {
    return await axios.get(
      `https://another-one-test-data.herokuapp.com/${resource}`,
    );
  } catch (error) {
    throw new Error('error fetching the resource', error);
  }
}
