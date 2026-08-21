import { useParams, Link } from 'react-router-dom'; 
import { useContext } from 'react';
import Calendar from '../Calendar/Calendar'; 
import { TaskContext } from '../../contexts/TaskContext';

export default function PopBrowse() {
  const { id } = useParams(); 
  const { cards } = useContext(TaskContext);

  const card = cards.find((c) => c._id === id);

  if (!card) {
    return (
      <div className="pop-browse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <p>Задача не найдена</p>
            <Link to="/">Закрыть</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{card.title}</h3>
              <p style={{ color: '#94A6BE', fontSize: '14px', margin: '5px 0' }}>
                ID карточки: <strong>{id}</strong>
              </p>
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
                    readOnly 
                    placeholder="Описание задачи..."
                    value={card.description || ''}
                  />
                </div>
              </div>
              
              <div className="pop-browse__status status">
                <p className="status__ttl subttl">Статус</p>
                <div className="status__themes">
                  <div className={`status__theme ${card.status === "Без статуса" ? "_active-category" : "_hide"}`}>
                    <p>Без статуса</p>
                  </div>
                  <div className={`status__theme ${card.status === "Нужно сделать" ? "_active-category" : "_gray"}`}>
                    <p>Нужно сделать</p>
                  </div>
                  <div className={`status__theme ${card.status === "В работе" ? "_active-category" : "_hide"}`}>
                    <p>В работе</p>
                  </div>
                  <div className={`status__theme ${card.status === "Тестирование" ? "_active-category" : "_hide"}`}>
                    <p>Тестирование</p>
                  </div>
                  <div className={`status__theme ${card.status === "Готово" ? "_active-category" : "_hide"}`}>
                    <p>Готово</p>
                  </div>
                </div>
              </div>

              <div className="pop-browse__wrap-calendar">
                <p className="subttl">Срок выполнения:</p>
                <Calendar selected={card.date ? new Date(card.date) : null} /> 
              </div>
            </div>

            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">Редактировать задачу</button>
                <button className="btn-browse__delete _btn-bor _hover03">Удалить задачу</button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Закрыть</Link>
              </button>
            </div>

            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">Сохранить</button>
                <button className="btn-edit__edit _btn-bor _hover03">Отменить</button>
                <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete">Удалить задачу</button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Закрыть</Link>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
