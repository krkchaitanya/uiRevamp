import React, { Component } from 'react';
import PersonInfo from './FunctionalComponents/PersonInfo/PersonInfo'; 
import AccordionSection from './FunctionalComponents/Accordion/AccordionSection';

class App extends Component {
    constructor() {
        super();
        this.state={
            accordionArrData: [
                {
                    header: 'AppHeader',
                    bodyInfo: 'ljdhsfakhjafs  eadujfk awoeidszkhfaod f aouds uoh iuadshka su usodfghoisdfg oeris guois'
                },
                {
                    header: 'AppHeader',
                    bodyInfo: 'sdjghf pewiaujas ewap ufpsodiou uh espui oai sirf ujpae poersigporseg rpeisujgrp'
                }, 
                {
                    header: 'AppHeader',
                    bodyInfo: 'sediurg aweo oawuei idas sadhfsai s dfjhads fhfdsjk sahrfg fdkjhgasidfg uhjsdf siofd'
                }
            ]
        }
    }   
    render() {
        return (
            <div>
                <h2>App Component</h2>
                <h3>Hitting in the app component</h3>
                <p>lorem akjfh ahsfoia uehy oiuahasdilog oeuwa suohgo saroiautiuro jdhfgosi gosierto isreutpo</p>
                {/* person component */}
                <PersonInfo />
                <br />
                <AccordionSection accordionArrData= {this.state.accordionArrData}/>
            </div>
        );
    }
};

export default App;
