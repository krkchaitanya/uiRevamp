import React, { Component } from 'react';
import PropTypes from 'prop-types';


const PopupModalSection = ({showModal, children}) => {
    const showHideModal = showModal ? 'modal display-modal' : 'modal display-none'
    return (
        <div className={showHideModal}>
            <section className="modal-main">
                <header>Header section in modal section</header>
                <section>
                    <h3>sduhgukash iursha gfijikaw iuerhg fvnesigv dfkj eiurh giufdsvg fd</h3>
                    <h3>sfdeig oisju gjgvsnjfdn oiawe jfsdn feoisrujtoire jgnx esroei gjhiojag </h3>
                </section>
                <br />
                {children}
            </section>
        </div>
    );
}

export default PopupModalSection;