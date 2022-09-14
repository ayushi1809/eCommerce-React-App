import React from 'react';
import AddProduct from '../AddProduct';
import { shallow } from 'enzyme';
import { product } from './data';

describe('Add Product', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = shallow(<AddProduct/>);
  });
  it('catch part', async () => {
    const e = { message: 'Failed to fetch' };
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.reject(e);
    });
    wrapper.instance().setState({ product });
    wrapper.find('button').simulate('click');
  });
  it('test api call', () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(product)
      })
    );
    wrapper.instance().setState({ product });
    wrapper.find('button').simulate('click');
  });
  it('test onchange', () => {
    wrapper.find('input').at(1).simulate('change', { target: { name: 'price', value: 50 } });
    expect(wrapper.find('input').at(1).props().value).toEqual(50);
  });
});
