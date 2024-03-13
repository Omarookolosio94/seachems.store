import { API_VERB } from "core/consts/systemconst";
import { apicall } from "./api.axios";

var employerId = process.env.REACT_APP_EMPLOYER_ID;

export const getCategories = () => {
  return apicall({
    endpoint: "/categories",
    param: employerId,
    method: API_VERB.Get,
  });
};

export const getProductById = (id: string) => {
  return apicall({
    endpoint: "/products",
    param: `${employerId}/${id}`,
    method: API_VERB.Get,
  });
};

export const getProducts = (category: string, page: number, count: number) => {
  return apicall({
    endpoint: "/products",
    param: employerId,
    pQuery: {
      category,
      page: +page,
      count: +count,
    },
    method: API_VERB.Get,
  });
};

export const addOrder = (order: NewOrder) => {
  return apicall({
    endpoint: "/websales",
    param: employerId,
    body: order,
    method: API_VERB.Post,
  });
};

export const getOrderById = (id: string) => {
  return apicall({
    endpoint: "/websales",
    param: `${employerId}/${id}`,
    method: API_VERB.Get,
  });
};
