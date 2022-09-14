import React from 'react';
import FetchApi from '../../utils/fetchApi';
import validation from '../../utils/validation';
import Navigation from '../../component/navigation/Navigation';
import { addProductFormElements } from './addProductFormElements';
import formInputField from '../../utils/formInputField';
import './addProduct.css';
class AddProduct extends React.Component {
  constructor () {
    super();
    const productFormData = formInputField(addProductFormElements);
    this.state = {
      product: productFormData,
      status: '',
      errors: {}
    };
  }

    addProduct = async () => {
      const { product } = this.state;
      const errorObj = validation(addProductFormElements, product);
      if (Object.keys(errorObj).length === 0) {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product)
        };
        FetchApi(`${process.env.REACT_APP_DATA_URL}`, requestOptions, data => {
          if (data.id) {
            this.setState({
              status: 'product added',
              errors: {}
            });
          }
        }, e => {
          this.setState({
            status: e.message
          });
        }
        );
      } else {
        this.setState({
          errors: errorObj
        });
      }
    }

    handleChange = (e) => {
      this.setState({
        product: {
          ...this.state.product,
          [e.target.name]: e.target.value
        }
      });
    }

    render () {
      const { product, status, errors } = this.state;
      return (
            <div>
                < Navigation/>
                {status}
                <div className="main">
                    <p>Add Product</p>
                    <br />
                    {addProductFormElements.map(input =>
                        <div key={input.name}>
                            <input {...input} value={product[input.name]} className="inner" onChange={this.handleChange} />
                            {errors &&
                                            <div className ="error">{errors[input.name]}</div>
                                        }
                        </div>
                    )
                    }
                    <button className="btn" data-testid ='btn' onClick={this.addProduct}>Add Product</button>
                </div>
            </div>
      );
    }
}
export default AddProduct;
