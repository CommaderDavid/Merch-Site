import React from "react";
import merchLogo from "./../img/MerchLogo.png";

function Header(props) {
    const HeaderStyle = {
        backgroundColor: '#7cbfbd',
        paddingTop: '50px',
        paddingBottom: '20px',
        textAlign: 'center'
    }
    return (
        <div style={HeaderStyle}>
            <img src={merchLogo} alt="A merch logo" />
        </div>
    );
}

export default Header;