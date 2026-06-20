import styled from 'styled-components';
import { categoryThemes } from '../Theme'; // Путь к вашей теме с большой буквы

// 1. Обертка карточки с гарантированным отступом снизу
export const CardsItem = styled.div`
  margin-bottom: 20px; /* Вертикальный отступ между карточками */
  width: 100%;
  display: block;
`;

// 2. Сама карточка
export const CardContainer = styled.div`
  width: 100%;
  display: block;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.05); /* Легкая тень карточки */
  box-sizing: border-box;
`;

export const CardGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

// 3. Динамическая тема карточки
export const CardTheme = styled.div`
  width: auto;
  height: 22px;
  padding: 0 14px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => categoryThemes[props.$theme]?.bg || categoryThemes.Default.bg};
  
  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    margin: 0;
    color: ${(props) => categoryThemes[props.$theme]?.text || categoryThemes.Default.text};
  }
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  
  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #000000;
  margin: 0;
  text-decoration: none;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  
  p {
    color: #94A6BE;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    margin: 0;
  }
  
  svg {
    width: 13px;
    height: 13px;
  }
`;
