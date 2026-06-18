import Column from "../Column/Column";

// Принимаем пропс cards, который мы передали из App.jsx
export default function Main({ cards }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {/* Передаем в каждую колонку её название и отфильтрованный список карточек */}
            <Column 
              title="Без статуса" 
              cards={cards.filter((card) => card.status === "Без статуса")} 
            />
            <Column 
              title="Нужно сделать" 
              cards={cards.filter((card) => card.status === "Нужно сделать")} 
            />
            <Column 
              title="В работе" 
              cards={cards.filter((card) => card.status === "В работе")} 
            />
            <Column 
              title="Тестирование" 
              cards={cards.filter((card) => card.status === "Тестирование")} 
            />
            <Column 
              title="Готово" 
              cards={cards.filter((card) => card.status === "Готово")} 
            />
          </div>
        </div>
      </div>
    </main>
  );
}
