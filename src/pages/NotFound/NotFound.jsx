import { Link } from 'react-router-dom';
import * as S from '../Login/login.styled';

export function NotFound() {
  return (
    <S.ContainerSignin style={{ fontFamily: 'Roboto, sans-serif' }}>
      <S.Modal>
        <S.ModalBlock style={{ padding: '60px 40px', textAlign: 'center' }}>
          <S.ModalTitle>
            <h1 style={{ fontSize: '72px', color: '#565EEF', margin: '0 0 10px 0' }}>404</h1>
            <h2 style={{ fontSize: '20px', color: '#000', marginBottom: '20px' }}>Страница не найдена</h2>
          </S.ModalTitle>
          <p style={{ color: '#94A6BE', fontSize: '14px', marginBottom: '30px' }}>
            Возможно, она была удалена или перенесена по другому адресу.
          </p>
          <Link 
            to="/" 
            style={{ 
              display: 'inline-block',
              width: '100%',
              padding: '12px', 
              background: '#565EEF', 
              color: '#fff', 
              textDecoration: 'none',
              borderRadius: '4px', 
              fontWeight: '600',
              fontSize: '16px',
              transition: 'background-color 0.2s'
            }}
          >
            На главную страницу
          </Link>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignin>
  );
}
