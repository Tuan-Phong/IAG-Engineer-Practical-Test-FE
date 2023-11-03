import axios from 'axios';

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const createResource = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Error creating data:', error);
    throw error;
  }
};

export const getProducts = () => fetchData('http://localhost:3000/products');

export const createProduct = (product) =>
  createResource('http://localhost:3000/products', product);

export const createOrder = (order) =>
  createResource('http://localhost:3000/order', order);
