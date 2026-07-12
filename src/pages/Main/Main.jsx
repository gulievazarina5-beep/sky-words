import  { useState, useEffect } from 'react';
import * as S from './Main.styled';
import Column from '../../components/Column/Column'; 
import Header from '../../components/Header/Header'; 
import { Outlet } from 'react-router-dom'; 

export default function Main({ cards }) {
  // Добавляем состояние загрузки сюда, как просил наставник
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово"
  ];

  return (
    <S.Wrapper> {/* Заменили обычный div с инлайн-стилями на Styled Component */}
      
      {/* 1. Сначала рендерим шапку приложения */}
      <Header />
      
      {/* 2. Рендерим основную контентную часть доски или надпись о загрузке */}
      <S.MainContent>
        <S.MainContainer>
          {isLoading ? (
            // Текст загрузки без инлайн-стилей (стилизуем в следующем шаге)
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

      {/* 3. Отрендерит модальные окна ПОВЕРХ всей страницы */}
      <Outlet />
      
    </S.Wrapper>
  );
}
