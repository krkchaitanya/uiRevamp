import React, { Component } from 'react';
import PropTypes from 'prop-types';


const PopupModalSection = ({showModal, children, closeModal}) => {
    const showHideModal = showModal ? 'modal display-modal' : 'modal display-none'
    return (
        <div className={showHideModal}>
            <section className="modal-main">
                <header className="popupModalHeader">Header section in modal popup</header>
                <section>
                    <h3>sduhgukash iursha gfijikaw iuerhg fvnesigv dfkj eiurh giufdsvg fd</h3>
                    <h3>sfdeig oisju gjgvsnjfdn oiawe jfsdn feoisrujtoire jgnx esroei gjhiojag </h3>
                </section>
                <br />
                {children}
                <br />
                <button onClick={closeModal} className="modalBtn">Close</button>
            </section>
        </div>
    );
}

export default PopupModalSection;