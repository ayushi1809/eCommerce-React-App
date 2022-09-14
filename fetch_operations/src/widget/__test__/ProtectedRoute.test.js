import { mount } from 'enzyme';
import ProtectedRoute from '../protectedRoute';
import { MemoryRouter } from 'react-router-dom';

describe('ProtectedRoute Page', () => {
  let props, AComponent, enzymeWrapper;
  beforeEach(() => {
    AComponent = () => <div>AComponent</div>;
    props = { path: '/aprivatepath', component: AComponent };
    enzymeWrapper = mount(
      <MemoryRouter initialEntries={[props.path]}>
        <ProtectedRoute {...props} />
      </MemoryRouter>
    );
  });
  it('should render component if user has been authenticated', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5dXNoaUBnbWFpbC5jb20iLCJpYXQiOjE2NDAyNDU4MzQsImV4cCI6MTY0MDI0OTQzNCwic3ViIjoiMSJ9.b8GBJyXOG8aAxIbDCXetDEbqZ7HUrMqqlR_UDheddKE';
    Storage.prototype.getItem = jest.fn(() => token);
    expect(enzymeWrapper.exists(AComponent)).toBe(true);
  });
  it('should redirect if user is not authenticated', () => {
    const history = enzymeWrapper.find('Router').prop('history');
    expect(history.location.pathname).toBe('/');
  });
});
