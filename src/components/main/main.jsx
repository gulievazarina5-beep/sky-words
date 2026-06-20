import * as S from './main.styled';
import Column from '../column/column'; 

export default function Main({ cards }) {
  // Список всех пяти колонок на доске
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово"
  ];

  return (
    <S.MainContent>
      <S.MainContainer>
        <S.MainBlock>
          
          {/* Фильтруем и выводим каждую колонку отдельно */}
          {statusList.map((status) => {
            const filteredCards = cards.filter((card) => card.status === status);
            return (
              <Column 
                key={status} 
                title={status} 
                cards={filteredCards} 
              />
            );
          })}

        </S.MainBlock>
      </S.MainContainer>
    </S.MainContent>
  );
}
