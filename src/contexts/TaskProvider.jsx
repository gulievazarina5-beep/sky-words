import { useState, useCallback } from 'react';
import { TaskContext } from './TaskContext';
import { getTasks as apiGetTasks } from '../services/tasks';

export default function TaskProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async (token) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await apiGetTasks(token);
      if (data && data.tasks) {
        setCards(data.tasks);
      } else if (Array.isArray(data)) {
        setCards(data);
      } else {
        setCards([]);
      }
    } catch (err) {
      setError(err.message || 'Error fetching tasks');
      setCards([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <TaskContext.Provider value={{ cards, isLoading, error, fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
