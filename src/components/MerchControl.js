import React from 'react';
import MerchList from './MerchList';
import NewMerchForm from './NewFormMerch';
import MerchDetails from './MerchDetails';
import EditMerchForm from './EditMerchForm';

class MerchControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterMerchList: [],
            selectedMerch: null,
            editing: false
        };
    }

    handleClick = () => {
        if (this.state.selectedMerch != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedMerch: null,
                editing: false
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

    handleEditClick = () => {
        this.setState({ editing: true });
    }

    handleEditingMerchInList = (merchToEdit) => {
        const editedMasterMerchList = this.state.masterMerchList
            .filter(merch => merch.id !== this.state.selectedMerch.id)
            .concat(merchToEdit);
        this.setState({
            masterMerchList: editedMasterMerchList,
            editing: false,
            selectedMerch: null
        });
    }

    handleBuyMerch = (id) => {
        const merchObject = this.state.masterMerchList.filter(merch => merch.id === id)[0];
        const merchObjectIndex = this.state.masterMerchList.indexOf(merchObject);
        const newMerchObject = { ...merchObject, quantity: merchObject.quantity - 1 };
        const updatedMerchList = this.state.masterMerchList.splice(merchObjectIndex, 1, newMerchObject);
        console.log(merchObject, "merch object");
        console.log(newMerchObject, "new");
        console.log(merchObjectIndex, "merch index");
        console.log(updatedMerchList, "updated");
        this.setState({
            merchObject: updatedMerchList
        });
    }

    handleRestockMerch = () => {

    }

    render() {
        let currentlyVisableState = null;
        let buttonText = null;

        if (this.state.editing) {
            currentlyVisableState = <EditMerchForm merch={this.state.selectedMerch} onEditMerch={this.handleEditingMerchInList} />;
            buttonText = "Return to Merch List";
        } else if (this.state.selectedMerch != null) {
            currentlyVisableState = <MerchDetails merch={this.state.selectedMerch} onClickingDelete={this.handleDeletingMerch} onClickingEdit={this.handleEditClick} />;
            buttonText = "Return to Merch List";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisableState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList} />;
            buttonText = "Return to Merch List";
        } else {
            currentlyVisableState = <MerchList merchList={this.state.masterMerchList} onMerchSelection={this.handleChangingSelectedMerch} onClickingBuy={this.handleBuyMerch} />;
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

export default MerchControl;