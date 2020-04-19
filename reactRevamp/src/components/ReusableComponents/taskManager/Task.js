import React from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const Task = (props) => {
    const {id, task} = props.task;
    return (
        <li className="list-item" key={id}>
            <div>
                <span>{task}</span>
            </div>
            <div>
                <button className="btn-delete">
                    <FaTrash />
                </button>
            </div>
            <div>
                <button className="btn-delete">
                    <FaPencilAlt />
                </button>
            </div>
        </li>
    );
}

export default Task;