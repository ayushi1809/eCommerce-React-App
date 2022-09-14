import { ADD_QUANTITY, REMOVE_QUANTITY, ADD_TO_CART, DELETE_FROM_CART } from '../actionType/actionType';
export function addQuantity (item) {
  return {
    type: ADD_QUANTITY,
    payload: item
  };
}
export function removeQuantity (item) {
  return {
    type: REMOVE_QUANTITY,
    payload: item
  };
}
export function addToCart (item) {
  return {
    type: ADD_TO_CART,
    payload: item
  };
}
export function deleteFromCart (item) {
  return {
    type: DELETE_FROM_CART,
    payload: item
  };
}
