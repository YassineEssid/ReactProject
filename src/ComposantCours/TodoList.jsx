import "react";
import { useState } from "react";
import PropTypes from "prop-types";

const TodoList = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Moyenne");
  const [search, setSearch] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      setTasks([...tasks, { name: taskName, priority, completed: false }]);
      setTaskName("");
    }
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task))
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Todo List avec Priorités</h2>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Haute</option>
          <option>Moyenne</option>
          <option>Basse</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>
      <input
        type="text"
        placeholder="Rechercher..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.name} ({task.priority}){" "}
            <button onClick={() => toggleTask(index)}>Terminer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  initialTasks: PropTypes.array,
};

export default TodoList;
