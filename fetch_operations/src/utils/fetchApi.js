const fetchApi = (api, requestOptions, callback) => {
  return fetch(api, requestOptions)
    .then((response) => response.json())
    .then(callback);
};
export default fetchApi;
