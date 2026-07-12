import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './AppRoutes';
import { cardList } from './data.js';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [cards] = useState(cardList); // Оставили только cards, убрали неиспользуемый setCards

  return (
    <BrowserRouter>
      <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} cards={cards} />
    </BrowserRouter>
  );
}

export default App;
