import { useParams, Link, useNavigate } from 'react-router-dom'; 
import { useContext, useState } from 'react';
import Calendar from '../Calendar/Calendar'; 
import { TaskContext } from '../../contexts/TaskContext';
import { AuthContext } from '../../contexts/AuthContext';

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
      setError(err.message || 'Ошибка сервера при удалении задачи. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError(null);

    if (!description.trim()) {
      setError('Описание задачи не может быть пустым или состоять из пробелов');
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
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{card.title}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{card.topic}</p>
              </div>
            </div>
            
            <div className="pop-browse__wrap">
              <div className="pop-browse__form form-browse">
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                  <textarea 
                    className="form-browse__area" 
                    name="text" 
                    id="textArea01" 
                    readOnly={!isEdit || isSubmitting} 
                    placeholder="Описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ backgroundColor: isEdit ? '#fff' : '#f4f5f7', border: isEdit ? '1px solid #565EEF' : '1px solid #ccc' }}
                  />
                </div>
              </div>
              
              <div className="pop-browse__status status">
                <p className="status__ttl subttl">Статус</p>
                <div className="status__themes">
                  {["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"].map((item) => {
                    const isActive = isEdit ? (status === item) : (card.status === item);
                    return (
                      <div 
                        key={item}
                        className={`status__theme ${isActive ? "_active-category" : "_gray"}`}
                        onClick={() => isEdit && !isSubmitting && setStatus(item)}
                        style={{ cursor: isEdit ? 'pointer' : 'default', opacity: (!isEdit && !isActive) ? 0.6 : 1 }}
                      >
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pop-browse__wrap-calendar">
                <p className="subttl">Срок выполнения:</p>
                <Calendar selected={card.date ? new Date(card.date) : null} /> 
              </div>
            </div>

            {error && (
              <p style={{ color: '#f5222d', margin: '15px 0 5px 0', fontSize: '14px', fontWeight: '500', textAlign: 'center' }}>
                {error}
              </p>
            )}

            {!isEdit ? (
              <div className="pop-browse__btn-browse">
                <div className="btn-group">
                  <button 
                    className="btn-browse__edit _btn-bor _hover03"
                    disabled={isSubmitting}
                    onClick={() => setIsEdit(true)}
                  >
                    Редактировать задачу
                  </button>
                  <button 
                    className="btn-browse__delete _btn-bor _hover03"
                    disabled={isSubmitting}
                    onClick={handleDelete}
                  >
                    {isSubmitting ? 'Удаление...' : 'Удалить задачу'}
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01" disabled={isSubmitting}>
                  <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Закрыть</Link>
                </button>
              </div>
            ) : (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button 
                    className="btn-edit__edit _btn-bg _hover01"
                    disabled={isSubmitting}
                    onClick={handleSave}
                    style={{ background: '#565EEF', color: '#fff' }}
                  >
                    {isSubmitting ? 'Сохранение...' : 'Сохранить'}
                  </button>
                  <button 
                    className="btn-edit__edit _btn-bor _hover03"
                    disabled={isSubmitting}
                    onClick={() => { setIsEdit(false); setError(null); setStatus(card.status || "Без статуса"); setDescription(card.description || ''); }}
                  >
                    Отменить
                  </button>
                  <button 
                    className="btn-edit__delete _btn-bor _hover03"
                    disabled={isSubmitting}
                    onClick={handleDelete}
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
