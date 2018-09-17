import React,{Component} from 'react';
import {fetchLibraries} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SearchResults from 'react-filter-search';
class MainIndex extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data:  [],
          value: '',
          filter:''
        };
      }
      setLibrary(event) {
        console.log(event.target.value);
        this.setState({filter:event.target.value})
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
        const { data, value } = this.state;
        return(
            <div>
                <div className="text-xs-right">
                <Link className="btn btn-primary" to="/create">ADD BOOK</Link>
                </div>
                <div onChange={this.setLibrary.bind(this)}>
        <input type="radio" value="BOOK" name="library"/> BOOK
        <input type="radio" value="AUTHOR" name="library"/> AUTHOR
        <input type="radio" value="PUBLISH" name="library"/> PUBLISH
      </div>
                <h3>Books</h3>
                <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <SearchResults
          value={value}
          data={data}
          renderResults={results => (
            <div>
              {results.map(el => (
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
      </div>
            </div>
        );
    }
}
export default connect(null,{fetchLibraries})(MainIndex);