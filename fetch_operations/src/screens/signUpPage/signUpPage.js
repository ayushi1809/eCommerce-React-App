import React from 'react';
import validation from '../../utils/validation';
import { InputFormElements } from './signUpFormElement';
import formInputField from '../../utils/formInputField';
import './SignUpPage.css';
class SignUpPage extends React.Component {
  constructor () {
    super();
    const formInputName = formInputField(InputFormElements);
    this.state = {
      formTextFields: formInputName,
      formFields: formInputName,
      errors: {
        authErrors: ''
      }
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
    const { formFields, formTextFields } = this.state;
    const errorObj = validation(InputFormElements, formFields);
    console.log(errorObj);
    if (Object.keys(errorObj).length === 0) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formFields)
      };
      fetch(`${process.env.REACT_APP_USERS_URL}`, requestOptions)
        .then((response) => {
          return response.json();
        }).then((result) => {
          if (result.accessToken) {
            localStorage.setItem('acessToken', result.accessToken);
            this.setState({
              formFields: formTextFields,
              errors: {}
            });
            this.props.history.push('product');
          } else {
            this.setState({
              errors: {
                authErrors: result
              }
            });
          }
        });
    } else {
      this.setState({
        errors: errorObj
      });
    }
  }

  render () {
    const { formFields, errors } = this.state;
    return (
      <div id="id01" className="modal">
        <div className="modal-content animate">
          <div className="tag">{errors.authErrors}</div>
          <div className="container">
            <p>SignUp</p>
            {
              InputFormElements.map(input =>
                <div key={input.name}>
                  <label>{input.label}</label>
                  <input {...input} value={formFields[input.name]} className="field" onChange={this.getValueFromUser} />
                  {errors &&
                    <div className="tag">{errors[input.name]}</div>
                  }
                </div>
              )
            }
            <button type="text" className="submit" data-testid='submit' onClick={() => this.handleSubmit()}>SignUp</button>
            <a href="/forgotPassword" className="forgot-password">Forgot Password</a>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUpPage;
