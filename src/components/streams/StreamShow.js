import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import flv from 'flv.js';
import { useRef } from 'react';

const StreamShow=({stream})=>{
    const vidRef = useRef();
    //console.log(vidRef.current)
    const {id} = useParams();
    //console.log(stream)
    return <>
    <div className="ui container">
    <video width="100%" controls ref={vidRef}/>
    {stream[id] ? <><h2 className="ui header">{stream[id].title}</h2><p>{stream[id].description}</p></> : <h3>Loading...</h3> }
    </div>
    </>
}

const mapStateToProps = state =>{
    return {stream : state.streams}
}

export default connect(mapStateToProps, {})(StreamShow);