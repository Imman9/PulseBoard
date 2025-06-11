import { useState } from "react";
import { CiInboxIn } from "react-icons/ci";
import type { Task } from "./TodoBoard";

const Inbox = () => {
  const [showInput, setShowInput] = useState(false);
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
 

  const handleAdd = () =>{
   
    if (taskText.trim()==="") return

    const newTask:Task = {
      id: Date.now().toString(),
      text: taskText,
    }
    setTasks([...tasks,newTask])
    setTaskText("")
    setShowInput(false)
  }

  const onRemoveTask =(id:string)=>{
    setTasks(tasks.filter((task)=>task.id !== id))

  }

  return (
    <aside className=" w-64 bg-gray-300 shadow-md rounded-md p-4">
      <header className="flex items-center gap-2 mb-4 text-gray-700 font-medium  ">
        <CiInboxIn className="text-xl" />
        <p>Inbox</p>
      </header>
      <div>
       {
        tasks.map((task)=>(
          <div className="bg-white mb-2 bg-opacity-20 p-2  flex justify-between" key={task.id}>
             <span className="text-black ">{task.text}</span>
            <button
              onClick={() => onRemoveTask(task.id)}
              className="text-xs bg-red-500 p-2 rounded hover:bg-red-200 cursor-pointer"
            >
              ×
            </button>
          </div>
        ))
       }
        
      </div>
      <div>
        {showInput ? (
          <div>
            <input
              type="text"
              className=" bg-white p-2 rounded"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
            />
            <div  className="flex gap-2 mt-2">
              <button onClick={handleAdd} className="rounded-md cursor-pointer text-white p-2 bg-green-600 hover:bg-green-700">
                Add
              </button>
              <button
                onClick={() => setShowInput(false)}
                className=" cursor-pointer hover:underline"
              >
                cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowInput(true)}
            className="border w-full py-2 px-3 bg-black text-white rounded-md cursor-pointer hover:bg-gray-700 transition"
          >
            {" "}
            + Add a card
          </button>
        )}
      </div>
    </aside>
  );
};

export default Inbox;
