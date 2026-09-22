import { Link } from 'react-router-dom';

export default function Header({ onCreateTask, username }) {
  return (
    <header className="header" style={{ width: '100%', backgroundColor: '#FFFFFF', borderBottom: '1px solid #EFF2F6' }}>
      <div className="header__block" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1260px', margin: '0 auto', padding: '0 16px', boxSizing: 'border-box' }}>
        
        <div className="header__logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontWeight: '700', fontSize: '24px', color: '#000000', letterSpacing: '-0.5px', fontFamily: 'Roboto, sans-serif' }}>
              skypro
            </span>
          </Link>
        </div>

        <nav className="header__nav" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button
            type="button"
            onClick={onCreateTask}
            className="header__btn _new-task-btn"
            style={{ 
              padding: '8px 20px', 
              borderRadius: '4px', 
              backgroundColor: '#565EEF', 
              color: '#FFFFFF', 
              border: 'none', 
              fontWeight: '600', 
              cursor: 'pointer',
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Create Task
          </button>

          <div className="header__user" style={{ fontSize: '14px', fontWeight: '500', color: '#565EEF', fontFamily: 'Roboto, sans-serif' }}>
            {username || ''}
          </div>
        </nav>

      </div>

      <style>{`
        @media (max-width: 768px) {
          ._new-task-btn {
            position: fixed !important;
            bottom: 20px !important;
            left: 16px !important;
            right: 16px !important;
            width: calc(100% - 32px) !important;
            padding: 14px 20px !important;
            font-size: 16px !important;
            z-index: 1000 !important;
            box-shadow: 0 4px 12px rgba(86, 94, 239, 0.3) !important;
            text-align: center !important;
          }
        }
      `}</style>
    </header>
  );
}
