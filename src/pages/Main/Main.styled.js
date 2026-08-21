import styled from 'styled-components';

export const MainContent = styled.main`
  width: 100%;
  background-color: #EAEEF6;
  padding: 60px 0;
  min-height: calc(100vh - 70px);
`;

export const MainContainer = styled.div`
  max-width: 1260px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const LoadingText = styled.div`
  text-align: center;
  padding: 100px;
  font-size: 24px;
  font-weight: bold;
`;

  export const NoTasksText = styled.div`
  text-align: center;
  padding: 100px 0;
  font-size: 20px;
  color: #94A6BE;
  font-weight: 500;
  width: 100%;
`;
