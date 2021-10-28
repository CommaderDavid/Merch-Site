import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";

function MerchList(props) {
    return (
        <React.Fragment>
            <hr />
            {props.merchList.map((merch, index) =>
                <Merch name={merch.name}
                    quantity={merch.quantity}
                    description={merch.description}
                    key={index} />
            )}
        </React.Fragment>
    );
}

MerchList.propTypes = {
    merchList: PropTypes.array
};

export default MerchList;