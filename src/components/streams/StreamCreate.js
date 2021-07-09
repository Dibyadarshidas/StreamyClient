import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createStream} from '../../actions';
import { withRouter } from 'react-router-dom';

class StreamCreate extends React.Component{
    
    renderInput({input, label, meta}){
        return <>
        <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
        </div>
        </>
    }
    onSubmit = async (formVales)=>{
       await  this.props.createStream(formVales);
       this.props.history.push("/")
    }
            
    render(){
        
        return <>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui container form" >
            <Field name="title"  component={this.renderInput} label="Title" />
            <Field name="description" component={this.renderInput} label="Description" />
            <button className="ui button primary">Submit</button>
        </form>
        </>
    } 

}

//VALIDATE FORM
const validate = ({title, description})=>{
    const errors = {};

    if(!title){
        errors.title = "Enter a title"
    }
    if(!description){
        errors.description = "Enter a description"
    }
    return errors;
}


const formWrapped =  reduxForm({
    form : "streamCreate",
    validate
})(StreamCreate);

export default withRouter(connect(null, {createStream})(formWrapped));