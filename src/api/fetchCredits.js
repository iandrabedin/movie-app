import axios from "axios";
import { baseURL, getErrorMessage } from "./apiUtils";

const url = `${baseURL}/movie`;

export const fetchCredits = (movieId) => {
  const configParams = {
    params: { api_key: process.env.REACT_APP_API_KEY },
  };

  return axios
    .get(`${url}/${movieId}/credits`, configParams)
    .then(resolve)
    .catch(handleError);
};

const resolve = (response) => {
  return response.data;
};

const handleError = (error) => {
  if (axios.isCancel(error)) {
    return undefined;
  } else {
    throw new Error(`Could not fetch credits: ${getErrorMessage(error)}`);
  }
};
