import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { cartOperations } from '../../../redux/reducer/reducer';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
const renderWithState = (ui, { initialState, ...renderOptions } = {}) => {
  const store = createStore(cartOperations, initialState);
  const Wrapper = ({ children }) => (
            <Provider store={store}><BrowserRouter>{children}</BrowserRouter></Provider>

  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
export default renderWithState;
