import { shallow } from 'enzyme';
import React from 'react';
import { Product } from '../Product';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { data, sortedData } from './data';
// const sortedData = [{
//   id: 1,
//   title: 'Mens Casual Premium Slim Fit T-Shirts ',
//   price: 22.3,
//   description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
//   category: 'men clothing',
//   image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
// },
// {
//   id: 2,
//   title: 'Mens Casual Premium Slim Fit T-Shirts ',
//   price: 100,
//   description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
//   category: 'men clothing',
//   image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
// }
// ];
describe('product  page', () => {
  let wrapper, instance, container;
  beforeEach(() => {
    wrapper = shallow(<Product />);
    instance = wrapper.instance();
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  it('componentDidMount catch part', async () => {
    const e = { message: 'Failed to fetch' };
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.reject(e);
    });
    await act(async () => {
      render(<Router><Product /></Router>, container);
    });
    jest.restoreAllMocks();
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it('componentDidMount', async () => {
    jest.spyOn(Product.prototype, 'componentDidMount');
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(data);
        }
      });
    });
    await act(async () => {
      render(<Router><Product /></Router>, container);
    });
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it('onchange for price HTL', () => {
    instance.setState({ data });
    wrapper.find('select').at(0).simulate('change', { target: { name: ' HTL', value: 'high to low' } });
  });
  it('onchange for price LTH', () => {
    instance.setState({ data });
    wrapper.find('select').at(0).simulate('change', { target: { name: 'LTH', value: 'low to high' } });
  });
  it('onchange for category', () => {
    instance.setState({ data });
    wrapper.find('select').at(1).simulate('change', { target: { value: 'men clothing' } });
  });
  it('handle page', () => {
    const e = {
      selected: 0
    };
    const handlePageClick = jest.fn(instance.handlePageClick);
    instance.handlePageClick(e);
    expect(handlePageClick).toHaveBeenCalled();
  });
  it('button clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<Product dispatch = {dispatch} />);
    wrapper.instance().setState({ sortedData });
    wrapper.find('button').at(0).simulate('click');
    expect(dispatch).toHaveBeenCalled();
  });
});
