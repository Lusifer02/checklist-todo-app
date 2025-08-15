import { useState } from "react";
import { motion } from "framer-motion";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      {/* Input */}
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        placeholder="Enter a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-grow px-4 py-3 rounded-lg text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
      />

      {/* Add Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90"
      >
        Add Task
      </motion.button>
    </form>
  );
}

export default TaskForm;
