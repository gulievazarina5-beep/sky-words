import * as S from './NotFound.styled';

export const NotFound = () => {
  return (
    <S.NotFoundContainer>
      <h2>404: Страница не найдена</h2>
      <p>Ой! Похоже, такой страницы не существует.</p>
    </S.NotFoundContainer>
  );
};
