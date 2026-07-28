import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../../services/tasks';

export default function PopNewCard({ onTaskCreated }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [theme, setTheme] = useState('');
  const [date, setDate] = useState('');

  const handleClose = (e) => {
    if (e) e.preventDefault();
    navigate('/'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !theme) {
      setError('Form validation error');
      return;
    }

    try {
      const taskData = {
        title: title,
        topic: theme,
        description: description,
        date: date ? new Date(date).toISOString() : new Date().toISOString()
      };

      await createTask(taskData); 
      if (onTaskCreated) onTaskCreated(); 
      handleClose();
    } catch (err) {
      setError(err.message || 'API error');
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
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                {error && <p style={{ color: 'red', margin: '10px 0' }}>{error}</p>}

                <div className="form-new__block">
                  <p className="subttl">Категория</p>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px', marginBottom: '20px' }}>
                    <button
                      type="button"
                      style={{ padding: '8px 16px', borderRadius: '4px', border: theme === 'Web Design' ? '2px solid #000' : '1px solid #ccc', background: '#ffe4c4', cursor: 'pointer' }}
                      onClick={() => setTheme('Web Design')}
                    >
                      Web Design
                    </button>
                    <button
                      type="button"
                      style={{ padding: '8px 16px', borderRadius: '4px', border: theme === 'Research' ? '2px solid #000' : '1px solid #ccc', background: '#b0e0e6', cursor: 'pointer' }}
                      onClick={() => setTheme('Research')}
                    >
                      Research
                    </button>
                    <button
                      type="button"
                      style={{ padding: '8px 16px', borderRadius: '4px', border: theme === 'Copywriting' ? '2px solid #000' : '1px solid #ccc', background: '#e6e6fa', cursor: 'pointer' }}
                      onClick={() => setTheme('Copywriting')}
                    >
                      Copywriting
                    </button>
                  </div>
                </div>

                <button type="submit" className="pop-new-card__creator" style={{ width: '100%', padding: '12px', background: '#565EEF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                  Создать задачу
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
