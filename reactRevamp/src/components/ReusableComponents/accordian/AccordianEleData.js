import React from "react";

const AccordianEleData = (props) => {

    return(
        <div className="accd__data">
            <ul>
                <li><p><small>ID:</small> {props.userObj.id}</p></li>
                <li><p><small>NAME:</small>{props.userObj.name}</p></li>
                <li><p><small>USERNAME: </small>{props.userObj.username}</p></li>
                <li><p><small>ADDRESS: </small>{props.userObj.address}</p></li>
                <li><p><small>PHONE: </small>{props.userObj.phone}</p></li>
                <li><p><small>WEBSITE: </small>{props.userObj.website}</p></li>
            </ul>
        </div>
    );
}

export default AccordianEleData;