import { useParams, useHistory } from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {editStream, fetchStream} from '../../actions';
import { useEffect, useState } from "react";
const StreamEdit = ({streams, fetchStream, editStream})=>{
    const history = useHistory();
    const {id} = useParams();
    const [streamData, setStreamData] = useState({})

    useEffect(()=>{
        fetchStream(id)
        if(streams){
            setStreamData({...streams[id]})
        }
    },[])
     
    const handleChange=(e)=>{
        setStreamData({...streamData, [e.target.name]:e.target.value})
    }

    const handleClick= async (e)=>{
        try{
            await editStream(id, streamData);
        history.push("/");
        }catch(err){
            console.log(err)
        }
        
    }
     
    return <>
    <div className="ui container">
    <div className="ui form">
        <div className="field">
        <label htmlFor="">Edit Stream Name</label>
        <input name = "title" onChange={handleChange} value={streamData.title} type="text" />
        </div>
        <div className="field">
        <label  htmlFor="">Edit Stream Description</label>
        <input name ="description" onChange={handleChange} value={streamData.description} type="text" />
        </div>
    </div>
    <button onClick={handleClick} style={{margin:"20px 0px"}} className="ui my-2 button primary">Edit</button>

    </div>
    </>
}
const mapStateToProps = state=>{
    return {streams : state.streams}
}
export default connect(mapStateToProps, {editStream, fetchStream})(StreamEdit);