import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './cart-icon.css'
import Customer from '../customerDetails/customerDetails'
class CartIcon extends Component {
    constructor(props) {
        super(props)
        this.count = 1

        this.state = {
            item: null,
            purchaseBookIndividualCount: [],
            totalPrice: 0,
            hideForm: false,
            callCustomer: null
        }

        this.state.item = this.props.location.state.selectedBooks
        this.state.item.map((item) => {
            { this.state.totalPrice = this.state.totalPrice + parseInt(item.price) }
        })
    }


    submit = () => {
        this.setState(this.state = { hideForm: !this.state.hideForm })
        console.log("done", this.state.hideForm)
    }

    decrement = (i, price) => {
        if (this.state.purchaseBookIndividualCount[i] != undefined) {
            if (this.state.purchaseBookIndividualCount[i] > 1) {
                this.state.purchaseBookIndividualCount[i]--;
                this.setState({ purchaseBookIndividualCount: this.state.purchaseBookIndividualCount });
                this.state.totalPrice = this.state.totalPrice - parseInt(price);
                this.setState({ totalPrice: this.state.totalPrice })
            }
        }
    }

    increment = (i, price) => {
        if (this.state.purchaseBookIndividualCount[i] != undefined) {
            this.state.purchaseBookIndividualCount[i]++;
            this.setState({ purchaseBookIndividualCount: this.state.purchaseBookIndividualCount });
            this.state.totalPrice = this.state.totalPrice + parseInt(price);
            this.setState({ totalPrice: this.state.totalPrice })
        }
    }


    remove = (i, price) => {
        this.state.totalPrice = this.state.totalPrice - (parseInt(price) * this.state.purchaseBookIndividualCount[i]);
        this.setState({ totalPrice: this.state.totalPrice })
        this.state.item.splice(i, 1);
        this.setState({ item: this.state.item })
    }

    render() {
        var Books = this.state.item.map((item, i) => {
            this.state.purchaseBookIndividualCount.push(1)
            if (item != undefined) {
                return (
                    <div>
                        <div className="cart-image1">
                            <img className="image" src={item.image}></img>
                            <div className="book-title">{item.title}
                                <div className="book-author">{item.author}</div>
                                <div className="book-price" > Rs.{item.price}</div>
                                <div>
                                    <button className="minus-plus" onClick={() => { this.decrement(i, item.price) }}>-</button>
                                    <input className="text" value={this.state.purchaseBookIndividualCount[i]} ></input>
                                    <button className="minus-plus" onClick={() => { this.increment(i, item.price) }}>+</button>
                                    <button className="remove" onClick={() => { this.remove(i, item.price) }}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
        return (
            <div>
                <div className="border">
                    <div className="cart-title">My Cart({this.state.item.length})</div>
                    {Books}
                    <div className="total-price"><p id="totalprice">Total Price: {this.state.totalPrice}</p></div>
                    <button className="place-order" onClick={this.submit} >PLACE ORDER </button>
                </div>

                <div>
                    {this.state.item.length >= 1 & this.state.hideForm ?
                        <Customer detail={this.state.item} formDetails={this.state.hideForm} />
                        :
                        <div> <Customer detail={this.state.item} formDetails={this.state.hideForm} />
                        </div>
                    }
                </div>

            </div>
        )
    }
}
export default withRouter(CartIcon);