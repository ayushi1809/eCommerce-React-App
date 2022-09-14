const ProductFormField = (AddProductFormElements) => {
  const map = (AddProductFormElements.map(item => item.name));
  const convertArrayToObject = map.reduce((a, v) => ({ ...a, [v]: '' }), {});
  return convertArrayToObject;
};
export default ProductFormField;
