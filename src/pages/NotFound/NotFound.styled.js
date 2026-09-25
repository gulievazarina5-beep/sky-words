import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #EAEEF6;
  padding: 20px;
  font-family: 'Roboto', Arial, sans-serif;
  box-sizing: border-box;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 120px;
  font-weight: 900;
  color: #565EEF;
  margin: 0;
  line-height: 1;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 20px 0 10px 0;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #94A6BE;
  margin: 0 0 30px 0;
  max-width: 400px;
`;

export const BackLink = styled(Link)`
  width: 240px;
  height: 40px;
  background-color: #565EEF;
  color: #FFFFFF;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #33399b;
  }
`;
