import React from 'react';
import { Link } from 'react-router-dom';
import '../../component/navigation/Navigation.css';
import '../../App.css';
const Navigation = () => {
  return (
    <div className="topnav">
      <nav>
        <Link className='active' to='/product'>Product</Link>
        <Link className='activeaddproduct' to='/addProduct'>Add Product</Link>
        <Link className='activeaddtocart' to='/addtocart'>Cart</Link>
        <Link className ="logoutlink" to = '/'>Logout</Link>
      </nav>
    </div>
  );
};
export default Navigation;
