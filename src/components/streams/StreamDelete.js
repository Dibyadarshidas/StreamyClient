import Modal from "../Modal";
import {connect} from 'react-redux';
import {deleteStream} from '../../actions/index';
import { useParams } from "react-router-dom";
const StreamDelete = ({deleteStream})=>{
    const {id} = useParams();
    return <>
    <Modal id={id} func={deleteStream} />
    </>
}

export default connect(null, {deleteStream})(StreamDelete);