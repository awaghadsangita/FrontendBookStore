import React, { Component } from 'react';
import './dashboard.css';

class dashBoard extends Component {
  handleSearch = (event) => {
    if (event.target.value.length >= 1) {
      this.setState({ searchValue: event.target.value });
    }
  }
  render() {
    return (
      <div className='upper'>
        <div className='dashboard'>
          <div className='logo'>
            <img src="https://img.icons8.com/ios/64/000000/open-book.png" alt="optional" />
          </div>
          <div className='title'>Bookstore</div>
          <div className="search">
            <InputBase
              type="search"
              placeholder="Search…"
              onChange={this.handleSearch}
              onKeyDown={this.handleSearchBook}
              startAdornment={(
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )}
            />
          </div>
        </div>
        <button className="cart-icon w3-btn" onClick={() => this.onSubmit()}>
          Cart
          <ShoppingCartOutlinedIcon /><span class="w3-badge "><button className="itemCounts" disabled>{this.state.count}</button></span>
        </button>
      </div>
    );
  }
}

export default dashBoard;