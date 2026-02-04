import React, { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './services/api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { LayoutList } from 'lucide-react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async (task) => {
    try {
      const response = await createTask(task);
      setTasks([response.data, ...tasks]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleToggle = async (task) => {
    try {
      const updatedTask = { ...task, is_completed: !task.is_completed };
      // Optimistic update
      setTasks(tasks.map(t => t.id === task.id ? { ...t, is_completed: !t.is_completed } : t));

      await updateTask(task.id, updatedTask);
    } catch (error) {
      console.error('Error updating task:', error);
      // Revert on error
      fetchTasks();
    }
  };

  const handleDelete = async (id) => {
    try {
      // Optimistic update
      setTasks(tasks.filter(t => t.id !== id));
      await deleteTask(id);
    } catch (error) {
      console.error('Error deleting task:', error);
      fetchTasks();
    }
  };

  return (
    <div className="app-container">
      <header style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
        <div style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', padding: '0.8rem', borderRadius: '12px', display: 'flex', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.5)' }}>
          <LayoutList color="white" size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0 }}>
          Task Manager
        </h1>
      </header>

      <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <TaskForm onAdd={handleAdd} />
        {loading ? <p style={{ textAlign: 'center', color: '#94a3b8' }}>Loading tasks...</p> : (
          <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
        )}
      </div>

      <footer style={{ marginTop: '3rem', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
        <p>Trawlii</p>
      </footer>
    </div>
  );
}

export default App;
