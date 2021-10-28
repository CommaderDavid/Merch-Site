import React from 'react';
import MerchList from './MerchList';
import NewMerchForm from './NewFormMerch';

class MerchControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterMerchList: []
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage
        }));
    };

    handleAddingNewMerchToList = (newMerch) => {
        const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
        this.setState({
            masterMerchList: newMasterMerchList,
            formVisibleOnPage: false
        });
    }

    render() {

    }
}