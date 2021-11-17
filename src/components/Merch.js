import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
    const totalQuantity = props.quantity > 0 ? props.quantity : "Out of Stock"
    return (
        <React.Fragment>
            <div onClick={() => props.whenMerchClicked(props.id)}>
                <h3>{props.name} - {totalQuantity}</h3>
                <p>{props.description}</p>
            </div>
            <button onClick={() => props.onClickingBuy(props.id)}>Buy</button>
            <br />
            <button onClick={() => props.onClickingRestock(props.id)}>Restock</button>
            <hr />
        </React.Fragment>
    );
}

Merch.propTypes = {
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    description: PropTypes.string,
    id: PropTypes.string,
    whenMerchClicked: PropTypes.func,
    onClickingBuy: PropTypes.func,
    onClickingRestock: PropTypes.func
};

export default Merch;