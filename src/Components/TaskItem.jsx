import { useState } from "react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleSave = () => {
    if (newTitle.trim()) {
      onEdit(task.id, newTitle);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between border p-2 mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border p-1"
          />
        ) : (
          <span className={task.completed ? "line-through" : ""}>{task.title}</span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleSave} className="text-green-500">
            <FaSave />
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-500">
            <FaEdit />
          </button>
        )}
        <button onClick={() => onDelete(task.id)} className="text-red-500">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
