import axios from 'axios';
const baseUrl = '/api/users';

const signup = async (info) => {
  const response = await axios.post(baseUrl, info);
  return response.data;
};

// eslint-disable-next-line
export default { signup };
