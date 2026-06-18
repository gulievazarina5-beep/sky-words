import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopUser from './components/PopUser/PopUser'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/popbrowse/popbrowse.jsx'
// ИМПОРТ: Подключаем наш массив данных из файла data.js
import { cardList } from './data.js'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      {/* Модальные окна (Popups) */}
      <PopUser />
      <PopNewCard />
      <PopBrowse />

      {/* Основной контент сайта */}
      <Header />
      
      {/* ПЕРЕДАЧА ДАННЫХ: Передаем массив cardList в компонент Main через пропсы */}
      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '100px', fontSize: '24px', fontWeight: 'bold' }}>
          Данные загружаются...
        </div>
      ) : (
        <Main cards={cardList} />
      )}
    </div>
  )
}

export default App
