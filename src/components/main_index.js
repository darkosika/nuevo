import React,{Component} from 'react';
import {fetchLibraries} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SearchResults from 'react-filter-search';
import Pagination from "react-js-pagination";
class Mainindex extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data:  [],
          value: '',
          filter:'',
          activePage:1,
          perpage: 3
        };
      }
      
      setLibrary(event) {
        console.log(event.target.value);
        this.setState({filter:event.target.value})
      }
      handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
      handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
      };
    componentDidMount(){
        this.props.fetchLibraries();
        fetch('http://5b9e41b1133f660014c91950.mockapi.io/library')
        .then(response => response.json())
        .then(json => this.setState({ data: json }));
    }
    render(){
      const { data, value,activePage,perpage } = this.state;
      const indexOfLastData = activePage * perpage;
      const indexOfFirstData = indexOfLastData - perpage;
        return(
            <div>
                <h3>Books</h3>
                <div> 
          <input type="text" value={value} onChange={this.handleChange} />
        <div onChange={this.setLibrary.bind(this)}>
          <input type="radio" value="BOOK" name="library"/> BOOK
          <input type="radio" value="AUTHOR" name="library"/> AUTHOR
          <input type="radio" value="PUBLISH" name="library"/> PUBLISH
        </div>
        <SearchResults
          value={value}
          data={data}
          renderResults={results => (
            <div>
               
              {results.slice(indexOfFirstData, indexOfLastData).map(el => (
                    <ul className="list-group" key={el.id}>
                    <li className="list-group-item" key={el.id}>
               <Link to={`/detail/${el.id}`}>
               {this.state.filter==="PUBLISH" ? el.publisher: this.state.filter==="AUTHOR" ? el.author:el.title}
               </Link>
               </li>
                  </ul>
              ))}
            </div>
          )}
        />
         <div>
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={2}
              totalItemsCount={50}
              pageRangeDisplayed={10}
              onChange={this.handlePageChange.bind(this)}
            />
          </div>
      </div>
      <div className="text-xs-right">
                <Link className="btn btn-primary" to="/create">ADD BOOK</Link>
                </div>
            </div>
        );
    }
}
export default connect(null,{fetchLibraries})(Mainindex);