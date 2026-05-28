export default function PopBrowse() {
  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Просмотр задачи</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
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
                    defaultValue="Разработать дизайн главной страницы для нового проекта..."
                  />
                </div>
              </div>
              
              <div className="pop-browse__status status">
                <p className="status__ttl subttl">Статус</p>
                <div className="status__themes">
                  <div className="status__theme _hide">
                    <p>Без статуса</p>
                  </div>
                  <div className="status__theme _gray">
                    <p className="_gray">Нужно сделать</p>
                  </div>
                  <div className="status__theme _orange _active-category">
                    <p className="_orange">В работе</p>
                  </div>
                  <div className="status__theme _hide">
                    <p>Тестирование</p>
                  </div>
                  <div className="status__theme _hide">
                    <p>Готово</p>
                  </div>
                </div>
              </div>

              <div className="pop-browse__wrap-calendar">
                <p className="subttl">Срок выполнения:</p>
                <div className="pop-browse__date">28.05.26</div>
              </div>
            </div>

            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать задачу</a></button>
                <button className="btn-browse__delete _btn-bor _hover03"><a href="#">Удалить задачу</a></button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
            </div>

            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
                <button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
                <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить задачу</a></button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
