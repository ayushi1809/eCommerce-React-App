import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import SignUpPage from './screens/signUpPage/signUpPage';
import ProtectedRoute from './widget/protectedRoute';
const product = lazy(() => import('./screens/product/product'));
const addProduct = lazy(() => import('./screens/addProduct/addProduct'));
const info = lazy(() => import('./screens/productInfo/ProductInfo'));
const addToCarts = lazy(() => import('./screens/addToCart/addToCarts'));
const checkOut = lazy(() => import('./screens/checkOut/checkOut'));
// const forgotPassword = lazy(() => import('./screens/signUpPage/forgotPassword/forgotPassword'));
function App () {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={SignUpPage}></Route>
          <Suspense fallback={<h1>Still Loading…</h1>}>
          <ProtectedRoute exact path='/product' component={product}></ProtectedRoute>
          <ProtectedRoute exact path='/addProduct' component={addProduct}></ProtectedRoute>
          <ProtectedRoute exact path='/info/:id' component={info}></ProtectedRoute>
          <ProtectedRoute exact path='/addtocart' component={addToCarts}></ProtectedRoute>
          <ProtectedRoute exact path='/checkout' component={checkOut}></ProtectedRoute>
          {/* <ProtectedRoute exaact path='/forgotPassword' component={forgotPassword}></ProtectedRoute> */}
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
