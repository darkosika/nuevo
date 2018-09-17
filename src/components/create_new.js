import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createBook} from '../actions';
//field.meta.touched
class CreateNew extends Component{
    renderField(field){
        const {meta:{touched,error} }=field;
        const className=`form-group ${touched && error ? 'has-danger': ''}`
        return(
            <div className={className}>
            <label>{field.label}</label>
                <input className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                {touched ? error: ''} 
                </div>
            </div>
        );
    }
    onSubmit(values){
        this.props.createBook(values, ()=> {
            this.props.history.push('/');
        });
    }

    render(){
        const {handleSubmit}=this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                label="Title"
                name="title"
                component={this.renderField}
                />
                  <Field
                label="Author"
                name="author"
                component={this.renderField}
                /> 
                  <Field
                label="Content"
                name="content"
                component={this.renderField}
                />
                  <Field
                label="Publisher"
                name="publisher"
                component={this.renderField}
                />
                <button type="Submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}
function validate(values){
    const errors={};
    if(!values.title){
        errors.title="Enter Title!"
    }
    if(!values.author){
        errors.author="Enter Author!"
    }
    if(!values.content){
        errors.content="Enter Content!"
    }
    if(!values.publisher){
        errors.publisher="Enter Publisher!"
    }
    return errors;
}
export default reduxForm({
    validate,
    form:'LibraryNewForm'
}) (
    connect(null,{createBook}) (CreateNew)
    );