import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopUser from './components/PopUser/PopUser'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse'

function App() {
  return (
    <div className="wrapper">
      {/* Модальные окна (Popups) */}
      <PopUser />
      <PopNewCard />
      <PopBrowse />

      {/* Основной контент сайта */}
      <Header />
      <Main />
    </div>
  )
}

export default App
