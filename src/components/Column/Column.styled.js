import styled from 'styled-components';

export const MainColumn = styled.div`
  display: flex !important;
  flex-direction: column !important;
  width: 100%;
`;


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

export const CardsContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
  gap: 20px !important; 
  width: 100%;
`;
