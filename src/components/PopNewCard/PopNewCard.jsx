import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../../contexts/TaskContext';
import { AuthContext } from '../../contexts/AuthContext';

export default function PopNewCard() {
  const navigate = useNavigate();
  const { fetchTasks, addTask } = useContext(TaskContext);
  const { user } = useContext(AuthContext);
  
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [theme, setTheme] = useState('');
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleClose = (e) => {
    if (e) e.preventDefault();
    navigate('/'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!title.trim()) {
      setError('Введите название задачи');
      return;
    }
    if (!description.trim()) {
      setError('Введите описание задачи');
      return;
    }
    if (!theme) {
      setError('Выберите категорию задачи');
      return;
    }

    try {
      setIsSubmitting(true);
      const taskData = {
        title: title.trim(),
        topic: theme,
        description: description.trim(),
        date: date ? new Date(date).toISOString() : new Date().toISOString()
      };

      const token = user?.token || localStorage.getItem('token'); 

      await addTask(taskData, token); 
      await fetchTasks(token); 
      handleClose();
    } catch (err) {
      setError(err.message || 'Не удалось сохранить задачу. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard" style={{ display: 'block' }}>
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <button onClick={handleClose} className="pop-new-card__close" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✖</button>
            
            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" id="formNewCard" onSubmit={handleSubmit}>
                
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  
                  <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'col', gap: '14px' }}>
                    <div className="form-new__block" style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="formTitle" className="subttl">Название задачи</label>
                      <input
                        className="form-new__input"
                        type="text"
                        name="name"
                        id="formTitle"
                        placeholder="Введите название..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={isSubmitting}
                        autoFocus
                      />
                    </div>
                    
                    <div className="form-new__block" style={{ display: 'flex', flexDirection: 'column', marginTop: '14px' }}>
                      <label htmlFor="textArea" className="subttl">Описание задачи</label>
                      <textarea
                        className="form-new__area"
                        name="text"
                        id="textArea"
                        placeholder="Введите описание..."
                        value={description}
                        disabled={isSubmitting}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ height: '140px', resize: 'none' }}
                      ></textarea>
                    </div>
                  </div>

                  <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div className="form-new__block" style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className="subttl">Дата исполнения</label>
                      <input 
                        type="date" 
                        className="form-new__input"
                        style={{ marginTop: '10px', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                        value={date}
                        disabled={isSubmitting}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>

                    <div className="form-new__block" style={{ marginTop: '14px' }}>
                      <p className="subttl">Категория</p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px' }}>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          style={{ padding: '8px 18px', borderRadius: '18px', border: 'none', fontWeight: '600', fontSize: '14px', background: theme === 'Web Design' ? '#ffe4c4' : '#eaeaea', color: theme === 'Web Design' ? '#ff9800' : '#666', opacity: theme === 'Web Design' ? 1 : 0.6, cursor: 'pointer' }}
                          onClick={() => setTheme('Web Design')}
                        >
                          Web Design
                        </button>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          style={{ padding: '8px 18px', borderRadius: '18px', border: 'none', fontWeight: '600', fontSize: '14px', background: theme === 'Research' ? '#b0e0e6' : '#eaeaea', color: theme === 'Research' ? '#1890ff' : '#666', opacity: theme === 'Research' ? 1 : 0.6, cursor: 'pointer' }}
                          onClick={() => setTheme('Research')}
                        >
                          Research
                        </button>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          style={{ padding: '8px 18px', borderRadius: '18px', border: 'none', fontWeight: '600', fontSize: '14px', background: theme === 'Copywriting' ? '#e6e6fa' : '#eaeaea', color: theme === 'Copywriting' ? '#9c27b0' : '#666', opacity: theme === 'Copywriting' ? 1 : 0.6, cursor: 'pointer' }}
                          onClick={() => setTheme('Copywriting')}
                        >
                          Copywriting
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                {error && <p style={{ color: '#f5222d', margin: '15px 0 0 0', fontSize: '14px', fontWeight: '500', textAlign: 'center' }}>{error}</p>}

                <button 
                  type="submit" 
                  className="pop-new-card__creator" 
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    marginTop: '24px',
                    background: isSubmitting ? '#94A6BE' : '#565EEF', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s',
                    fontWeight: '600'
                  }}
                >
                  {isSubmitting ? 'Создание задачи...' : 'Создать задачу'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
