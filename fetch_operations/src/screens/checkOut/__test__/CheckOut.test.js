import React from 'react';
import CheckOut from '../CheckOut';
import initialState from '../../addToCart/__test__/initialStateData';
import renderWithState from '../../addToCart/__test__/renderWithState';
describe('checkout page', () => {
  test('checkout data', () => {
    renderWithState(<CheckOut />, { initialState: initialState });
  });
});
