import React from "react";
import TaskList from "./TaskList";
import TaskListContextProvider from "./context/TaskListContext";

// import css
import "./css/taskManagerStyle.css";

const TaskManagerWrapper = () => {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <div className="main">
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider> 
    );
};

export default TaskManagerWrapper;