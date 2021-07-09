import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Header = ()=>{

    return <>
    <div className="ui container menu">
        <Link to="/" className="item header" >Streamy</Link>
        <div className="right menu">
            <Link to="/" className="item header" >All Streams</Link>
            <div className="item header"><GoogleAuth/></div>
        </div>
    </div>
    </>

}
export default Header;