import { shallow } from 'enzyme';
import React from 'react';
import SignUpPage from '../SignUpPage';
const historyMock = { push: jest.fn() };
describe('SignUpPage', () => {
  let wrapper, instance;
  beforeEach(async () => {
    wrapper = shallow(<SignUpPage history = {historyMock}/>);
    instance = wrapper.instance();
  });
  it('token not generated', () => {
    const emailExist = 'Email already exists';
    const formFields = {
      email: 'Ayushi@gmail.com',
      password: 'Ayushi@1234'
    };
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(emailExist)
      })
    );
    instance.setState({ formFields });
    wrapper.find('button').simulate('click');
  });
  it('renders user data', () => {
    const formFields = {
      email: 'Ayushi@gmail.com',
      password: 'Ayushi@1234'
    };
    const result = {
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5dXNoaUBnbWFpbC5jb20iLCJpYXQiOjE2NDAyNDU4MzQsImV4cCI6MTY0MDI0OTQzNCwic3ViIjoiMSJ9.b8GBJyXOG8aAxIbDCXetDEbqZ7HUrMqqlR_UDheddKE'
    };
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(result)
      })
    );
    instance.setState({ formFields });
    wrapper.find('button').simulate('click');
  });
  it('if user field is empty', () => {
    const formFields = {
      email: '',
      password: ''
    };
    instance.setState({ formFields });
    wrapper.find('button').simulate('click');
  });
  it('if min length is not 8', () => {
    const formFields = {
      email: 'Ayushi@gmail.com',
      password: 'ayu'
    };
    instance.setState({ formFields });
    wrapper.find('button').simulate('click');
  });
  it('regex error', () => {
    const formFields = {
      email: 'Ayushigmail.com',
      password: 'ayujhysedkhga2345nhsuldrf'
    };
    instance.setState({ formFields });
    wrapper.find('button').simulate('click');
  });
  it('test on change event', () => {
    wrapper.find('input').at(0).simulate('change', { target: { name: 'email', value: 'ayushi@gmail.com' } });
    expect(wrapper.find('input').at(0).props().value).toEqual('ayushi@gmail.com');
  });
});
