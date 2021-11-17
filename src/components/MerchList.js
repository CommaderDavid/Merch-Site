import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";

function MerchList(props) {
    return (
        <React.Fragment>
            <hr />
            {props.merchList.map((merch) =>
                <Merch
                    onClickingBuy={props.onClickingBuy}
                    onClickingRestock={props.onClickingRestock}
                    whenMerchClicked={props.onMerchSelection}
                    name={merch.name}
                    quantity={merch.quantity}
                    description={merch.description}
                    id={merch.id}
                    key={merch.id} />
            )}
        </React.Fragment>
    );
}

MerchList.propTypes = {
    merchList: PropTypes.array,
    onMerchSelection: PropTypes.func,
    onClickingBuy: PropTypes.func,
    onClickingRestock: PropTypes.func,
    quantity: PropTypes.number
};

export default MerchList;