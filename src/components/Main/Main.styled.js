import styled from 'styled-components';

export const MainContent = styled.main`
  width: 100%;
  background-color: #f1f1f1;
  padding: 60px 0;
  min-height: calc(100vh - 70px);
`;

export const MainContainer = styled.div`
  max-width: 1260px;
  padding: 0 20px;
  margin: 0 auto;
`;

// Самый важный блок! Распределяет 5 колонок в один горизонтальный ряд
export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px; /* Отступы между самими колонками */
`;
