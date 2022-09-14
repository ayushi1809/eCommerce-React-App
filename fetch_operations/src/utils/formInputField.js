const formInputField = (inputFormElements) => {
  const map = inputFormElements.map(item => item.name);
  const convertArrayToObject = map.reduce((a, v) => ({ ...a, [v]: '' }), {});
  return convertArrayToObject;
};
export default formInputField;
