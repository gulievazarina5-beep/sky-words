import { useState } from "react";
import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { cardList } from "./data.js";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const cards = cardList;

  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

  return (
    <AppRoutes
      isAuth={isAuth}
      onLogin={login}
      onLogout={logout}
      cards={cards}
    />
  );
}

export default App;
