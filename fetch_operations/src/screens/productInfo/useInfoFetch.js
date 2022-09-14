import { useState, useEffect } from 'react';
const useInfoFetch = (props) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  useEffect(() => {
    fetch(`${process.env.REACT_APP_DATA_URL}` + props.match.params.id)
      .then((response) => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        setError(error);
      });
  }, [props.match.params.id]
  );
  return { data, error };
};
export default useInfoFetch;
