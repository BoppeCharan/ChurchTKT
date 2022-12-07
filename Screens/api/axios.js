import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'https://connect.tktchurch.com/api';


const API = axios.create({ baseURL: baseUrl });
const APIWithToken = axios.create({ baseURL: baseUrl });


const getAPIWithToken = async () => {
  const value = await AsyncStorage.getItem('user')
  const {token} = JSON.parse(value);
  APIWithToken.interceptors.request.use((req) => {
      req.headers.Authorization = `Bearer ${token}`;
      return req;
  });
  return APIWithToken;
};



export {API,getAPIWithToken};