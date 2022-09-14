import React from 'react';
import Navigation from '../Navigation';
import { shallow } from 'enzyme';
describe('navigation', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  test('Product page', () => {
    expect(wrapper.find('.active').props().to).toBe('/product');
  });

  test('Add product page', () => {
    expect(wrapper.find('.activeaddproduct').props().to).toBe('/addProduct');
  });

  test('Add to cart page', () => {
    expect(wrapper.find('.activeaddtocart').props().to).toBe('/addtocart');
  });

  test('Logout page', () => {
    expect(wrapper.find('.logoutlink').props().to).toBe('/');
  });
});
