import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Добавили импорт роутера
import './App.css';
import { AppRoutes } from './AppRoutes';
import { cardList } from './data.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [cards, setCards] = useState(cardList);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px', fontSize: '24px', fontWeight: 'bold' }}>
        Данные загружаются...
      </div>
    );
  }

  return (
    // Обернули AppRoutes в BrowserRouter, чтобы роутинг заработал по всему приложению
    <BrowserRouter>
      <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} cards={cards} />
    </BrowserRouter>
  );
}

export default App;
