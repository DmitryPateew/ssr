import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {API_AUTH_ROUTS} from "../../service/constant";

const {LOGOUT, LOGIN} = API_AUTH_ROUTS;

const Header = ({auth}) => {
    const authButton = auth ?
            <a href={LOGOUT}>Logout</a> :
            <a href={LOGIN}>Login</a>;

    return (
        <nav>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>React SSR</Link>
                <ul className='right'>
                    <li><Link to='/users'>users</Link></li>
                    <li><Link to='/admins'>admins</Link></li>
                    <li>{authButton}</li>
                </ul>
            </div>
        </nav>
    )
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);