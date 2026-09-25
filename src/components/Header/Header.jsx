import { Link } from 'react-router-dom';

export default function Header({ username }) {
  return (
    <header style={{ width: '100%', backgroundColor: '#FFFFFF', borderBottom: '1px solid #EFF2F6', fontFamily: 'Roboto, sans-serif' }}>
      <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1260px', margin: '0 auto', padding: '0 16px', boxSizing: 'border-box' }}>
        
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'block', textDecoration: 'none' }}>
            <img 
              src="/images/logo.png" 
              alt="skypro" 
              style={{ width: '106px', height: 'auto', display: 'block', border: 'none' }} 
            />
          </Link>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link to="/new" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              style={{ 
                padding: '8px 20px', 
                borderRadius: '4px', 
                backgroundColor: '#565EEF', 
                color: '#FFFFFF', 
                border: 'none', 
                fontWeight: '600', 
                cursor: 'pointer',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '14px'
              }}
            >
              Создать задачу
            </button>
          </Link>

          <div style={{ fontSize: '14px', fontWeight: '500', color: '#565EEF', fontFamily: 'Roboto, sans-serif' }}>
            {username || ''}
          </div>
        </nav>

      </div>

      <style>{`
        
        .header__logo, 
        [class*="header__logo"],
        .header__logo a,
        .header__logo span {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          font-size: 0 !important;
          width: 0 !important;
          height: 0 !important;
        }
      `}</style>
    </header>
  );
}
