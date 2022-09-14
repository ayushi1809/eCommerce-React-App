import { EMAIL_REGEX, PASSWORD_REGEX } from './regex';
export const InputFormElements = [
  {
    type: 'text',
    name: 'email',
    placeholder: 'email',
    label: 'Email',
    validation: {
      requiredField: 'Enter your Email',
      regex: EMAIL_REGEX,
      regexMsg: 'Invalid Email'
    }
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'password',
    label: 'password',
    required: true,
    validation: {
      max: 20,
      min: 8,
      requiredField: 'Enter Password',
      maxMsg: 'password length not exceed 20',
      minMsg: 'password length is not less than 8',
      regex: PASSWORD_REGEX,
      regexMsg: 'Password should contain one uppercase,lowercase,special character,numeric number '
    }
  }
];
