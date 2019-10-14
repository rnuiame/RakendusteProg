import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <Link to={"/"}>
                <img className="header-logo" src="/images/TLU_logo.png"/>
            </Link>
            <div className="header-buttons">
                <button>Login/Signup</button>
                <button>Cart</button>
            </div>
        </div>
    );
};

export default Header;