import { useParams, Link, useNavigate } from 'react-router-dom'; 
import { useContext, useState } from 'react';
import Calendar from '../Calendar/Calendar'; 
import { TaskContext } from '../../contexts/TaskContext';
import { AuthContext } from '../../contexts/AuthContext';

const topicStyles = {
  "Web Design": { backgroundColor: "#FFE6CC", color: "#FF8000" },
  "Research": { backgroundColor: "#E5F9E0", color: "#00B341" },
  "Copywriting": { backgroundColor: "#EAE6FF", color: "#9B30FF" },
};

export default function PopBrowse() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { cards, fetchTasks, editTask, deleteTask } = useContext(TaskContext);
  const { user } = useContext(AuthContext);

  const card = cards.find((c) => c._id === id);

  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [status, setStatus] = useState(card ? (card.status || "Без статуса") : "Без статуса");
  const [description, setDescription] = useState(card ? (card.description || '') : '');

  if (!card) {
    return (
      <div className="pop-browse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <p style={{ textAlign: 'center', fontSize: '18px', margin: '20px 0' }}>Задача не найдена</p>
            <Link to="/" className="_btn-bg" style={{ display: 'block', textDecoration: 'none', padding: '10px', color: '#fff', background: '#565EEF', borderRadius: '4px', textAlign: 'center' }}>Закрыть</Link>
          </div>
        </div>
      </div>
    );
  }

  const token = user?.token || localStorage.getItem('token');
  const currentTopic = card.topic || card.theme || 'Web Design';
  const currentTopicStyle = topicStyles[currentTopic] || { backgroundColor: "#EFF2F6", color: "#94A3B8" };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!window.confirm('Вы уверены, что хотите удалить эту задачу?')) return;

    setError(null);
    setIsSubmitting(true);
    try {
      if (typeof deleteTask === 'function') {
        await deleteTask(id, token);
      }
      await fetchTasks(token);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Ошибка сервера при удалении задачи.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError(null);

    if (!description.trim()) {
      setError('Описание задачи не может быть пустым');
      return;
    }

    setIsSubmitting(true);
    try {
      const updatedData = {
        status: status,
        description: description.trim()
      };

      if (typeof editTask === 'function') {
        await editTask(id, updatedData, token);
      }
      await fetchTasks(token);
      setIsEdit(false);
    } catch (err) {
      setError(err.message || 'Ошибка сервера при сохранении изменений.');
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
    <div className="pop-browse" id="popBrowse" style={{ fontFamily: 'Roboto, sans-serif', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)', padding: '20px', zIndex: 999 }}>
      <div className="pop-browse__container" style={{ width: '100%', maxWidth: '750px' }}>
        <div className="pop-browse__block" style={{ background: '#fff', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          <div className="pop-browse__content">
            <div className="pop-browse__top-block" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 className="pop-browse__ttl" style={{ fontSize: '24px', fontWeight: '700', color: '#000', margin: '0' }}>{card.title}</h3>
              <div style={{ padding: '6px 14px', borderRadius: '18px', backgroundColor: currentTopicStyle.backgroundColor }}>
                <p style={{ color: currentTopicStyle.color, fontWeight: '600', margin: '0', fontSize: '14px' }}>{currentTopic}</p>
              </div>
            </div>
            
            <div className="pop-browse__wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="pop-browse__form form-browse" style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="textArea01" className="subttl" style={{ fontWeight: '600', marginBottom: '8px' }}>Описание задачи</label>
                  <textarea 
                    className="form-browse__area" 
                    name="text" 
                    id="textArea01" 
                    readOnly={!isEdit || isSubmitting} 
                    placeholder="Описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ height: '140px', resize: 'none', padding: '12px', borderRadius: '8px', backgroundColor: isEdit ? '#fff' : '#f4f5f7', border: isEdit ? '1px solid #565EEF' : '1px solid #ccc', fontSize: '14px' }}
                  />
                </div>

                <div className="pop-browse__status status" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p className="status__ttl subttl" style={{ fontWeight: '600', margin: '0' }}>Статус</p>
                  <div className="status__themes" style={{ display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}>
                    {["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"]
                      .map((item) => {
                        const isActive = isEdit ? (status === item) : (card.status === item || (!card.status && item === "Без статуса"));
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
                              fontSize: '12px',
                              transition: 'all 0.2s'
                            }}
                          >
                            <p style={{ margin: '0' }}>{item}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              
              <div className="pop-browse__wrap-calendar" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <p className="subttl" style={{ fontWeight: '600', margin: '0' }}>Даты</p>
                <Calendar selected={card.date ? new Date(card.date) : null} /> 
              </div>
            </div>

            {error && (
              <p style={{ color: '#f5222d', margin: '15px 0 5px 0', fontSize: '14px', fontWeight: '500', textAlign: 'center' }}>
                {error}
              </p>
            )}

            {!isEdit ? (
              <div className="pop-browse__btn-browse" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <div className="btn-group" style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    className="btn-browse__edit _btn-bor _hover03"
                    disabled={isSubmitting}
                    onClick={() => setIsEdit(true)}
                    style={{ padding: '10px 16px', borderRadius: '4px', border: '1px solid #565EEF', background: 'none', color: '#565EEF', cursor: 'pointer', fontWeight: '600' }}
                  >
                    Редактировать задачу
                  </button>
                  <button 
                    className="btn-browse__delete _btn-bor _hover03"
                    disabled={isSubmitting}
                    onClick={handleDelete}
                    style={{ padding: '10px 16px', borderRadius: '4px', border: '1px solid #ccc', background: 'none', color: '#666', cursor: 'pointer' }}
                  >
                    {isSubmitting ? 'Удаление...' : 'Удалить задачу'}
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01" disabled={isSubmitting} style={{ padding: '10px 24px', borderRadius: '4px', background: '#565EEF', border: 'none', cursor: 'pointer' }}>
                  <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600' }}>Закрыть</Link>
                </button>
              </div>
            ) : (
              <div className="pop-browse__btn-edit" style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '24px' }}>
                <div className="btn-group" style={{ display: 'flex', gap: '8px', width: '100%' }}>
                  <button 
                    className="btn-edit__edit _btn-bg _hover01"
                    disabled={isSubmitting}
                    onClick={handleSave}
                    style={{ padding: '10px 20px', borderRadius: '4px', background: '#565EEF', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: '600' }}
                  >
                    {isSubmitting ? 'Сохранение...' : 'Сохранить'}
                  </button>
                  <button 
                    className="btn-edit__edit _btn-bor _hover03"
                    disabled={isSubmitting}
                    onClick={() => { setIsEdit(false); setError(null); setStatus(card.status || "Без статуса"); setDescription(card.description || ''); }}
                    style={{ padding: '10px 20px', borderRadius: '4px', border: '1px solid #ccc', background: 'none', color: '#666', cursor: 'pointer' }}
                  >
                    Отменить
                  </button>
                  <button 
                    className="btn-edit__delete _btn-bor _hover03"
                    disabled={isSubmitting}
                    onClick={handleDelete}
                    style={{ padding: '10px 20px', borderRadius: '4px', border: '1px solid #f5222d', background: 'none', color: '#f5222d', cursor: 'pointer', marginLeft: 'auto' }}
                  >
                    Удалить задачу
                  </button>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
