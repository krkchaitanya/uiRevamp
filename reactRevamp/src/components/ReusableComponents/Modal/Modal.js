import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import PopupModalSection from './PopupModalSection';

class Modal extends Component {
constructor(props) {
    super();
    this.state = {
        showPopupModal : false,
    }
}

showModalSection() {
    console.log('showmodal');
    this.setState({
        showPopupModal : true
    });
}
closeModal() {
    this.setState({
        showPopupModal : false
    })
}

    render() {
        return (
            <React.Fragment>
                <PopupModalSection showModal={this.state.showPopupModal} closeModal={() => this.closeModal()}>
                    <div>
                        <h3>Some randondom data to be sent to child</h3>
                        <p>******************</p>
                        <br />
                        <button onClick={() => this.closeModal()}>Close</button>
                    </div>
                </PopupModalSection>
                <br />
                <button onClick={() => this.showModalSection()}>OnClick</button>
            </React.Fragment>
        );
    }
}


export default Modal;