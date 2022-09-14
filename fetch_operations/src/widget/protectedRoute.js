import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const token = localStorage.getItem('acessToken');
  return (
            <Route
              {...restOfProps}
              render={(props) =>
                token
                  ? <Component {...props} />
                  : <Redirect to="/" />
              }
            />
  );
};
export default ProtectedRoute;
