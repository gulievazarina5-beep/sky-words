import styled from 'styled-components';

// 1. Обертка для всей колонки
export const MainColumn = styled.div`
  display: flex !important;
  flex-direction: column !important;
  width: 100%;
`;

// 2. Блок с заголовком колонки
export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin-bottom: 20px;
  
  p {
    color: #94A6BE;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
  }
`;

// 3. Контейнер для списка карточек (ЖЕСТКО СВЕРХУ ВНИЗ)
export const CardsContainer = styled.div`
  display: flex !important;
  flex-direction: column !important; /* Выстраивает карточки строго друг под друга */
  gap: 20px !important; /* Делает идеальный отступ в 20px между ними */
  width: 100%;
`;
