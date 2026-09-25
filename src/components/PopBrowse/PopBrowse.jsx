import { useParams, useNavigate } from 'react-router-dom'; 
import { useContext, useState } from 'react';
import Calendar from '../Calendar/Calendar'; 
import { TaskContext } from '../../contexts/TaskContext';

const getTopicStyles = (topic) => {
  switch (topic) {
    case 'Web Design':
      return { bg: '#FFE6CC', color: '#FF8000' };
    case 'Research':
      return { bg: '#E5F9E0', color: '#00B341' };
    case 'Copywriting':
      return { bg: '#EAE6FF', color: '#9B30FF' };
    default:
      return { bg: '#EFF2F6', color: '#94A3B8' };
  }
};

export default function PopBrowse() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { cards, fetchTasks, editTask, deleteTask } = useContext(TaskContext);

  const card = cards.find((c) => String(c._id) === String(id) || String(c.id) === String(id)) || {};

  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [status, setStatus] = useState(card.status || "No status");
  const [description, setDescription] = useState(card.description || '');
  const [selectedDate, setSelectedDate] = useState(card.date ? new Date(card.date) : new Date());

  const token = localStorage.getItem('token');

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    setError(null);
    setIsSubmitting(true);
    try {
      if (typeof deleteTask === 'function') {
        await deleteTask(card._id || card.id || id, token);
      }
      await fetchTasks(token);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Server error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError(null);

    if (!description.trim()) {
      setError('Description cannot be empty');
      return;
    }

    setIsSubmitting(true);
    try {
      const updatedData = {
        status: status,
        description: description.trim(),
        date: selectedDate.toISOString()
      };

      if (typeof editTask === 'function') {
        await editTask(card._id || card.id || id, updatedData, token);
      }
      await fetchTasks(token);
      setIsEdit(false);
    } catch (err) {
      setError(err.message || 'Server error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const topicStyles = getTopicStyles(card.topic);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999, overflowY: 'auto', fontFamily: 'Roboto, sans-serif', padding: '16px', boxSizing: 'border-box' }}>
      <div style={{ width: '100%', maxWidth: '750px', boxSizing: 'border-box' }}>
        <div style={{ background: '#fff', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          <div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '24px', fontWeight: '700', color: '#000' }}>{card.title || 'Untitled'}</h3>
              <div style={{ padding: '6px 14px', borderRadius: '18px', backgroundColor: topicStyles.bg }}>
                <p style={{ color: topicStyles.color, fontWeight: '600', margin: '0', fontSize: '14px' }}>{card.topic || 'Topic'}</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '20px' }}>
              <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label htmlFor="textArea01" style={{ fontWeight: '600', display: 'block', marginBottom: '8px' }}>Task Description</label>
                  <textarea 
                    name="text" 
                    id="textArea01" 
                    disabled={!isEdit || isSubmitting} 
                    placeholder="Task description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ width: '100%', minHeight: '120px', resize: 'none', padding: '12px', borderRadius: '8px', backgroundColor: isEdit ? '#fff' : '#f4f5f7', border: isEdit ? '1px solid #565EEF' : '1px solid #ccc', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <p style={{ fontWeight: '600', marginBottom: '10px', margin: 0 }}>Status</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                    {["No status", "To Do", "In Progress", "Testing", "Done"]
                      .map((item) => {
                        const isActive = status === item;
                        return (
                          <div 
                            key={item}
                            onClick={() => isEdit && !isSubmitting && setStatus(item)}
                            style={{ 
                              padding: '8px 14px', 
                              borderRadius: '24px', 
                              background: isActive ? '#565EEF' : '#EFF2F6', 
                              color: isActive ? '#fff' : '#94A3B8',
                              fontWeight: '500',
                              cursor: isEdit ? 'pointer' : 'default',
                              textAlign: 'center',
                              fontSize: '12px'
                            }}
                          >
                            <p style={{ margin: '0' }}>{item}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              
              <div style={{ minWidth: '250px' }}>
                <Calendar 
                  selected={selectedDate} 
                  onChange={(date) => isEdit && setSelectedDate(date)} 
                /> 
              </div>
            </div>

            {error && (
              <p style={{ color: '#f5222d', margin: '15px 0 5px 0', fontSize: '14px', fontWeight: '500', textAlign: 'center' }}>
                {error}
              </p>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', gap: '12px', flexWrap: 'wrap' }}>
              {!isEdit ? (
                <>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button type="button" onClick={() => setIsEdit(true)} style={{ padding: '10px 16px', borderRadius: '4px', cursor: 'pointer', border: '1px solid #565EEF', background: 'none', color: '#565EEF', fontWeight: '600' }}>
                      Edit Task
                    </button>
                    <button type="button" onClick={handleDelete} style={{ padding: '10px 16px', borderRadius: '4px', cursor: 'pointer', border: '1px solid #565EEF', background: 'none', color: '#565EEF', fontWeight: '600' }}>
                      Delete Task
                    </button>
                  </div>
                  <button type="button" onClick={() => navigate('/')} style={{ padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', background: '#565EEF', color: '#fff', border: 'none', fontWeight: '600' }}>
                    Close
                  </button>
                </>
              ) : (
                <>
                  <button type="button" disabled={isSubmitting} onClick={handleSave} style={{ padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', background: '#565EEF', color: '#fff', border: 'none', fontWeight: '600' }}>
                    {isSubmitting ? 'Saving...' : 'Save'}
                  </button>
                  <button type="button" onClick={() => setIsEdit(false)} style={{ padding: '10px 16px', borderRadius: '4px', cursor: 'pointer', border: '1px solid #565EEF', background: 'none', color: '#565EEF', fontWeight: '600' }}>
                    Cancel
                  </button>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
