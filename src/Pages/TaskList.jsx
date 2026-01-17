import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTask, removeTask } from "../components/task/TaskSlice";
export default function TaskList(){
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()){
            return;
        }
        dispatch(
            addTask({
                id:Date.now(),
                text : text,
                completed : false
            })
        )
        setText("");
    }
    return (
        <>
            <div className=" bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
                
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    📝Task Manager
                </h1>

                <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
                    <input
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        placeholder="Enter task"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                    <button
                        type="submit"
                        className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                        Add
                    </button>
                </form>

                <div className="space-y-3">
                    {tasks.map(task => (
                        <div
                            key={task.id}
                            className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex items-center justify-between"> 
                            <div className="flex items-center gap-3">
                                 <input type="checkbox" checked={task.completed} onChange={() => dispatch(toggleTask(task.id))} className="w-4 h-4 accent-blue-600 cursor-pointer"/> 

                            <h2 className={`font-medium ${task.completed
                                    ? "line-through text-gray-400"
                                    : "text-gray-800"
                                }`}>
                                {task.text}
                            </h2>
                            </div>
                            <button className="text-red-500" onClick={() => dispatch(removeTask(task.id))}>Delete</button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
        </>
    )
}