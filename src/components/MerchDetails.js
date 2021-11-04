import React from "react";
import PropTypes from "prop-types";

function MerchDetails(props) {
    const { merch } = props;

    return (
        <React.Fragment>
            <h1>Merch Detail</h1>
            <h3>{merch.name} - {merch.quantity}</h3>
            <p><em>{merch.description}</em></p>
            <hr />
        </React.Fragment>
    );
}

MerchDetails.propTypes = {
    merch: PropTypes.object
};

export default MerchDetails;