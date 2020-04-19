import React from "react";
import { useContext, useState, useEffect } from "react";
import { TaskListContext } from "./context/TaskListContext";

const TaskForm = () => {

    const {addTask, editItem, EditTask} = useContext(TaskListContext);
    const [title, setTitle] = useState("");

    const handleFormSubmit = () => {
        event.preventDefault();
        if (null === editItem) {
            addTask(title);
            setTitle("");
        } else {
            EditTask({task: title, id:editItem.id});
            setTitle("");
        }
    };

    const handleFormChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
    };

    useEffect(() => {
        if (null !== editItem) {
            setTitle(editItem.task);
        }
    }, [editItem]);

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="task-form">
                <input 
                type="text"
                onChange={handleFormChange}
                value={title}
                className="task-input"
                placeholder="Add Task ..."
                required
                />
                <div className="buttons">
                    <button type="submit" className="btn add-task-btn">
                        { !!editItem ? 'Edit Task' : 'Add Task' }
                    </button>
                    <button className="btn clear-task-btn">
                        Clear Task
                    </button>
                </div>
            </div>
        </form>
    );
};

export default TaskForm;