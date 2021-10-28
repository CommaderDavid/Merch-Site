import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
    return (
        <React.Fragment>
            <h3>{props.name} - {props.quantity}</h3>
            <p>{props.description}</p>
            <hr />
        </React.Fragment>
    );
}

Merch.propTypes = {
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    description: PropTypes.string
};

export default Merch;