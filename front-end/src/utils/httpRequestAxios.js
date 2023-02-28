import axios from 'axios';

const httpRequestAxios = async (method, URL, data) => {
  try {
    return await axios[method](URL, data);
  } catch (error) {
    return error.response;
  }
};

export default httpRequestAxios;
