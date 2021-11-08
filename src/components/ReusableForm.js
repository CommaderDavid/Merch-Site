import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
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
                <button type='submit'>{props.buttonText}</button>
            </form>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;