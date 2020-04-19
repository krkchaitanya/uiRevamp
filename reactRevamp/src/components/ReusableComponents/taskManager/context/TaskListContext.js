import React, { createContext, useState } from "react";
import { v4 as uuid4 } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {

    const [tasks, setTasks] = useState([
        {task: "Read the book", id:1},
        {task: "Wash the Car", id:2},
        {task: "Write some code", id:3}
    ]);

    const [editItem, setEditItem] = useState(null);

    const addTask = (task) => {
        console.log("newly adding task:: ", task);
        setTasks([...tasks, {task: task, id: uuid4()}]);
    };

    const deleteTask = (taskid) => {
        const filteredTasks = tasks.filter(task => task.id !== taskid);
        setTasks(filteredTasks);
    }

    const EditTask = (taskItem) => {
        console.log("task item--", taskItem);
        const {task, id} = taskItem;
        const updatedTasks = tasks.map((task) => (id === task.id) ? taskItem : task);
        setTasks(updatedTasks);
        setEditItem(null);
    }

    const findTaskItem = (id) => {
        const filteredTask = tasks.filter(task => task.id === id)[0];
        console.log("--filteredTask--", filteredTask);
        setEditItem(filteredTask);
    };
    

    return (
        <TaskListContext.Provider value=
        {{
            tasks, 
            addTask,
            deleteTask,
            EditTask,
            editItem,
            findTaskItem
        }}>
        
            {props.children}
        
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider; 