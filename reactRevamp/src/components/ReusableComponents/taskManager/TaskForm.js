import React from "react";

const TaskForm = () => {
    return (
        <div className="task-form">
            <input 
            type="text"
            className="task-input"
            placeholder="Add Task ..."
            required
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    Add Task
                </button>
                <button type="submit" className="btn clear-task-btn">
                    Clear Task
                </button>
            </div>
        </div>
    );
};

export default TaskForm;