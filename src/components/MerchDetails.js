import React from "react";
import PropTypes from "prop-types";

function MerchDetails(props) {
    const { merch, onClickingDelete } = props;

    return (
        <React.Fragment>
            <h1>Merch Detail</h1>
            <h3>{merch.name} - {merch.quantity}</h3>
            <p><em>{merch.description}</em></p>
            <button onClick={() => onClickingDelete(merch.id)}>Close Merch</button>
            <hr />
        </React.Fragment>
    );
}

MerchDetails.propTypes = {
    merch: PropTypes.object,
    onClickingDelete: PropTypes.func
};

export default MerchDetails;