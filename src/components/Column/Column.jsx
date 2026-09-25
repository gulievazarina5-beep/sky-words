import * as S from './Column.styled';
import Card from '../Card/Card';

export default function Column({ title, cards }) {
  
  const translateTitle = (engTitle) => {
    switch (engTitle) {
      case "No status":
      case "Без статуса":
        return "Без статуса";
      case "To Do":
      case "Нужно сделать":
        return "Нужно сделать";
      case "In Progress":
      case "В работе":
        return "В работе";
      case "Testing":
      case "Тестирование":
        return "Тестирование";
      case "Done":
      case "Готово":
        return "Готово";
      default:
        return engTitle;
    }
  };

  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{translateTitle(title)}</p>
      </S.ColumnTitle>
      <S.CardsContainer>
        {cards && cards.map((card) => (
          <Card
            key={card._id || card.id}
            id={card._id || card.id}
            title={card.title}
            theme={card.theme || card.topic}
            date={card.date}
          />
        ))}
      </S.CardsContainer>
    </S.MainColumn>
  );
}
