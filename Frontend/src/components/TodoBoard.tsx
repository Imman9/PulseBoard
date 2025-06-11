import { useState } from "react";
import TodoColumn from "./Board/todos";


export type Task = {
  id: string;
  text: string;
};
export type Column = {
  id: string;
  title: string;
  tasks: Task[];
  color: string;
};
type TodoBoardProps = {
  initialColumns?: Column[];
};

const TodoBoard = ({ initialColumns }: TodoBoardProps) => {


  const [columns, setColumns] = useState<Column[]>(
    initialColumns || [
      { id: "1", title: "Today", color: "red-500", tasks: [] },
      { id: "2", title: "This week", color: "green-700", tasks: [] },
      { id: "3", title: "This Month", color: "yellow-500", tasks: [] },
    ]
  );

  const handleAddTask = (columnId: string, text: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              tasks: [...column.tasks, { id: Date.now().toString(), text }],
            }
          : column
      )
    );
  };

  const handleRemoveTask = (columnId: string, taskId: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              tasks: column.tasks.filter((task) => task.id !== taskId),
            }
          : column
      )
    );
  };
 

  return (
    <div>
      <div className=" flex flex-wrap gap-4 p-4">
        {columns.map((column) => (
          <TodoColumn
            key={column.id}
            title={column.title}
            tasks={column.tasks}
            color={column.color}
            onAddTask={(text) => handleAddTask(column.id, text)}
            onRemoveTask={(taskId) => handleRemoveTask(column.id, taskId)}
            // onRequestLogin={() => setShowLogin(true)}
          />
        ))}
      </div>
      
    </div>
  );
};

export default TodoBoard;
