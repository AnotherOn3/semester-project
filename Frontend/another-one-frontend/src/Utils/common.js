import axios from 'axios';

export async function get(resource) {
  try {
    return await axios.get(
      `mongodb://test:test@ds139187.mlab.com:39187/another-one/${resource}`,
    );
  } catch (error) {
    throw new Error('error fetching the resource', error);
  }
}

export async function getById(resource, id) {
  try {
    return await axios.get(
      `mongodb://test:test@ds139187.mlab.com:39187/another-one/${resource}/${id}`,
    );
  } catch (error) {
    throw new Error('error fetching the resource', error);
  }
}
