import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div class="header">
            <Link to={"/"}>
                <img class="header-logo" src="images/TLU_logo.png"/>
            </Link>
            <div class="header-buttons">
                <button>Login/Signup</button>
                <button>Cart</button>
            </div>
        </div>
    )
};

export default Header;