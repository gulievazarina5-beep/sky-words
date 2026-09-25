import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  width: 100%;
  flex: 1;
  background-color: #eaeaea;
`;

export const MainContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 1200px) {
    overflow-x: auto;
    padding-bottom: 32px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    overflow-x: hidden;
    gap: 20px;
    padding: 16px 0 80px 0; 
  }
`;

export const NoTasksText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #94a3b8;
  text-align: center;
  margin-top: 60px;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  gap: 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #565eef;
  font-weight: 500;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #eff2f6;
  border-top: 4px solid #565eef;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
