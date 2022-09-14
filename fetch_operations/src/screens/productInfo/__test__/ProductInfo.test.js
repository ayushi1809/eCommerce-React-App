import ProductInfo from '../ProductInfo';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { product } from './data';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe('product Info', () => {
  it('renders user data', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(product)
      })
    );
    await act(async () => {
      render(<ProductInfo match={{ params: { id: 2 } }} />, container);
    });
  });
});
