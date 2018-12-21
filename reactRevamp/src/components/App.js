import React, { Component } from 'react';
import PersonInfo from './ReusableComponents/PersonInfo/PersonInfo'; 
import Toggler from './ReusableComponents/Toggler/Toggler';

class App extends Component {
    constructor() {
        super();
        this.state={
            togglerDataObj: 
                {
                    header: 'AppHeader',
                    bodyInfo: 'ljdhsfakhjafs  eadujfk awoeidszkhfaod f aouds uoh iuadshka su usodfghoisdfg oeris guois'
                }
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
                <Toggler togglerDataObj= {this.state.togglerDataObj}/>
            </div>
        );
    }
};

export default App;
