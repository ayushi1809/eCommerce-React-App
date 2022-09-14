const validation = (formField, formValue) => {
  const errors = {};
  formField.forEach(item =>  {
    const { name, validation } = item;
    if (!formValue[name] && validation) {
      errors[name] = validation.requiredField;
    }
    if (formValue[name] && validation.min && formValue[name].length < validation.min) {
      errors[name] = validation.minMsg;
    }
    if (validation.max && formValue[name].length > validation.max) {
      errors[name] = validation.maxMsg;
    }
    if (formValue[name] && !Object.values(errors).includes(validation.minMsg) && !Object.values(errors).includes(validation.maxMsg) && validation.regex && !(validation.regex.test(formValue[name]))) {
      errors[name] = validation.regexMsg;
    }
  }
  );
  return errors;
};
export default validation;
