import { useEffect, useState } from "react";
import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { getTasks } from "./services/tasks";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [cards, setCards] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 


  useEffect(() => {
    const fetchTasksData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const data = await getTasks();
        setCards(data); 
      } catch (err) {
        setError(err.message || "Не удалось загрузить задачи");
      } finally {
        setIsLoading(false); 
      }
    };

    fetchTasksData();
  }, []);

  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

  return (
    <AppRoutes
      isAuth={isAuth}
      onLogin={login}
      onLogout={logout}
      cards={cards}         
      isLoading={isLoading} 
      error={error}         
    />
  );
}

export default App;
