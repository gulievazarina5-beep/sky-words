import * as S from './Main.styled';
import Column from '../../components/Column/Column'; 
import Header from '../../components/Header/Header'; 
import { Outlet } from 'react-router-dom'; 

export default function Main({ cards }) {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово"
  ];

  return (
    <div className="wrapper" style={{ position: 'relative', minHeight: '100vh' }}>
      
      {/* 1. Сначала рендерим шапку приложения */}
      <Header />
      
      {/* 2. Рендерим основную контентную часть доски */}
      <S.MainContent>
        <S.MainContainer>
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
        </S.MainContainer>
      </S.MainContent>

      {/* 3. Переносим <Outlet /> в самый низ DOM-дерева */}
      {/* Это гарантирует, что модальные окна отрендерятся ПОВЕРХ всей страницы */}
      <Outlet />
      
    </div>
  );
}
