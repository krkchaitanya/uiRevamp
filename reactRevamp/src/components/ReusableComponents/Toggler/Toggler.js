import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Toggler extends Component {
    constructor(props) {
        super();
        this.state = {
            togglerDataObj: props.togglerDataObj,
            showToggleBody: false
        }
    };
    
    toggleHeaderOnClick() {
        const { showToggleBody } = this.state;
        this.setState({
            showToggleBody: !showToggleBody
        });
    };

    render() {

        return(
            <div>
                {/* <h2 className='componentHeading'>Toggler component...</h2> */}
                {
                    <React.Fragment>
                        <h2 className='toggleHeader'>
                            {this.state.togglerDataObj.header}
                            <button className="toggleButton" onClick={() => this.toggleHeaderOnClick()}><strong>|||</strong></button>
                        </h2>
                        {
                            this.state.showToggleBody ?
                            <p className='toggleBodyInfo'>{this.state.togglerDataObj.bodyInfo}</p> : null
                        }
                    </React.Fragment>
                }
            </div>
        );

    }
}

Toggler.propTypes = {
    togglerDataObj: PropTypes.shape({
        header: PropTypes.string,
        bodyInfo: PropTypes.string
    })
};

Toggler.defaultProps = {
    togglerDataObj :
        {
            header: 'Header',
            bodyInfo: 'ljdhsfakhjafs  eadujfk awoeidszkhfaod f aouds uoh iuadshka su usodfghoisdfg oeris guois'
        }
}

export default Toggler;