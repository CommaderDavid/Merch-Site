import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
    return (
        <React.Fragment>
            <div onClick={() => props.whenMerchClicked(props.id)}>
                <h3>{props.name} - {props.quantity}</h3>
                <p>{props.description}</p>
                <hr />
            </div>
        </React.Fragment>
    );
}

Merch.propTypes = {
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    description: PropTypes.string,
    id: PropTypes.string,
    whenMerchClicked: PropTypes.func
};

export default Merch;