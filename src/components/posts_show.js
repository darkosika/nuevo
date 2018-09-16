import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost,deletePost} from '../actions';

class PostsShow extends Component{
    componentDidMount(){
       const { id }= this.props.match.params; //params lar sayesinde url den id ye ulaşabiliyoruz!
        this.props.fetchPost(id);
    }
    onDeleteClick(){
        const { id }= this.props.match.params;
        this.props.deletePost(id,()=>{
            this.props.history.push('/'); //navigate programatically--calbackler ile kullan!
        });
    }
    render(){
        const {post}=this.props;
        if(!post){
        return <div>Loading...!</div>
                }
        return(
            <div>
                <Link to="/">Go Back To HomePage</Link>
                <button
                className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}
                >
                Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories:{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}
function mapStateToProps({posts},ownProps){ //ownProps set of states of target component
return{post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);