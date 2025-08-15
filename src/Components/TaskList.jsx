import TaskItem from "./TaskItem";
import { motion, AnimatePresence } from "framer-motion";

function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet. Add one above!</p>
      ) : (
        <AnimatePresence>
          {tasks.map(task => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              <TaskItem
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
                onEdit={onEdit}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </div>
  );
}

export default TaskList;
