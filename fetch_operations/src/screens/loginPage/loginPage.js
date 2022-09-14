import React from 'react';
import './LoginPage.css';
import validate from '../../utils/validation';
class LoginPage extends React.Component {
  constructor () {
    super();
    this.state = {
      data: [],
      formFields: {
        email: '',
        password: ''
      },
      errors: {},
      login: false,
      store: null
    };
  };

    // When any field value changed
    getValueFromUser = (e) => {
      this.setState({
        formFields: {
          ...this.state.formFields,
          [e.target.name]: e.target.value
        }
      });
    }

    // When user submits the form after validation
    handleSubmit = () => {
      const errorObj = validate(this.state.formFields);
      if (Object.keys(errorObj).length === 0) {
        const formFields = {};
        formFields.email = '';
        formFields.password = '';
        this.setState({ formFields: formFields });
        this.props.history.push('product');
      } else {
        this.setState({
          errors: errorObj
        });
      }
    }

    render () {
      const { formFields } = this.state;
      const { errors } = this.state;
      return (
            <div id="id01" className="modal">
                <div className="modal-content animate">
                    <div className="container">
                        <p>Login</p>
                        <label ><b>Email</b></label>
                        <input type="text" name="email" value={formFields.email} onChange={this.getValueFromUser} />
                        {errors.email}<br />
                        <label ><b>Password</b></label>
                        <input type="password" name="password" value={formFields.password} onChange={this.getValueFromUser} />
                        {errors.password}
                        <button type="text" className = "submit" onClick={() => this.handleSubmit()}>Login</button>
                    </div>
                </div>
            </div>
      );
    }
}
export default LoginPage;
