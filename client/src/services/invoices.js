const axios = require('axios').default;
const baseUrl = '/api/invoices';

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

const createInvoice = async (token, invoie) => {
  try {
    const response = await axios.post(baseUrl, invoie, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getSingleInvoice = async (token, id) => {
  const url = baseUrl + `/${id}`;
  try {
    const response = await axios.get(url, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const modifyInvoice = async (token, invoice) => {
  const url = baseUrl + `/${invoice.id}`;
  try {
    const response = await axios.put(url, invoice, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteInvoice = async (token, id) => {
  const url = baseUrl + `/${id}`;
  try {
    const response = axios.delete(url, {
      headers: {
        authorization: `bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line
export default {
  getInvoices,
  getSingleInvoice,
  modifyInvoice,
  deleteInvoice,
  createInvoice,
};
