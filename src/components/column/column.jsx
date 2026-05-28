import Card from "../Card/Card";

export default function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {/* Колонка: Без статуса */}
        {title === "Без статуса" && (
          <>
            <Card title="Название задачи" theme="Web Design" color="_orange" />
            <Card title="Название задачи" theme="Research" color="_green" />
            <Card title="Название задачи" theme="Web Design" color="_orange" />
            <Card title="Название задачи" theme="Copywriting" color="_purple" />
            <Card title="Название задачи" theme="Research" color="_green" />
          </>
        )}

        {/* Колонка: Нужно сделать */}
        {title === "Нужно сделать" && (
          <Card title="Название задачи" theme="Research" color="_green" />
        )}

        {/* Колонка: В работе (ИСПРАВЛЕНО: Теперь 3 карточки) */}
        {title === "В работе" && (
          <>
            <Card title="Название задачи" theme="Research" color="_green" />
            <Card title="Название задачи" theme="Copywriting" color="_purple" />
            <Card title="Название задачи" theme="Web Design" color="_orange" />
          </>
        )}

        {/* Колонка: Тестирование */}
        {title === "Тестирование" && (
          <Card title="Название задачи" theme="Research" color="_green" />
        )}

                {/* Колонка: Готово */}
        {title === "Готово" && (
          <Card title="Название задачи" theme="Research" color="_green" isDone={true} />
        )}
      </div>
    </div>
  );
}
