import React from 'react';
import { connect } from 'react-redux';
import './CheckOut.css';
export const CheckOut = (props) => {
  return (
            <div className='demo'>
                <p className="para">CheckOut</p>
                {
                    props.cart.map(item =>
                        <div className="waytocheckout" key={item.id}>
                            <img src={item.image} alt="" /><br></br>
                            <div className = "wrapped">
                             Title : {item.title}
                            </div>
                            <br />Price:{item.price}<br />
                        </div>
                    )}<br />
                <br />
                <br />
                <div className="total">
                    CartTotal:{props.cart.reduce((a, c) => {
                  return a + c.price * c.quantity;
                }, 0)}
                    <br /><br />
                </div>
            </div>
  );
};
const mapStateToProps = (state) => {
  return { cart: state.cartItem };
};
export default connect(mapStateToProps)(CheckOut);
