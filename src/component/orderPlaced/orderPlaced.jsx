import React, { Component } from "react";
import './orderPlaced.css';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import oredrPlacedImage from './Order-placed-successfully.png'


class OrderPlaced extends Component {
    constructor(props) {
        super(props);
    }
    redirectToDashboard() {
        this.props.history.push('/')
    }
    render() {

        return (
            <div>
                <div align="center" >
                    <div align="center">
                        <img src={oredrPlacedImage} height="300" width="300" />
                    </div>
                    <div>
                        <p className="orderInfoParagraph" style={{ marginTop: '1.25%', marginBottom: '0.25%' }}>hurray!!! your order is confirmed</p>
                        <p className="orderInfoParagraph" style={{ margin: '0.25%' }}>the order id is #{this.props.location.state}, save the order id for</p>
                        <p className="orderInfoParagraph" style={{ marginTop: '0.25%', marginBottom: '1.5%' }}>further communication</p>
                    </div>
                    <div className="tableDiv">
                        <TableContainer className="table">
                            <Table className="table">
                                <TableBody>
                                    <TableRow className="headerTableRow">
                                        <TableCell className="tableCellLeft" style={{ backgroundColor: 'whitesmoke' }}><p className="orderInfoParagraph">Email Us</p></TableCell>
                                        <TableCell className="center" style={{ backgroundColor: 'whitesmoke' }}><p className="orderInfoParagraph">Contact Us</p></TableCell>
                                        <TableCell className="tableCellRight" style={{ backgroundColor: 'whitesmoke' }}><p className="orderInfoParagraph">Address</p></TableCell>
                                    </TableRow>
                                    <TableRow className="TableRow" >
                                        <TableCell className="tableCellLeft"><p className="orderInfoParagraph">admin@bookstore.com</p></TableCell>
                                        <TableCell className="tableCellLeft"><p className="orderInfoParagraph">+91 8163475881</p></TableCell>
                                        <TableCell className="tableCellLeft"><p className="orderInfoParagraph">41,14th main,15th cross, sector 4,Opp BDA <br /> complex,near kumarakom resturant HSR layout<br /> Banglore 560034</p></TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <Button variant="contained" className="button1" color="primary" style={{ marginBottom: "3%" }} onClick={()=>{this.redirectToDashboard()}} >
                        Continue Shopping
                </Button>
                </div>
            </div>
        );
    }
}
export default OrderPlaced;