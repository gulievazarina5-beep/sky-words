import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../Calendar/Calendar'; 
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
  const [selectedDate, setSelectedDate] = useState(new Date());
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
        date: selectedDate ? selectedDate.toISOString() : new Date().toISOString()
      };

      const token = user?.token || localStorage.getItem('token'); 

      await addTask(taskData, token); 
      await fetchTasks(token); 
      handleClose();
    } catch (err) {
      setError(err.message || 'Не удалось сохранить задачу.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard" style={{ display: 'block', fontFamily: 'Roboto, sans-serif' }}>
      <div className="pop-new-card__container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'rgba(0,0,0,0.4)', padding: '20px' }}>
        <div className="pop-new-card__block" style={{ background: '#fff', borderRadius: '12px', padding: '40px', width: '100%', maxWidth: '630px', position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          <div className="pop-new-card__content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 className="pop-new-card__ttl" style={{ margin: '0', fontSize: '20px', fontWeight: '700' }}>Создание задачи</h3>
              <button onClick={handleClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#94A6BE' }}>✖</button>
            </div>
            
            <div className="pop-new-card__wrap">
              <form id="formNewCard" onSubmit={handleSubmit}>
                
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  
                  {/* LEFT COLUMN: Title, Description, Categories */}
                  <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="formTitle" style={{ fontWeight: '600', fontSize: '14px', marginBottom: '8px' }}>Название задачи</label>
                      <input
                        type="text"
                        placeholder="Введите название..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={isSubmitting}
                        autoFocus
                        style={{ padding: '14px', borderRadius: '8px', border: '1px solid #D4DBE5', fontSize: '14px' }}
                      />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="textArea" style={{ fontWeight: '600', fontSize: '14px', marginBottom: '8px' }}>Описание задачи</label>
                      <textarea
                        placeholder="Введите описание..."
                        value={description}
                        disabled={isSubmitting}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ height: '140px', resize: 'none', padding: '14px', borderRadius: '8px', border: '1px solid #D4DBE5', fontSize: '14px' }}
                      ></textarea>
                    </div>

                    <div style={{ marginTop: '10px' }}>
                      <p style={{ fontWeight: '600', fontSize: '14px', margin: '0 0 8px 0' }}>Категория</p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          style={{ padding: '8px 18px', borderRadius: '18px', border: 'none', fontWeight: '600', fontSize: '12px', background: theme === 'Web Design' ? '#FFE6CC' : '#EFF2F6', color: theme === 'Web Design' ? '#FF8000' : '#94A3B8', cursor: 'pointer' }}
                          onClick={() => setTheme('Web Design')}
                        >
                          Web Design
                        </button>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          style={{ padding: '8px 18px', borderRadius: '18px', border: 'none', fontWeight: '600', fontSize: '12px', background: theme === 'Research' ? '#E5F9E0' : '#EFF2F6', color: theme === 'Research' ? '#00B341' : '#94A3B8', cursor: 'pointer' }}
                          onClick={() => setTheme('Research')}
                        >
                          Research
                        </button>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          style={{ padding: '8px 18px', borderRadius: '18px', border: 'none', fontWeight: '600', fontSize: '12px', background: theme === 'Copywriting' ? '#EAE6FF' : '#EFF2F6', color: theme === 'Copywriting' ? '#9B30FF' : '#94A3B8', cursor: 'pointer' }}
                          onClick={() => setTheme('Copywriting')}
                        >
                          Copywriting
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Calendar component */}
                  <div style={{ flex: '0 0 280px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <p style={{ fontWeight: '600', fontSize: '14px', margin: '0' }}>Даты</p>
                    <Calendar selected={selectedDate} onChange={setSelectedDate} />
                  </div>

                </div>

                {error && <p style={{ color: '#f5222d', margin: '15px 0 0 0', fontSize: '14px', fontWeight: '500', textAlign: 'center' }}>{error}</p>}

                <button 
                  type="submit" 
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
                    fontWeight: '600',
                    fontSize: '14px'
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
