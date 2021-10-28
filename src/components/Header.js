import React from "react";
import MerchLogo from "./../img/MerchLogo.png";

function Header() {
    return (
        <React.Fragment>
            <img scr={MerchLogo} alt="A merch logo" />
        </React.Fragment>
    );
}

export default Header;