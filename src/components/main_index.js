import React,{Component} from 'react';
import {fetchLibraries} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';
class MainIndex extends Component{
    componentDidMount(){
        this.props.fetchLibraries();
    }
    renderPosts(){
    return  _.map(this.props.library, book =>{
        
           return(
             
               <li className="list-group-item" key={book.id}>
               <Link to={`/detail/${book.id}`}>
                    {book.title}
               </Link>
               </li>
           );
       });  
    }

    render(){
        return(
            <div>
                <div className="text-xs-right">
                <Link className="btn btn-primary" to="/create">ADD BOOK</Link>
                </div>
                <h3>Books</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {library:state.library};
}
export default connect(mapStateToProps,{fetchLibraries})(MainIndex);