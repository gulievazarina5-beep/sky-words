import * as S from './Column.styled';
import Card from '../Card/Card';

export default function Column({ title, cards }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>

      <S.CardsContainer>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            theme={card.theme}
            date={card.date}
          />
        ))}
      </S.CardsContainer>
    </S.MainColumn>
  );
}
