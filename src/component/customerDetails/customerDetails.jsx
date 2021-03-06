import React, { Component } from 'react';
import './customerDetails.css';
import Button from '@material-ui/core/Button'
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import service from '../../service/service'
import { withRouter } from 'react-router-dom';

class CustomerDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Phone_Number: '',
            Pincode: '',
            Email: '',
            Address: '',
            city: '',
            LandMark: '',
            errors: {
                Name: '',
                Phone_Number: '',
                Pincode: '',
                Email: '',
                Address: '',
                city: '',
                LandMark: ''
            },
            formfilled: false,
            formHide: false,
            hidden: false,
            divHide: false,
            buttonHide: true,
            item: null,
            id: null
        };
        console.log('asdfasdf', this.props.formDetails)
        this.state.item = this.props.detail;
        this.state.formHide = this.props.formDetails;

    }

    formHide = () => {
        this.setState({ formHide: true })
        console.log("done");
    }

    editDetails = () => {
        console.log("done")
        this.setState(this.state = { formfilled: !this.state.formfilled });
        this.setState(this.state = { buttonHide: !this.state.buttonHide });
        this.setState(this.state = { hidden: !this.state.hidden });

    }

    handleValueChange = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        const { name, value } = event.target;
        let errors = this.state.errors;
        const phonenumber = RegExp('^[0-9]{10}$');
        const pincode = RegExp('^[1-9][0-9]{5}$');
        const email = RegExp('^[0-9a-zA-Z]+([-,_,+,.]{1}[0-9A-Za-z]+){0,1}@[0-9A-Za-z]+.[A-Za-z]{1,3}(.[a-zA-Z]{1,3}){0,1}$');

        switch (name) {
            case 'Name':
                errors.Name = value.length < 2
                    ? 'Full Name must be 5 characters long!'
                    : '';
                break;
            case 'Phone_Number':
                errors.Phone_Number = phonenumber.test(value)
                    ? ''
                    : 'Phone Number is not valid!';
                break;
            case 'Pincode':
                errors.Pincode = pincode.test(value)
                    ? ''
                    : 'Pin code is not valid!';
                break;
            case 'Email':
                errors.Email = email.test(value)
                    ? ''
                    : 'Email is not valid!';
                break;
            case 'Address':
                errors.Address = value.length < 5
                    ? 'Address is not valid!'
                    : '';
                break;
            case 'city':
                errors.city = value.length < 3
                    ? 'city is not valid!'
                    : '';
                break;
            case 'Landmark':
                errors.Landmark = value.length < 3
                    ? 'Landmark is not proper!'
                    : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value }, () => {
            console.log(errors)
        })
    }
    onSubmit = (event) => {
        event.preventDefault();

        const validateForm = (errors) => {
            let valid = false;
            console.log("length"+this.state.Name.length)
            if (this.state.Name.length > 2 && this.state.Phone_Number.length > 9 && this.state.Pincode.length > 5 &&
                this.state.Email.length > 3 && this.state.Address.length > 3 && this.state.city.length > 3 && this.state.LandMark.length > 3) {
                valid = true;
                Object.values(errors).forEach(
                    (val) => val.length > 0 && (valid = false)
                );
                return valid;
            }
        }


        if (validateForm(this.state.errors)) {
            this.setState({ formfilled: !this.state.formfilled });
            this.setState({ buttonHide: !this.state.buttonHide });
            this.setState({ hidden: !this.state.hidden });
            this.setState({ divHide: true })
        } else {
            console.error('Invalid Form')
        }
    }

    onCheckout = () => {
        const details = {
            Name: this.state.Name,
            Phone_Number: this.state.Phone_Number,
            Pincode: this.state.Pincode,
            Address: this.state.Address,
            city: this.state.city,
            Email: this.state.Email,
            LandMark: this.state.LandMark,
            Type: this.state.Type,
            Books: this.state.item
        };
        new service().customerDetails(details).then(data => {
            this.props.history.push('/order', data.data.result.result._id);
        })
    }

    render() {
        const { errors } = this.state;
        var Books = this.state.item.map((item, i) => {
            return (
                <div>
                    <div className="divHide" style={{ display: this.state.divHide ? 'block' : 'none' }}>
                        <div>
                            <div className="cart-image">
                                <img className='image' src={item.image}></img>
                                <div className="book-title">{item.title}
                                    <div className="book-author">{item.author}</div>
                                    <div className="book-price"> Rs.{item.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                <div className='subMain'>
                    <div className="border" >
                        <div className='orderSummary'>CustomerDetails</div>
                        <div className='formHide' style={{ display: this.state.formHide ? 'block' : 'none' }}>
                            <Button className="editButton" component="span"
                                style={{
                                    marginLeft: '90%',
                                    display: this.state.hidden ? 'block' : 'none'
                                }}
                                onClick={this.editDetails}
                            >Edit</Button>

                            <div className='content'>
                                <div className='name'>
                                    <TextField
                                        id="outlined-basic"
                                        className='textField'
                                        label="Name"
                                        name="Name"
                                        required
                                        variant="outlined"
                                        value={this.state.Name}
                                        onChange={(event) => this.handleValueChange(event)}
                                        disabled={this.state.formfilled}
                                    />
                                    {errors.Name.length > 0 && <span className="error">{errors.Name}</span>}
                                </div>
                                <div className='phonenumber'>
                                    <TextField
                                        id="outlined-basic"
                                        className='testField'
                                        label="Phone Number"
                                        name="Phone_Number"
                                        variant="outlined"
                                        required
                                        value={this.state.Phone_Number}
                                        onChange={(event) => this.handleValueChange(event)}
                                        disabled={this.state.formfilled}
                                    />
                                    {errors.Phone_Number.length > 0 && <span className="error">{errors.Phone_Number}</span>}
                                </div>

                            </div>
                            <div className='content'>
                                <div className='name'>
                                    <TextField
                                        id="outlined-basic"
                                        className='textField'
                                        label="Pincode"
                                        variant="outlined"
                                        name="Pincode" value={this.state.Pincode}
                                        required
                                        onChange={(event) => this.handleValueChange(event)}
                                        disabled={this.state.formfilled}
                                    />
                                    {errors.Pincode.length > 0 && <span className="error">{errors.Pincode}</span>}
                                </div>
                                <div className='phonenumber'>
                                    <TextField
                                        id="outlined-basic"
                                        className='textField'
                                        label="Email"
                                        variant="outlined"
                                        name="Email"
                                        value={this.state.Email}
                                        variant="outlined"
                                        required
                                        onChange={(event) => this.handleValueChange(event)}
                                        disabled={this.state.formfilled}
                                    />
                                    {errors.Email.length > 0 && <span className="error">{errors.Email}</span>}
                                </div>
                            </div>
                            <div className='address'>
                                <TextField id="outlined-multiline-static"
                                    style={{ width: '66%' }}
                                    label="Address"
                                    name="Address"
                                    multiline rows="3"
                                    required
                                    value={this.state.Address}
                                    onChange={(event) => this.handleValueChange(event)}
                                    disabled={this.state.formfilled} variant="outlined"
                                />
                                {errors.Address.length > 0 && <span className="error">{errors.Address}</span>}
                            </div>
                            <div className='content'>
                                <div className='name'>
                                    <TextField
                                        id="outlined-basic"
                                        className='textField'
                                        label="city/town"
                                        name="city"
                                        variant="outlined"
                                        required
                                        value={this.state.city}
                                        onChange={(event) => this.handleValueChange(event)}
                                        disabled={this.state.formfilled} />
                                    {errors.city.length > 0 && <span className="error">{errors.city}</span>}
                                </div>
                                <div className='phonenumber'>
                                    <TextField
                                        id="outlined-basic"
                                        className='textField'
                                        label="Landmark"
                                        name="LandMark"
                                        required
                                        variant="outlined"
                                        value={this.state.LandMark}
                                        onChange={(event) => this.handleValueChange(event)}
                                        disabled={this.state.formfilled} />
                                    {errors.LandMark.length > 0 && <span className="error">{errors.LandMark}</span>}
                                </div>
                            </div>
                            <div style={{ paddingLeft: '2%', paddingBottom: '1%' }}>Type</div>
                            <FormControl component="fieldset" style={{ paddingLeft: '2%' }}>
                                <RadioGroup aria-label="Type" color="primary" name="Type" row>
                                    <FormControlLabel
                                        value="Home"
                                        onChange={(event) => this.handleValueChange(event)}
                                        control={<Radio />}
                                        disabled={this.state.formfilled}
                                        label="Home" />

                                    <FormControlLabel
                                        value="Work" control={<Radio />}
                                        onChange={(event) => this.handleValueChange(event)}
                                        disabled={this.state.formfilled}
                                        label="Work" />

                                    <FormControlLabel
                                        value="Other"
                                        onChange={(event) => this.handleValueChange(event)}
                                        disabled={this.state.formfilled}
                                        control={<Radio />}
                                        label="Other" />

                                </RadioGroup>
                            </FormControl>

                            <div className='continue' style={{ display: this.state.buttonHide ? 'block' : 'none' }} onClick={this.onSubmit} >CONTINUE</div>
                        </div>
                    </div>

                </div>
                <div className='border' >
                    <div className="orderSummary">Order Summary</div>
                    {Books}
                    <div className="buttonHide" style={{ display: this.state.divHide ? 'block' : 'none' }}>
                        <Button onClick={() => this.onCheckout()} variant="contained" color="primary">Checkout</Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(CustomerDetails);