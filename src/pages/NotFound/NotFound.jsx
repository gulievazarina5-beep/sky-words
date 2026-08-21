import * as S from './NotFound.styled';

export function NotFound() {
  return (
    <S.NotFoundContainer>
      <S.Title>404</S.Title>
      <S.SubTitle>Страница не найдена</S.SubTitle>
      <S.Text>Похоже, такой страницы не существует или она была перемещена.</S.Text>
      <S.BackLink to="/">Вернуться на главную</S.BackLink>
    </S.NotFoundContainer>
  );
}
