import React from "react";
import TaskList from "./TaskList";
import TaskListContextProvider from "./context/TaskListContext";
import TaskForm from "./TaskForm";

// import css
import "./css/taskManagerStyle.css";

const TaskManagerWrapper = () => {
    return (
        <TaskListContextProvider>

            <div className="container">

            <div>
                <h2>Task Manager</h2>
            </div>
                
                <div className="app-wrapper">
                    <div className="main">
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>

            </div>

        </TaskListContextProvider> 
    );
};

export default TaskManagerWrapper;