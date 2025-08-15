import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        placeholder="Add a new task..."
        className="border p-2 flex-grow mr-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}

export default TaskForm;
