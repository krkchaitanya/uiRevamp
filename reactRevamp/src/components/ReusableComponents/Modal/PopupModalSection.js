import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class PopupModalSection extends Component {
    constructor(props) {
        super();
        this.state= {
            popupModalHeader: props.popupModalHeader,
            popupModalBody: props.popupModalBody
        }
    }
    
    render() {
        return (
            <div className='popupModal'>
                <header>{this.state.popupModalHeader}</header>
                <section>
                    <p>{this.state.popupModalBody}</p>
                </section>
            </div>
        )
    }
}

PopupModalSection.propTypes = {
    popupModalHeader: PropTypes.string,
    popupModalBody: PropTypes.string.isRequired,
}

PopupModalSection.defaultProps = {
    popupModalHeader: 'Modal Header One!',
}

export default PopupModalSection;