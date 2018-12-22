import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

class Navbar extends Component {

    constructor(props) {
        super();
        this.state = {
            navbarData: props.navbarArrayData,
            tabBodyDataToBeDisplayed: props.navbarArrayData[0].tabBodyInfo
        }
    }

    tabOnclick(tabNm) {
        this.state.navbarData.filter((tabinfo) => {
           if(tabinfo.tabName === tabNm) {
                this.setState({
                    tabBodyDataToBeDisplayed: tabinfo.tabBodyInfo
                });
           } 
        });
    }

    render() {

        return (
            <Fragment>
                <nav className='navbar container'>
                    {
                        this.state.navbarData.map((ele, index) => {
                            return <div key={index} onClick={() => this.tabOnclick(ele.tabName) }><a>{ele.tabName}</a></div>;
                        })
                    }
                </nav>
                <section className="navBody">
                    <h3>{this.state.tabBodyDataToBeDisplayed}</h3>
                </section>
            </Fragment>
        );

    }
}

Navbar.propTypes = {
    navbarArrayData: PropTypes.arrayOf(
        PropTypes.shape({
            tabName: PropTypes.string,
            tabbodyinfo: PropTypes.string
        })
    ),
}
Navbar.defaultProps = {
    navbarArrayData: [
        {
            tabName: "Tabone",
            tabBodyInfo: "sdhf ausidhf iua jhsd vfiau asd sugd auyh fuds hiaeuwyfosd hersaoi geaori jvfdjkhgsgdfhigodsf sugd auyh fuds hiaeuwyfosd hersaoi geaori jvfdjkhgsgdfhigodsf"
        },
        {
            tabName: "Tabtwo",
            tabBodyInfo: "iuershgjv kfdh uisrhgf jdkfk s ujhgvdfkjghshfd giueurisews vfbvbsfd uighershg xnfckshdfuk hirueg hfdh gjkdfh urwie uhgujsdfguhg jiusd hui weyrug hiuersh euwyfosd hersaoi geaori jvfdjkhgsgdfhigodsf"
        },
        {
            tabName: "TabThree",
            tabBodyInfo: "godsf sugd auyh fuds hiaeuwyfosd hersaoi geaori jvfdjkhgsgdfhigodsf"
        }
    ]
}

export default Navbar;