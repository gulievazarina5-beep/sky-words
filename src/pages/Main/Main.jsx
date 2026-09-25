import { useEffect, useContext, useRef } from 'react';
import * as S from './Main.styled';
import Column from '../../components/Column/Column'; 
import Header from '../../components/Header/Header'; 
import { Outlet } from 'react-router-dom'; 
import { TaskContext } from '../../contexts/TaskContext';
import { AuthContext } from '../../contexts/AuthContext';

export default function Main() {
  const { cards, isLoading, fetchTasks } = useContext(TaskContext);
  const { isAuth, user } = useContext(AuthContext); 
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
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово"
  ];
  return (
    <S.Wrapper>
      <Header username={user?.name || ''} />
      
      <S.MainContent>
        <S.MainContainer>
          {isLoading ? (
            <S.LoaderWrapper>
              <S.Spinner />
              <p>Загрузка данных...</p>
            </S.LoaderWrapper>
          ) : (
            <>
              {!cards || cards.length === 0 ? (
                <S.NoTasksText>Новых задач нет</S.NoTasksText>
              ) : (
                <S.MainBlock>
                  {statusList.map((status) => {
                    const filteredCards = Array.isArray(cards) 
                      ? cards.filter((card) => {
                          if (status === "Без статуса") {
                            return card.status === "Без статуса" || card.status === "No status" || !card.status;
                          }
                          if (status === "Нужно сделать") {
                            return card.status === "Нужно сделать" || card.status === "To Do";
                          }
                          if (status === "В работе") {
                            return card.status === "В работе" || card.status === "In Progress";
                          }
                          if (status === "Тестирование") {
                            return card.status === "Тестирование" || card.status === "Testing";
                          }
                          if (status === "Готово") {
                            return card.status === "Готово" || card.status === "Done";
                          }

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

      <style>{`
        body, html, #root {
          font-family: 'Roboto', sans-serif !important;
        }
        h1:empty, p:empty, div:empty {
          display: none !important;
        }
      `}</style>
    </S.Wrapper>
  );
}
