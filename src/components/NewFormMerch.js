import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewMerchForm(props) {
    function handleNewMerchFormSubmission(event) {
        event.preventDefault();
        props.onNewMerchCreation({ name: event.target.name.value, quantity: event.target.quantity.value, description: event.target.description.value, id: v4() });
    }

    return (
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleNewMerchFormSubmission}
                buttonText="Add Merch" />
        </React.Fragment>
    );
}

NewMerchForm.propTypes = {
    onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;