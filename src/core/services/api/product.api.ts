import { API_VERB } from 'core/consts/systemconst';
import { apicall } from './api.axios';

export const getProducts = () => {
  return apicall({
    endpoint: '/auth/login',
    method: API_VERB.Get,
  });
};
