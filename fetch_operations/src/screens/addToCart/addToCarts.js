import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addQuantity, deleteFromCart, removeQuantity } from '../../redux/actionCreations/actionCreations';
import Navigation from '../../component/navigation/Navigation';
import './AddToCarts.css';
const AddToCarts = (props) => {
  const add = (item) => {
    props.dispatch(addQuantity(item));
  };
  const less = (item) => {
    props.dispatch(removeQuantity(item));
  };
  const deleteItem = (item) => {
    props.dispatch(deleteFromCart(item));
  };
  return (
        <div>
            <Navigation />
            {props.cart && props.cart.length > 0
              ? <div>
                    {props.cart.map(item =>
                        <div className="addtocart" key={item.id}>
                            <img src={item.image} alt="" /><br></br>
                            <div className = "wrapping">
                            {item.title}
                            </div>
                            Price:{item.price}<br />
                            <button className="add" data-testid='add' onClick={() => add(item)} >+</button>
                            Quantity:{item.quantity}
                            {
                                (item.quantity > 1) &&
                                <span><button className="less" data-testid='remove' onClick={() => less(item)}>-</button></span>
                            }
                            <br /><br />
                            <button className="delete" data-testid='delete' onClick={() => deleteItem(item)}>Delete</button>
                        </div>
                    )}
                    <br /><br /><br />
                    <div className="totalandcheckout">
                        CartTotal:{props.cart.reduce((a, c) => {
                      return a + parseFloat(c.price).toFixed(2) * c.quantity;
                    }, 0)}
                        <br /><br />
                        <Link to='/checkout'><button className="checkout">Checkout</button></Link>
                    </div>
                </div>
              : <div className="container-fluid mt-100">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body cart">
                                    <div className="col-sm-12 empty-cart-cls text-center"> <img src="https://i.imgur.com/dCdflKN.png" width="130" alt="" height="130" className="img-fluid mb-4 mr-3" />
                                        <h3><strong>Your Cart is Empty</strong></h3>
                                        <h4>Add something to make you happy :)</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
  );
};
const mapStateToProps = (state) => {
  return { cart: state.cartItem };
};
export default connect(mapStateToProps)(AddToCarts);
