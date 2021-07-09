import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory} from 'react-router-dom';


const Modal = ({id, func}) =>{
    const history = useHistory();
   return ReactDOM.createPortal(
       <div onClick={(e)=>{
           history.push("/");
           }} className="ui modals dimmer large visible active">
        <div onClick={(e)=>e.stopPropagation()}className="ui modal visible mini active">
        <div  className="ui header">
            Are you sure?
        </div>
        <div  className="content">
            <button onClick={(e)=>{
                func(id)
                history.push("/")
                }
                } className="ui mini button primary">Yes</button>
            <button onClick={()=>{
                history.push("/")
            }} className="ui mini button red">No</button>
        </div>
        </div>
       </div>
    ,
document.getElementById("modal")
   )
}
export default Modal;