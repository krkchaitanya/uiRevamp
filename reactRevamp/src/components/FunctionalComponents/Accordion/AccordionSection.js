import React, { Component } from 'react';

class AccordionSection extends Component {
    constructor(props) {
        super();
        this.state = {
            accordionInfo: [
                {
                    header: 'Heder1',
                    bodyInfo: 'ljdhsfakhjafs  eadujfk awoeidszkhfaod f aouds uoh iuadshka su usodfghoisdfg oeris guois'
                },
                {
                    header: 'Header2',
                    bodyInfo: 'sdjghf pewiaujas ewap ufpsodiou uh espui oai sirf ujpae poersigporseg rpeisujgrp'
                }, 
                {
                    header: 'Header3',
                    bodyInfo: 'sediurg aweo oawuei idas sadhfsai s dfjhads fhfdsjk sahrfg fdkjhgasidfg uhjsdf siofd'
                }
            ]
        }
    }
    
    render() {

        return(
            <div>
                <h2>Accordion component...</h2>
                {
                    this.state.accordionInfo.map((accordObj, index) => {
                        return (
                            <React.Fragment key={index}>
                                <h2 className='accordHeader'>{accordObj.header}</h2>
                                <p className='accordBodyInfo'>{accordObj.bodyInfo}</p>
                            </React.Fragment>
                        );
                     })
                }
            </div>
        );
    }
}

export default AccordionSection;