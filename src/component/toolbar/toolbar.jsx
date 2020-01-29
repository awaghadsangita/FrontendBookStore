import React,{ Component } from "react"
import './toolbar.css'
import { withRouter } from 'react-router-dom';

class ToolBar extends Component {
//   handleClick = () => {
//     this.props.history.push({this.props.history.goBack});
// }

  render() {
    return (
      
        <div className='dashboard1'>
          <div className='logo1'>
            <img src="https://img.icons8.com/ios/64/000000/open-book.png" alt="optional" onClick={this.props.history.goBack}/>
          </div>
          <div className='title1' onClick={this.props.history.goBack}>Bookstore</div>
        </div>
      
    )
  }
}
export default withRouter (ToolBar);
