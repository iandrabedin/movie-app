import axios from "axios";
import { baseURL, getErrorMessage } from "./apiUtils";

const url = `${baseURL}/movie/top_rated`;

export const fetchTopRated = () => {
  const configParams = {
    params: { api_key: process.env.REACT_APP_API_KEY },
  };

  return axios.get(url, configParams).then(resolve).catch(handleError);
};

const resolve = (response) => {
  return response.data;
};

const handleError = (error) => {
  if (axios.isCancel(error)) {
    return undefined;
  } else {
    throw new Error(
      `Could not fetch top rated movies: ${getErrorMessage(error)}`
    );
  }
};
