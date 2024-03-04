import axios from 'axios';
import notification from 'core/helpers/notification';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const apicall = async ({
  endpoint = '',
  extra = null,
  method = 'GET',
  body = null,
  pQuery = '',
  param = '',
  multipart = false,
  responseType = null,
  auth = false,
}: {
  endpoint: string;
  extra?: any;
  method: string;
  body?: any;
  pQuery?: any;
  param?: string;
  multipart?: boolean;
  responseType?: any;
  auth?: boolean;
}) => {
  const headers: any = {
    'Content-Type': multipart ? 'multipart/form-data' : 'application/json',
  };

  let url = endpoint;

  if (extra) {
    url += `/${extra}`;
  }

  if (param) {
    url += `/${param}`;
  }

  if (pQuery) {
    let paramsArray = Object.keys(pQuery).map(
      (key: any) =>
        pQuery[key] &&
        `${encodeURIComponent(key)}=${encodeURIComponent(pQuery[key])}`
    );

    paramsArray = paramsArray.filter((item) => item);
    url += `?${paramsArray.join('&')}`;
  }

  if (auth) {
    var userStore = sessionStorage.getItem('userStore');

    if (userStore != null && userStore?.length > 0) {
      var userState = JSON.parse(userStore);
      headers.Authorization = `Bearer ${userState?.state?.token}`;
    }
  }

  const options: any = {
    url,
    method,
    headers,
  };

  if (responseType) {
    options.responseType = responseType;
  }

  if (body) {
    options.data = body;
  }

  return axios(options)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (error?.message === 'Network Error') {
        return {
          message: 'Please check you have an intenet connection',
          data: {},
        };
      } else {
        if (error?.response?.status === 401) {
          notification({
            type: 'warning',
            message: 'Please logout and sign in again',
          });
        }
        return error?.response;
      }
    });
};
