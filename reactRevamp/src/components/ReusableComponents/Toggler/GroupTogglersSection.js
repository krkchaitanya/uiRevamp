import React, { Component } from 'react';
import Toggler from './Toggler';
import PropTypes from 'prop-types';

class GroupTogglersSection extends Component {
    constructor(props) {
        super();
        this.state = {
            groupToggleData: props.groupTogglesInputArr,
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2 className='componentHeading'>Group toggler Section</h2>
                {
                    this.state.groupToggleData.map((togglerDataObj, index) => {
                        return <Toggler key={index} togglerDataObj = {togglerDataObj} />
                    })
                }
            </React.Fragment>
        );
    }
}

GroupTogglersSection.propTypes = {
    groupTogglesInputArr : PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string,
            bodyInfo: PropTypes.string
        })
    )
}

GroupTogglersSection.defaultProps = {
    groupTogglesInputArr: [
        {
            header: 'Sample Header One',
            bodyInfo: 'ljdhsfakhjafs  eadujfk awoeidszkhfaod f aouds uoh iuadshka su usodfghoisdfg oeris guois'
        },
        {
            header: 'Sample Header Two',
            bodyInfo: 'ksdfh sldjh odsif lsidgtores rei hgoreis gvdflk nldsfguoerisg ersijg reso reiogjuoris gioiujo'
        }
    ]
}

export default GroupTogglersSection;