import React, { Component } from 'react';
import PersonInfo from './ReusableComponents/PersonInfo/PersonInfo'; 
import GroupTogglersSection from './ReusableComponents/Toggler/GroupTogglersSection';
import Navbar from './ReusableComponents/Navbar/navbar';
import UserDOBSection from './ReusableComponents/DOBValidator/UserDOBSection';
import Modal from './ReusableComponents/Modal/Modal';
import Header from './ReusableComponents/ReactRouterFeature/Header'; 
import Dropdown from './ReusableComponents/Dropdown/Dropdown';
import "./style.css";

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
            ],
            dropdownItemsList: ["userone", "usertwo", "userthree", "userfour"]
        }
    }   
    render() {
        return (
            <div>
                <h2 
                style={{
                    color: 'lightgray',
                    textAlign: 'center',
                    opacity: 0.9,    
                    }}>
                    React Components
                </h2>
                <br />
                <Header/>
                <br />
                {/* GroupTogglersSection component */}
                <GroupTogglersSection groupTogglesInputArr={this.state.togglerDataObj}/>
                <div className="padding-2rem"></div>
                <Navbar />
                <div className="padding-2rem"></div>
                <UserDOBSection />
                <div className="padding-2rem"></div>
                <Modal />
                <div className="padding-2rem"></div>
                <Dropdown dropdownlist = {this.state.dropdownItemsList} />
                <div className="padding-2rem"></div>
            </div>
        );
    }
};

export default App;
