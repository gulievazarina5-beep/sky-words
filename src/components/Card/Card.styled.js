import styled from 'styled-components';

export const CardsItem = styled.div`
  margin-bottom: 20px !important;
  width: 100% !important;
  display: block !important;
`;

export const CardContainer = styled.div`
  width: 100% !important;
  display: block !important;
  background: #ffffff !important;
  border-radius: 12px !important;
  padding: 20px !important;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.05) !important;
  box-sizing: border-box !important;
`;

export const CardGroup = styled.div`
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  margin-bottom: 15px !important;
`;

export const CardTheme = styled.div`
  width: auto !important;
  height: auto !important; 
  padding: 6px 14px !important; 
  border-radius: 24px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  
  background-color: ${(props) => 
    props.$theme === 'Web Design' ? '#FFE6CC' : 
    props.$theme === 'Research' ? '#E5F9E0' : 
    props.$theme === 'Copywriting' ? '#EAE6FF' : '#EFF2F6'} !important;
  
  p {
    font-size: 10px !important;
    font-weight: 600 !important;
    line-height: 1 !important;
    margin: 0 !important;
    
    color: ${(props) => 
      props.$theme === 'Web Design' ? '#FF8000' : 
      props.$theme === 'Research' ? '#00B341' : 
      props.$theme === 'Copywriting' ? '#9B30FF' : '#94A3B8'} !important;
  }
`;

export const CardBtn = styled.div`
  width: 24px !important;
  height: 24px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-around !important;
  padding: 2px !important;
  cursor: pointer !important;
  
  div {
    width: 4px !important;
    height: 4px !important;
    border-radius: 50% !important;
    background-color: #94A6BE !important;
  }
`;

export const CardContent = styled.div`
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 15px !important;
`;

export const CardTitle = styled.h3`
  font-size: 14px !important;
  font-weight: 600 !important;
  line-height: 18px !important;
  color: #000000 !important;
  margin: 0 !important;
  text-decoration: none !important;
  text-align: left !important;
`;

export const CardDate = styled.div`
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
  
  p {
    color: #94A6BE !important;
    font-size: 10px !important;
    font-weight: 400 !important;
    line-height: 12px !important;
    margin: 0 !important;
  }
  
  svg {
    width: 13px !important;
    height: 13px !important;
    flex-shrink: 0 !important;
  }
`;
