import React, { useContext } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { TaskListContext } from "./context/TaskListContext";

const Task = (props) => {

    const {id, task} = props.task;
    const { deleteTask, EditTask, findTaskItem } = useContext(TaskListContext);
    
    const deleteTaskItem = (id) => {
        deleteTask(id);
    }

    const editTaskItem = (id) => {
        const CurrentlyEditingTask = props.task;
        findTaskItem(CurrentlyEditingTask.id);
    }

    return (
        <li className="list-item" key={id}>
            <div>
                <span>{task}</span>
            </div>
            <div>
                <button className="btn-delete" onClick={() => deleteTaskItem(id)}>
                    <FaTrash />
                </button>
            </div>
            <div>
                <button className="btn-delete" onClick={() => editTaskItem(id)}>
                    <FaPencilAlt />
                </button>
            </div>
        </li>
    );

}

export default Task;