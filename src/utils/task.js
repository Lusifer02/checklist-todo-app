const TASK_KEY = "todo_tasks";

export const getTasks = () => {
  const tasks = JSON.parse(localStorage.getItem(TASK_KEY)) || [];
  return tasks;
};

export const saveTasks = (tasks) => {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
};

export const addTask = (title) => {
  const tasks = getTasks();
  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };
  tasks.push(newTask);
  saveTasks(tasks);
  return tasks;
};

export const deleteTask = (id) => {
  const tasks = getTasks().filter(task => task.id !== id);
  saveTasks(tasks);
  return tasks;
};

export const toggleTask = (id) => {
  const tasks = getTasks().map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks(tasks);
  return tasks;
};

export const editTask = (id, newTitle) => {
  const tasks = getTasks().map(task =>
    task.id === id ? { ...task, title: newTitle } : task
  );
  saveTasks(tasks);
  return tasks;
};
