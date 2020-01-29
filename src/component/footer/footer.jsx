import React, { Component } from 'react';
import './footer.css'

class footer extends Component {
    render() {
        return (
            <div className="border2" style={{ height: '60px', textAlign: "center", display: 'flex', flexDirection: 'column', justifyContent: "center" }}>
                Copyright @ 2020, Bookstore Private Limited. All Rights Reserved
            </div>
        )
    }
}
export default (footer);