import React from 'react';
import AddToCarts from '../AddToCarts';
import { fireEvent, screen } from '@testing-library/react';
import initialState from './initialStateData';
import renderWithState from './renderWithState';

describe('add to cart page', () => {
  beforeEach(() => {
    renderWithState(< AddToCarts />, { initialState: initialState });
  });
  test('add quantity to cart', () => {
    fireEvent.click(screen.getByTestId('delete'));
  });
  test('remove quantity from cart', () => {
    fireEvent.click(screen.getByTestId('remove'));
  });
  test('delete item from cart', () => {
    fireEvent.click(screen.getByTestId('add'));
  });
});
