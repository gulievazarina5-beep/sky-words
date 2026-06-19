import Column from "../Column/Column";

// Массив со всеми статусами (колонками)
const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово"
];

// Принимаем пропс cards, который мы передали из App.jsx
export default function Main({ cards }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {/* Рендерим колонки динамически через map, чтобы не дублировать код */}
            {statusList.map((status) => (
              <Column 
                key={status} 
                title={status} 
                cards={cards.filter((card) => card.status === status)} 
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
