import { ADD_QUANTITY, ADD_TO_CART, DELETE_FROM_CART, REMOVE_QUANTITY } from '../../actionTypes/ActionTypes';
import { cartOperations } from '../reducer';
import { payload, data, expectedOutput } from './data';
describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy-action' };
    const initialState = { cartItem: [] };
    expect(cartOperations(undefined, action)).toEqual(initialState);
  });
  test('AddQuantity', () => {
    const action = { type: ADD_QUANTITY, payload: payload };
    const expectedState = { cartItem: [payload] };
    expect(cartOperations(expectedState, action)).toEqual(expectedState);
  });
  test('remove quantity', () => {
    const action = { type: REMOVE_QUANTITY, payload: payload };
    const expectedState = { cartItem: [payload] };
    expect(cartOperations(expectedState, action)).toEqual(expectedState);
  });
  test('add to cart', () => {
    const action = { type: ADD_TO_CART, payload: payload };
    const expectedState = { cartItem: [payload] };
    expect(cartOperations(expectedState, action)).toEqual(expectedState);
  });
  test('add to cart else part', () => {
    const action = { type: ADD_TO_CART, payload: data };
    const expectedState = { cartItem: [payload] };
    expect(cartOperations(expectedState, action)).toEqual(expectedOutput);
  });
  test('delete from cart', () => {
    const action = { type: DELETE_FROM_CART, payload: payload };
    const expectedState = { cartItem: [payload] };
    expect(cartOperations(expectedState, action)).toEqual({ cartItem: [] });
  });
});
