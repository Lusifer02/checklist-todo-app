import { useState, useEffect } from "react";
import { logout } from "../utils/Auth";
import { useNavigate } from "react-router-dom";
import { getTasks, addTask, deleteTask, toggleTask, editTask } from "../utils/task";
import { motion } from "framer-motion";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
import Layout from "../Components/Layout";

function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleAddTask = (title) => {
    setTasks(addTask(title));
  };

  const handleDeleteTask = (id) => {
    setTasks(deleteTask(id));
  };

  const handleToggleTask = (id) => {
    setTasks(toggleTask(id));
  };

  const handleEditTask = (id, newTitle) => {
    setTasks(editTask(id, newTitle));
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Your To-Do List
        </motion.h1>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
      <TaskForm onAdd={handleAddTask} />
      <TaskList 
        tasks={tasks} 
        onDelete={handleDeleteTask} 
        onToggle={handleToggleTask} 
        onEdit={handleEditTask} 
      />
    </div>
  );
}

export default Dashboard;
