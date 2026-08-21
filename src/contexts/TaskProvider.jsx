import { useState, useCallback } from 'react';
import { TaskContext } from './TaskContext';
import { getTasks as apiGetTasks, createTask as apiCreateTask } from '../services/tasks';

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

  const addTask = useCallback(async (taskData, token) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await apiCreateTask(taskData, token);
      
      if (data && data.tasks) {
        setCards(data.tasks);
      } else {
        await fetchTasks(token);
      }
    } catch (err) {
      setError(err.message || 'Error creating task');
      throw err; 
    } finally {
      setIsLoading(false);
    }
  }, [fetchTasks]);

  return (
    <TaskContext.Provider value={{ cards, isLoading, error, fetchTasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
}
