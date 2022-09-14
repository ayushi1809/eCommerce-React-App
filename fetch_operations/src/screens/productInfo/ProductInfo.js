import React from 'react';
import useInfoFetch from './useInfoFetch';
const ProductInfo = (props) => {
  const { data, error } = useInfoFetch(props);
  return (
    <div>
      {Object.keys(error).length > 0
        ? <div>Failed to fetch</div>
        : Object.keys(data).length > 0 && data.id &&
        <div><img src={data.image} alt="loading" /><br></br>
          Id : {data.id}<br />
          Title : {data.title}
          <br />Price:{data.price}<br />
          Description : {data.description}<br />
          Category : {data.category}
        </div>
      }
    </div>
  );
};
export default ProductInfo;
