import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditing = (task) => {
    setEditId(task.id);
    setEditText(task.title);
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      onEdit(id, editText);
      setEditId(null);
    }
  };

  return (
    <AnimatePresence>
      {tasks.length === 0 ? (
        <motion.p
          key="no-tasks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-lg text-gray-200"
        >
          No tasks yet. Add one above!
        </motion.p>
      ) : (
        tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            layout
            className={`flex items-center justify-between p-4 mb-4 rounded-lg shadow-md ${
              task.completed ? "bg-green-700/100" : "bg-white/10"
            }`}
          >
            {editId === task.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-grow mr-4 px-3 py-2 rounded-md text-black"
              />
            ) : (
              <span
                onClick={() => onToggle(task.id)}
                className={`flex-grow cursor-pointer ${
                  task.completed ? "line-through text-gray-300" : ""
                }`}
              >
                {task.title}
              </span>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2">
              {editId === task.id ? (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => saveEdit(task.id)}
                  className="bg-blue-500 px-3 py-1 rounded-lg text-white"
                >
                  Save
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => startEditing(task)}
                  className="bg-yellow-500 px-3 py-1 rounded-lg text-white"
                >
                  Edit
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => onDelete(task.id)}
                className="bg-red-500 px-3 py-1 rounded-lg text-white"
              >
                Delete
              </motion.button>
            </div>
          </motion.div>
        ))
      )}
    </AnimatePresence>
  );
}

export default TaskList;
