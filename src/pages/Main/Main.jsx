import { useEffect, useContext, useRef } from 'react';
import * as S from './Main.styled';
import Column from '../../components/Column/Column'; 
import Header from '../../components/header/header'; 
import { Outlet } from 'react-router-dom'; 
import { TaskContext } from '../../contexts/TaskContext';
import { AuthContext } from '../../contexts/AuthContext';

export default function Main() {
  const { cards, isLoading, fetchTasks } = useContext(TaskContext);
  const { isAuth } = useContext(AuthContext);
  const didFetch = useRef(false);

  useEffect(() => {
    if (isAuth && !didFetch.current) {
      const currentToken = localStorage.getItem('token');
      if (currentToken) {
        didFetch.current = true;
        fetchTasks(currentToken);
      }
    }
  }, [fetchTasks, isAuth]);

  const statusList = [
    "No status",
    "To Do",
    "In Progress",
    "Testing",
    "Done"
  ];

  return (
    <S.Wrapper>
      <Header />
      
      <S.MainContent>
        <S.MainContainer>
          {isLoading ? (
            <S.LoaderWrapper>
              <S.Spinner />
              <p>Loading data...</p>
            </S.LoaderWrapper>
          ) : (
            <>
              {!cards || cards.length === 0 ? (
                <S.NoTasksText>No tasks available</S.NoTasksText>
              ) : (
                <S.MainBlock>
                  {statusList.map((status) => {
                    const filteredCards = Array.isArray(cards) 
                      ? cards.filter((card) => {
                          if (status === "No status") {
                            return card.status === status || !card.status || card.status === "Без статуса";
                          }
                          if (status === "To Do" && card.status === "Нужно сделать") return true;
                          if (status === "In Progress" && card.status === "В работе") return true;
                          if (status === "Testing" && card.status === "Тестирование") return true;
                          if (status === "Done" && card.status === "Готово") return true;

                          return card.status === status;
                        }) 
                      : [];
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
            </>
          )}
        </S.MainContainer>
      </S.MainContent>

      <Outlet />
    </S.Wrapper>
  );
}
