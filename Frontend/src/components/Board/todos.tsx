import { useState } from "react";
import type { Task } from "../TodoBoard";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


interface TodoColumnProps {
  title: string;
  color: string;
  tasks: Task[];
  onAddTask: (text: string) => void;
  onRemoveTask: (taskId: string) => void;
 
  
}

const TodoColumn = ({
  title,
  color,
  tasks,
  onAddTask,
  onRemoveTask,
  
}: TodoColumnProps) => {
  const [showInput, setShowInput] = useState(false);
  const [taskText, setTaskText] = useState("");
  const navigate = useNavigate()
 
  const { isAuthenticated } = useAuth();

  const handleAdd = () => {
    if (!isAuthenticated) {
      navigate("/login")
      
   
      return;
    }

    if (taskText.trim()) {
      onAddTask(taskText);
      setTaskText("");
      setShowInput(false);
    }
  };

 

  // Tailwind doesn't support dynamic color classes like `bg-${color}`
  // Instead, consider mapping colors manually:
  const backgroundClass = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    gray: "bg-gray-500",
  }[color] || "bg-gray-500"; // default to gray if not matched

  return (
    <div className={`border p-2 w-60 rounded-md ${backgroundClass} text-white`}>
      <h1 className="mb-2 font-medium">{title}</h1>

      <div className="space-y-2 mb-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white bg-opacity-20 p-2 flex justify-between"
          >
            <span className="text-black">{task.text}</span>
            <button
              onClick={() => onRemoveTask(task.id)}
              className="text-xs bg-red-500 p-2 rounded hover:bg-red-200 cursor-pointer"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* {showLogin && <Login onSuccess={handleLoginSuccess}/>} */}

      {showInput ? (
        <div>
          <input
            className="border p-2 bg-gray-700 rounded-lg w-full text-white"
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <div className="flex mt-2 gap-2">
            <button
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 cursor-pointer"
              onClick={handleAdd}
            >
              Add
            </button>
            <button
              className="text-gray-300 hover:underline"
              onClick={() => setShowInput(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        
          <button
            className="w-full bg-green-600 border p-2 rounded-md text-sm text-white cursor-pointer hover:bg-opacity-80 transition"
            onClick={() => setShowInput(true)}
          >
            + Add a card
          </button>
        
      )}
    </div>
  );
};

export default TodoColumn;
