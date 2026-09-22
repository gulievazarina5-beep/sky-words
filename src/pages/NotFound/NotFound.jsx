import { Link } from 'react-router-dom';
import * as S from '../Login/login.styled';

export function NotFound() {
  return (
    <S.ContainerSignin style={{ fontFamily: 'Roboto, sans-serif' }}>
      <S.Modal>
        <S.ModalBlock style={{ padding: '60px 40px', textAlign: 'center' }}>
          <S.ModalTitle>
            <h1 style={{ fontSize: '72px', color: '#565EEF', margin: '0 0 10px 0' }}>404</h1>
            <h2 style={{ fontSize: '20px', color: '#000', marginBottom: '20px' }}>Page Not Found</h2>
          </S.ModalTitle>
          <p style={{ color: '#94A6BE', fontSize: '14px', marginBottom: '30px' }}>
            The page you are looking for might have been removed or is temporarily unavailable.
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
            Go to Main Page
          </Link>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignin>
  );
}
