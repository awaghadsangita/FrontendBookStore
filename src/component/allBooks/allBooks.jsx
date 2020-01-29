import React, { Component } from 'react';
import './allBooks.css';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card'
import JwPagination from 'jw-react-pagination';
import Pagination from '../pagination/Pagination';
class AllBooks extends Component {
   constructor(props) {
      super(props);
      this.array = [];
      this.addToBagCss = this.props.hiddenAddedButtonMap;
      var exampleItems = this.props.getAllBooksData;
      this.state = {
         item: null,
         addToBagCss: new Map(),
         exampleItems: exampleItems,
         pageOfItems: []
      }
      this.onChangePage = this.onChangePage.bind(this);

   };
   onChangePage(pageOfItems) {
      this.setState({ pageOfItems: pageOfItems });
   }
   addToCart = (item, i) => {
      this.state.addToBagCss.set(item.title, true);
      this.setState({ addToBagCss: this.state.addToBagCss })
      this.props.action(item);

   }
   render() {
      this.state.exampleItems = this.props.getAllBooksData;
      var books = this.state.pageOfItems.map((item, i) => {

         return (
            <div className="div" id={i + 1}>
               <Card className='card'>
                  <div className='info' id={i}>
                     <div className='imageSpace' >
                        <img className='bookImg' src={item.image} alt={"bookImg"} ></img>
                     </div>
                     <div className='bookName'>{item.title}</div>
                     <div className='authorName'>{item.author}</div>
                     <div className='bookName'>Rs.{item.price}</div>
                     <Card className="card bookInfo" >
                        <p id="bookTitleForDescription" gutterBottom> Book Detail</p>
                        <p id="description">{item.description}</p>
                     </Card>
                  </div>
                  <button className='beforeAddToBag' hidden={this.state.addToBagCss.get(item.title)} onClick={() => { this.addToCart(item, i) }} >ADD TO BAG</button>
                  <button className='afterAddToBag' hidden={!this.state.addToBagCss.get(item.title)} disabled >ADDED TO BAG</button>
               </Card>
            </div>
         )

      })
      return (
         <div>
            {books}
            <div><JwPagination items={this.state.exampleItems} onChangePage={this.onChangePage} /></div>
            {/* <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} /> */}
         </div>
      )
   }

}
export default withRouter(AllBooks);

