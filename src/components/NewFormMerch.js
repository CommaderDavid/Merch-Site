import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewMerchForm(props) {
    function handleNewMerchFormSubmission(event) {
        event.preventDefault();
        props.onNewMerchCreation({ name: event.target.name.value, quantity: event.target.quantity.value, description: event.target.description.value, id: v4() });
    }

    return (
        <React.Fragment>
            <form onSubmit={handleNewMerchFormSubmission}>
                <input
                    type='text'
                    name='name'
                    placeholder='Merch Name' />
                <input
                    type='number'
                    name='quantity'
                    placeholder='Quantity Number' />
                <textarea
                    name='description'
                    placeholder='Describe the merch.' />
                <button type='submit'>Add Merch</button>
            </form>
        </React.Fragment>
    );
}

NewMerchForm.propTypes = {
    onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;