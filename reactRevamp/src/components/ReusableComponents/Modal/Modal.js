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
    })
}

    render() {
        return (
            <div className="modalSection">
                <br />
                <button onClick={this.showModalSection.bind(this)}>ShowModal</button>
                {
                    this.state.showPopupModal &&
                    <PopupModalSection
                    popupModalHeader={'Modal Header'}
                    popupModalBody={"soerh uryuey ioerwu ier ieuiorue georguioreu gfdklfjsdjgieru  iorusekjr e wireu jrgklksfjg iosfd"}
                    />
                }
            </div>
        );
    }
}


export default Modal;