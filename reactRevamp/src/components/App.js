import React, { Component } from 'react';
import PersonInfo from './ReusableComponents/PersonInfo/PersonInfo'; 
import GroupTogglersSection from './ReusableComponents/Toggler/GroupTogglersSection';
import Navbar from './ReusableComponents/Navbar/navbar';
import UserDOBSection from './ReusableComponents/DOBValidator/UserDOBSection';

class App extends Component {
    constructor() {
        super();
        this.state={
            togglerDataObj: [
                {
                    header: 'Great App Header',
                    bodyInfo: 'ljdhsfakhjafs  eadujfk awoeidszkhfaod f aouds uoh iuadshka su usodfghoisdfg oeris guois'
                },
                {
                    header: 'Second Header in hell',
                    bodyInfo: 'ljdhsfakhjafs  eadujfk awoeidszkhfaod f aouds uoh iuadshka su usodfghoisdfg oeris guois'
                },
                {
                    header: 'Third App header',
                    bodyInfo: 'ljdhsfakhjafs  eadujfk awoeidszkhfaod f aouds uoh iuadshka su usodfghoisdfg oeris guois'
                },
                {
                    header: 'Fourth AppHeader',
                    bodyInfo: 'ljdhsfakhjafs  eadujfk awoeidszkhfaod f aouds uoh iuadshka su usodfghoisdfg oeris guois'
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
                {/* GroupTogglersSection component */}
                <GroupTogglersSection groupTogglesInputArr={this.state.togglerDataObj}/>
                <br />
                <br />
                <br />
                <Navbar />
                <br />
                <br />
                <UserDOBSection />
            </div>
        );
    }
};

export default App;
