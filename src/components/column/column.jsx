import Card from "../Card/Card";

// Принимаем пропсы title (название колонки) и cards (массив отфильтрованных карточек для этой колонки)
export default function Column({ title, cards }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        
        {/* Динамический рендеринг: перебираем массив карточек через метод .map() */}
        {cards.map((card) => (
          <Card 
            key={card.id}          // Уникальный ключ для React
            title={card.title}    // Передаем реальное название задачи
            theme={card.theme}    // Передаем реальную тему задачи
            date={card.date}      // Передаем дату выполнения
          />
        ))}

      </div>
    </div>
  );
}
