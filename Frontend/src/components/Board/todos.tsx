import { useState } from "react";
import type { Task } from "../TodoBoard";

const TodoColumn = ({
  title,
  color,
  tasks,
  onAddTask,
  onRemoveTask
}: {
  title: string;
  color: string;
  tasks: Task[];
  onAddTask:  (text: string) => void;
  onRemoveTask: (taskId: string) => void;
}) => {
  const [showInput, setShowInput] = useState(false);
  const [taskText, setTaskText] = useState("");

  const handleAdd = () =>{
    if (taskText.trim()) {
            onAddTask(taskText);
            setTaskText("");
            setShowInput(false);
          }

  }
  return (
    <div className={`border p-2 w-60 rounded-md bg-${color} text-white`}>
      <h1 className="mb-2 font-medium">{title}</h1>
      <div className="space-y-2 mb-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white  bg-opacity-20 p-2  flex justify-between"
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
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 cursor-pointer"
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
        <div>
          <button
            className="w-full p-2 rounded-md text-sm text-white cursor-pointer hover:bg-opacity-80 transition"
            onClick={() => setShowInput(true)}
          >
            + Add a card
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoColumn;
