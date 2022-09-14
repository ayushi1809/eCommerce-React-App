import { combineReducers } from 'redux';
import { ADD_QUANTITY, ADD_TO_CART, REMOVE_QUANTITY, DELETE_FROM_CART } from '../actionType/actionType';
export const initialState = {
  cartItem: []
};
export function cartOperations (state = initialState, action) {
  switch (action.type) {
    case ADD_QUANTITY:
      state.cartItem.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      return {
        ...state, cartItem: [...state.cartItem]
      };
    case REMOVE_QUANTITY:
      state.cartItem.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = Math.max(item.quantity - 1, 1);
        }
        return item;
      });
      return {
        ...state, cartItem: [...state.cartItem]
      };
    case ADD_TO_CART:
    {
      console.log('hi');
      console.log(state);
      const inCart = state.cartItem.find(item => item.id === action.payload.id);
      console.log(inCart);
      if (inCart) {
        return {
          ...state,
          cartItem: [...state.cartItem]
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, action.payload]
        };
      }
    }
    case DELETE_FROM_CART:
    {
      return {
        ...state,
        cartItem: state.cartItem.filter(item => item.id !== action.payload.id)
      };
    }
    default:
      return state;
  }
}
const rootReducer = combineReducers({ cartOperations });
export default rootReducer;
