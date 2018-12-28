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
            <div className="modalRoot">
               <h3>Show and Hide Modal</h3>
                <PopupModalSection showModal={this.state.showPopupModal} closeModal={() => this.closeModal()}>
                    <div>
                        <h3>Modal component will come into play on click of button</h3>
                        <p>Its a popup section that should be displayed</p>
                        <p>ksajd uskhfdndj iszdf ioaw jzsdj fpoi fujszdij vmklf dxifuj gpofdi spfdozuozkc</p>
                    </div>
                </PopupModalSection>
                <br />
                <button onClick={() => this.showModalSection()} className="modalBtn">ShowModal</button>
            </div>
        );
    }
}


export default Modal;