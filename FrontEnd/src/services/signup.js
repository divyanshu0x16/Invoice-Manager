import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/users';

const signup = async (info) => {
  const response = await axios.post(baseUrl, info);
  return response.data;
};

export default { signup };
