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
      setError('Task title cannot be empty');
      return;
    }
    if (!description.trim()) {
      setError('Task description cannot be empty');
      return;
    }
    if (!theme) {
      setError('Please select a category');
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
      setError(err.message || 'Failed to save the task.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            
            <div className="pop-new-card__header">
              <h3 className="pop-new-card__ttl">Create Task</h3>
              <button type="button" onClick={handleClose} className="pop-new-card__close-btn">✖</button>
            </div>
            
            <div className="pop-new-card__wrap">
              <form id="formNewCard" onSubmit={handleSubmit}>
                
                <div className="pop-new-card__columns">
                  
                  <div className="pop-new-card__column-left">
                    <div className="pop-new-card__form-group">
                      <label htmlFor="formTitle" className="pop-new-card__label">Task Title</label>
                      <input
                        type="text"
                        id="formTitle"
                        placeholder="Enter title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={isSubmitting}
                        autoFocus
                        className="pop-new-card__input"
                      />
                    </div>
                    
                    <div className="pop-new-card__form-group">
                      <label htmlFor="textArea" className="pop-new-card__label">Task Description</label>
                      <textarea
                        id="textArea"
                        placeholder="Enter description..."
                        value={description}
                        disabled={isSubmitting}
                        onChange={(e) => setDescription(e.target.value)}
                        className="pop-new-card__textarea"
                      ></textarea>
                    </div>

                    <div className="pop-new-card__categories">
                      <p className="pop-new-card__label">Category</p>
                      <div className="pop-new-card__categories-buttons">
                        <button
                          type="button"
                          disabled={isSubmitting}
                          style={{ background: theme === 'Web Design' ? '#FFE6CC' : '#EFF2F6', color: theme === 'Web Design' ? '#FF8000' : '#94A3B8' }}
                          onClick={() => setTheme('Web Design')}
                          className="pop-new-card__category-btn"
                        >
                          Web Design
                        </button>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          style={{ background: theme === 'Research' ? '#E5F9E0' : '#EFF2F6', color: theme === 'Research' ? '#00B341' : '#94A3B8' }}
                          onClick={() => setTheme('Research')}
                          className="pop-new-card__category-btn"
                        >
                          Research
                        </button>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          style={{ background: theme === 'Copywriting' ? '#EAE6FF' : '#EFF2F6', color: theme === 'Copywriting' ? '#9B30FF' : '#94A3B8' }}
                          onClick={() => setTheme('Copywriting')}
                          className="pop-new-card__category-btn"
                        >
                          Copywriting
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pop-new-card__column-right">
                    <Calendar selected={selectedDate} onChange={setSelectedDate} />
                  </div>

                </div>

                {error && <p className="pop-new-card__error">{error}</p>}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="pop-new-card__submit-btn"
                  style={{ background: isSubmitting ? '#94A6BE' : '#565EEF' }}
                >
                  {isSubmitting ? 'Creating task...' : 'Create Task'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
