import { useEffect, useContext } from 'react';
import * as S from './Main.styled';
import Column from '../../components/Column/Column'; 
import Header from '../../components/Header/Header'; 
import { Outlet } from 'react-router-dom'; 
import { TaskContext } from '../../contexts/TaskContext';

export default function Main() {
  const { cards, isLoading, fetchTasks } = useContext(TaskContext);

   useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово"
  ];

  return (
    <S.Wrapper>
      <Header />
      
      <S.MainContent>
        <S.MainContainer>
          {isLoading ? (
            <S.LoadingText>Данные загружаются...</S.LoadingText>
          ) : (
            <S.MainBlock>
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
          )}
        </S.MainContainer>
      </S.MainContent>

      <Outlet />
    </S.Wrapper>
  );
}
