import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/actionCreations/actionCreations';
import Navigation from '../../component/navigation/Navigation';
import FilterPrice from './FilterPrice';
import './Product.css';
export class Product extends Component {
  constructor () {
    super();
    this.state = {
      data: [],
      selectValue: '',
      value: '',
      updatedData: [],
      offset: 0,
      perPage: 4,
      currentPage: 0,
      postData: '',
      pageCount: 0,
      sortedData: []
    };
  }

  recievedData = async () => {
    const { updatedData, offset, perPage } = this.state;
    const slice = updatedData.slice(offset, offset + perPage);
    this.setState({
      sortedData: slice,
      pageCount: Math.ceil((updatedData.length) / (perPage))
    });
  }

  componentDidMount () {
    fetch(`${process.env.REACT_APP_DATA_URL}`)
      .then((res) => res.json())
      .then(result => {
        this.setState({
          data: result,
          updatedData: result
        });
        this.recievedData();
      })
      .catch(e => console.log(e));
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.recievedData();
    });
  };

  cart = (item) => {
    item.quantity = 1;
    this.props.dispatch(addToCart(item)
    );
  }

  sortByPrice = (e) => {
    this.setState({ selectValue: e.target.value }, () => this.sortByPriceList());
  }

  sortByPriceList = () => {
    const { selectValue, data } = this.state;
    if (selectValue === FilterPrice.HTL) {
      const sortByAsce = data.sort((a, b) => (b.price - a.price));
      this.setState({
        updatedData: sortByAsce
      }, () => this.recievedData());
    } else if (selectValue === FilterPrice.LTH) {
      const sortByDece = data.sort((a, b) => (a.price - b.price));

      this.setState({
        updatedData: sortByDece
      }, () => this.recievedData());
    }
  }

  filterByCategory = (e) => {
    this.setState({ value: e.target.value }, () => this.filterByCategoryList());
  }

  filterByCategoryList = () => {
    const { data } = this.state;
    const result = data.filter(item => item.category === this.state.value);
    this.setState({
      updatedData: result
    }, () => this.recievedData());
  }

  render () {
    const filterCategory = this.state.data.map(item => item.category);
    const uniqueCategory = filterCategory.filter((q, idx) => filterCategory.indexOf(q) === idx);
    const convertArrayToObjects = uniqueCategory.reduce((a, v) => ({ ...a, [v]: v }), {});
    return (
      <React.Fragment>
        <div>
          < Navigation />
          <label className="label1"> sort by price </label>
          <select className="option1" onChange={this.sortByPrice}>
            <option value="select"> Select </option>
            {Object.values(FilterPrice).map(item =>
              <option key={item} value={item.keys}>{Object.values(item)}</option>
            )
            }
          </select>
          <label className="label2"> category </label>
          <select className="option2" onChange={this.filterByCategory}>
            <option value="select">Select</option>
            {Object.values(convertArrayToObjects).map(item =>
              <option key={item} value={item.keys}>{Object.values(item)}</option>
            )
            }
          </select>
          <br /><br />
          {this.state.sortedData.map(item =>
            <div className="parent" key={item.id} >
              <img src={item.image} alt="" />
              {item.price}<br />
              <div className="wrap">
                {item.title}
              </div>
              <br /><br /><br />
              <Link to='/addtocart'>
                <button className="btn1" data-testid='addcart' onClick={() => this.cart(item)}>
                  ADD TO CART
                </button>
              </Link>
              <Link to={`/info/${item.id}`}>
                <button className="btn2">
                  VIEW
                </button>
              </Link>
            </div>
          )
          }
          <br />
          <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'} />
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}
export default connect()(Product);
