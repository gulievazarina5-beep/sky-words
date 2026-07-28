import { useState } from 'react';
import { TaskContext } from './TaskContext';
import { getTasks as apiGetTasks } from '../services/tasks';

export default function TaskProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await apiGetTasks();
      setCards(data);
    } catch (err) {
      setError(err.message || 'Error fetching tasks');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TaskContext.Provider value={{ cards, isLoading, error, fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
