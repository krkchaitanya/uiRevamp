import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
    constructor(props) {
        super();
        this.state = {
            accordionInfo: props.accordionArrData,
        }
    }
    
    render() {


        return(
            <div>
                <h2 className='componentHeading'>Accordion component...</h2>
                {
                    this.state.accordionInfo.map((accordObj, index) => {
                        return (
                            <React.Fragment key={index}>
                                <h2 className='accordHeader'>{`${accordObj.header}..${index+1}`}</h2>
                                <p className='accordBodyInfo'>{accordObj.bodyInfo}</p>
                            </React.Fragment>
                        );
                     })
                }
            </div>
        );


    }
}

AccordionSection.propTypes = {
    accordionArrData: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string,
        bodyInfo: PropTypes.string
    }))
};

AccordionSection.defaultProps = {
    accordionArrData :[
        {
            header: 'Header',
            bodyInfo: 'ljdhsfakhjafs  eadujfk awoeidszkhfaod f aouds uoh iuadshka su usodfghoisdfg oeris guois'
        },
        {
            header: 'Header',
            bodyInfo: 'sdjghf pewiaujas ewap ufpsodiou uh espui oai sirf ujpae poersigporseg rpeisujgrp'
        }, 
        {
            header: 'Header',
            bodyInfo: 'sediurg aweo oawuei idas sadhfsai s dfjhads fhfdsjk sahrfg fdkjhgasidfg uhjsdf siofd'
        }
    ]
}

export default AccordionSection;