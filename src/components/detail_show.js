import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchLibrary} from '../actions';

class DetailShow extends Component{
    componentDidMount(){
       const { id }= this.props.match.params; //params lar sayesinde url den id ye ulaşabiliyoruz!
        this.props.fetchLibrary(id);
    }
   
    render(){
        const {book}=this.props;
        if(!book){
        return <div>Loading...!</div>
                }
        return(
            <div>
                <Link to="/" className="btn btn-primary">Go Back To HomePage</Link>
                <h3>{book.title}</h3>
                <h6>Author:{book.author}</h6>
                <p>{book.content}</p>
            </div>
        );
    }
}
function mapStateToProps({library},ownProps){ //ownProps set of states of target component
return{book: library[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchLibrary})(DetailShow);