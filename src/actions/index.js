import streams from '../apis/streams';
export const trySignIn = (userId)=>{
    return{
        type : "SIGN_IN",
        payload : userId
    }
}
export const trySignOut = ()=>{
    return{
        type : "SIGN_OUT"
    }
}

export const createStream = formValues=> async (dispatch, getState)=>{
    const {userId} = getState().auth
    const response = await streams.post("/Streams", {...formValues, userId});
    dispatch({
        type:"CREATE_STREAM",
        payload : response.data
    })
}

export const fetchStreams = ()=> async dispatch=>{
    const response = await streams.get('/Streams');
    dispatch({
        type:"FETCH_STREAMS",
        payload: response.data
    })
}

export const fetchStream = id =>async dispatch=>{
    const response = await streams.get(`/Streams/${id}`);
    dispatch({
        type:"FETCH_STREAM",
        payload : response.data
    })
}
export const editStream = (id, formValues) => async dispatch=>{
    const response = await streams.put(`/Streams/${id}`, formValues);
    dispatch({
        type:"EDIT_STREAM",
        payload : response.data
    })
}
export const deleteStream = id =>async dispatch=>{
    await streams.delete(`/Streams/${id}`);
    dispatch({
        type:"DELETE_STREAM",
        payload:id
    })
}