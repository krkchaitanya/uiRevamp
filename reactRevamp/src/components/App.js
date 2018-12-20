import React, { Component } from 'react';
import PersonInfo from './FunctionalComponents/PersonInfo/PersonInfo'; 
import AccordionSection from './FunctionalComponents/Accordion/AccordionSection';

class App extends Component {
    render() {
        return (
            <div>
                <h2>App Component</h2>
                <h3>Hitting in the app component</h3>
                <p>lorem akjfh ahsfoia uehy oiuahasdilog oeuwa suohgo saroiautiuro jdhfgosi gosierto isreutpo</p>
                {/* person component */}
                <PersonInfo />
                <br />
                <AccordionSection />
            </div>
        );
    }
};

export default App;
