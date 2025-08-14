'use client'

import { useState } from "react";

interface Task {
    id: number;
    text: string;
}

export default function TodoList({id, text}: Task) {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "") return;
        const task: Task = {id: Date.now(), text: newTask.trim()};
        setTasks((prev) => [...prev, task]);
        setNewTask("");
    }

    const removeTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id)); 
    }


    return(
        <div className="section-wrapper">
            <h1>To-Do List</h1>
            
            {/* Input and add button */}
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={newTask} 
                    className="px-4 border border-neutral-400"
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                    placeholder="Enter new task here"/>
                <button onClick={() => addTask()} className={`${newTask === "" ? "bg-neutral-500 hover:bg-neutral-500 cursor-not-allowed" : "bg-amber-500 cursor-pointer hover:bg-amber-300"} px-6 py-4 rounded-md`}>
                    +add
                </button>
            </div>

            {/* Task list */}
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li key={task.id} className="flex gap-2 items-center">
                        {task.text}
                        <button onClick={() => removeTask(task.id)} className="bg-neutral-500 text-white rounded-md p-2 cursor-pointer">- delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}