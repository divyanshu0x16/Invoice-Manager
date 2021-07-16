const axios = require('axios').default;
const baseUrl = 'http://localhost:3001/api/invoices';

const getInvoices = async (token) => {
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line
export default { getInvoices };
