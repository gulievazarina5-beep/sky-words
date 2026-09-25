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
      setError('Название задачи не может быть пустым');
      return;
    }
    if (!description.trim()) {
      setError('Описание задачи не может быть пустым');
      return;
    }
    if (!theme) {
      setError('Пожалуйста, выберите категорию');
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
      setError(err.message || 'Ошибка при сохранении задачи.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99999 }}>
      <div style={{ width: '100%', maxWidth: '800px', padding: '0 16px', boxSizing: 'border-box' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '28px', boxShadow: '0 4px 24px rgba(0,0,0,0.1)', width: '100%', boxSizing: 'border-box', fontFamily: 'Roboto, sans-serif' }}>
          <div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: '#000000' }}>Создание задачи</h3>
              <button type="button" onClick={handleClose} style={{ background: 'none', border: 'none', fontSize: '18px', color: '#94A3B8', cursor: 'pointer' }}>✖</button>
            </div>
            
            <div>
              <form id="formNewCard" onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 330px', gap: '32px', marginBottom: '24px' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div style={{ width: '100%' }}>
                      <label htmlFor="formTitle" style={{ fontWeight: '600', fontSize: '14px', display: 'block', marginBottom: '8px', color: '#000000' }}>Название задачи</label>
                      <input
                        type="text"
                        id="formTitle"
                        placeholder="Введите название задачи..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={isSubmitting}
                        autoFocus
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #D4DBE5', fontSize: '14px', boxSizing: 'border-box', outline: 'none', background: '#FFFFFF', color: '#000000' }}
                      />
                    </div>
                    
                    <div style={{ width: '100%' }}>
                      <label htmlFor="textArea" style={{ fontWeight: '600', fontSize: '14px', display: 'block', marginBottom: '8px', color: '#000000' }}>Описание задачи</label>
                      <textarea
                        id="textArea"
                        placeholder="Введите описание задачи..."
                        value={description}
                        disabled={isSubmitting}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ width: '100%', height: '120px', resize: 'none', padding: '12px', borderRadius: '8px', border: '1px solid #D4DBE5', fontSize: '14px', boxSizing: 'border-box', outline: 'none', background: '#FFFFFF', color: '#000000' }}
                      ></textarea>
                    </div>

                    <div>
                      <p style={{ fontWeight: '600', fontSize: '14px', margin: '0 0 8px 0', color: '#000000' }}>Категория</p>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          style={{ 
                            padding: '8px 18px', 
                            border: 'none',
                            fontWeight: '600',
                            fontSize: '13px',
                            cursor: 'pointer',
                            borderRadius: '24px',
                            background: theme === 'Web Design' ? '#FFE6CC' : '#EFF2F6', 
                            color: theme === 'Web Design' ? '#FF8000' : '#94A3B8' 
                          }}
                          onClick={() => setTheme('Web Design')}
                        >
                          Web Design
                        </button>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          style={{ 
                            padding: '8px 18px', 
                            border: 'none',
                            fontWeight: '600',
                            fontSize: '13px',
                            cursor: 'pointer',
                            borderRadius: '24px',
                            background: theme === 'Research' ? '#E5F9E0' : '#EFF2F6', 
                            color: theme === 'Research' ? '#00B341' : '#94A3B8' 
                          }}
                          onClick={() => setTheme('Research')}
                        >
                          Research
                        </button>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          style={{ 
                            padding: '8px 18px', 
                            border: 'none',
                            fontWeight: '600',
                            fontSize: '13px',
                            cursor: 'pointer',
                            borderRadius: '24px',
                            background: theme === 'Copywriting' ? '#EAE6FF' : '#EFF2F6', 
                            color: theme === 'Copywriting' ? '#9B30FF' : '#94A3B8' 
                          }}
                          onClick={() => setTheme('Copywriting')}
                        >
                          Copywriting
                        </button>
                      </div>
                    </div>
                  </div>

                  <div style={{ width: '100%' }}>
                    <Calendar selected={selectedDate} onChange={setSelectedDate} />
                  </div>

                </div>

                {error && <p style={{ color: '#f5222d', margin: '0 0 12px 0', fontSize: '14px', fontWeight: '500', textAlign: 'center' }}>{error}</p>}

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{ padding: '10px 24px', borderRadius: '4px', color: '#FFFFFF', border: 'none', fontWeight: '600', fontSize: '14px', cursor: 'pointer', background: isSubmitting ? '#94A6BE' : '#565EEF' }}
                  >
                    {isSubmitting ? 'Создание...' : 'Создать задачу'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
