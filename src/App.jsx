import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopUser from './components/PopUser/PopUser'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse.jsx'
import { cardList } from './data.js'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  // Следим за изменением хэша в адресной строке, чтобы открывать/закрывать модалки
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      {/* Модальные окна рендерятся строго по условию хэша, не перекрывая друг друга */}
      {currentHash === '#popExit' && <PopUser />}
      {currentHash === '#popNewCard' && <PopNewCard />}
      {currentHash === '#popBrowse' && <PopBrowse />}

      <Header />
      
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
