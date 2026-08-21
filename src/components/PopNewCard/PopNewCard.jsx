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
                <div className="form-new__block">
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
                
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">Описание задачи</label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание..."
                    value={description}
                    disabled={isSubmitting}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="form-new__block">
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

                {error && <p style={{ color: '#f5222d', margin: '10px 0', fontSize: '14px', fontWeight: '500' }}>{error}</p>}

                <div className="form-new__block">
                  <p className="subttl">Категория</p>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px', marginBottom: '20px' }}>
                    <button
                      type="button"
                      disabled={isSubmitting}
                      style={{ padding: '8px 16px', borderRadius: '4px', border: theme === 'Web Design' ? '2px solid #565EEF' : '1px solid #ccc', background: '#ffe4c4', cursor: 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
                      onClick={() => setTheme('Web Design')}
                    >
                      Web Design
                    </button>
                    <button
                      type="button"
                      disabled={isSubmitting}
                      style={{ padding: '8px 16px', borderRadius: '4px', border: theme === 'Research' ? '2px solid #565EEF' : '1px solid #ccc', background: '#b0e0e6', cursor: 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
                      onClick={() => setTheme('Research')}
                    >
                      Research
                    </button>
                    <button
                      type="button"
                      disabled={isSubmitting}
                      style={{ padding: '8px 16px', borderRadius: '4px', border: theme === 'Copywriting' ? '2px solid #565EEF' : '1px solid #ccc', background: '#e6e6fa', cursor: 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
                      onClick={() => setTheme('Copywriting')}
                    >
                      Copywriting
                    </button>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="pop-new-card__creator" 
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    background: isSubmitting ? '#94A6BE' : '#565EEF', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s'
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
