import { useState, useEffect } from "react";
import { logout } from "../utils/Auth";
import { useNavigate } from "react-router-dom";
import { getTasks, addTask, deleteTask, toggleTask, editTask } from "../utils/task";
import { motion } from "framer-motion";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";

function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleAddTask = (title) => setTasks(addTask(title));
  const handleDeleteTask = (id) => setTasks(deleteTask(id));
  const handleToggleTask = (id) => setTasks(toggleTask(id));
  const handleEditTask = (id, newTitle) => setTasks(editTask(id, newTitle));

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white flex flex-col">

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md  shadow-lg px-6 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-wide"
        >
          📝 CheckList
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="bg-gray-100 text-gray-700 hover:bg-red-500 hover:text-gray-100 px-4 py-2 rounded-lg font-semibold"
        >
          Logout
        </motion.button>
      </nav>

      {/* Dashboard Content */}
      <div className="flex-grow max-w-4xl mx-auto w-full px-4 py-8">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Manage Your Tasks
        </motion.h1>

        {/* Task Form */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <TaskForm onAdd={handleAddTask} />
        </motion.div>

        {/* Task List Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg"
        >
          <TaskList
            tasks={tasks}
            onDelete={handleDeleteTask}
            onToggle={handleToggleTask}
            onEdit={handleEditTask}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
