import React from 'react';
import MerchList from './MerchList';
import NewMerchForm from './NewFormMerch';
import MerchDetails from './MerchDetails';

class MerchControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterMerchList: [],
            selectedMerch: null
        };
    }

    handleClick = () => {
        if (this.state.selectedMerch != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedMerch: null
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage
            }));
        }
    };

    handleAddingNewMerchToList = (newMerch) => {
        const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
        this.setState({
            masterMerchList: newMasterMerchList,
            formVisibleOnPage: false
        });
    }

    handleChangingSelectedMerch = (id) => {
        const selectedMerch = this.state.masterMerchList.filter(merch => merch.id === id)[0];
        this.setState({ selectedMerch: selectedMerch });
    }

    handleDeletingMerch = (id) => {
        const newMasterMerchList = this.state.masterMerchList.filter(merch => merch.id !== id);
        this.setState({
            masterMerchList: newMasterMerchList,
            selectedMerch: null
        });
    }

    render() {
        let currentlyVisableState = null;
        let buttonText = null;

        if (this.state.selectedMerch != null) {
            currentlyVisableState = <MerchDetails merch={this.state.selectedMerch} onClickingDelete={this.handleDeletingMerch} />;
            buttonText = "Return to Merch List";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisableState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList} />;
            buttonText = "Return to Merch List";
        } else {
            currentlyVisableState = <MerchList merchList={this.state.masterMerchList} />;
            buttonText = "Add Merch";
        }
        return (
            <React.Fragment>
                {currentlyVisableState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}

export default TicketControl;