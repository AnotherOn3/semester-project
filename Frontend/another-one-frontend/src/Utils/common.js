import axios from 'axios';

export async function get(resource) {
  try {
    return await axios.get(
      `http://anotherone-env.eu-west-2.elasticbeanstalk.com/api/${resource}`,
    );
  } catch (error) {
    throw new Error('error fetching the resource', error);
  }
}

export async function getById(resource, id) {
  try {
    return await axios.get(
      `http://anotherone-env.eu-west-2.elasticbeanstalk.com/api/${resource}/${id}`,
    );
  } catch (error) {
    throw new Error('error fetching the resource', error);
  }
}
