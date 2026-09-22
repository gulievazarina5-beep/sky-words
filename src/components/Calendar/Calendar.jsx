import CalendarComponent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendar({ selected, onChange }) {
  const formatDate = (date) => {
    if (!date) return '--.--.--';
    return date.toLocaleDateString('en-US', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });
  };

  return (
    <div className="pop-new-card__calendar calendar" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="calendar__block" style={{ border: '1px solid #EFF2F6', borderRadius: '8px', padding: '12px', background: '#fff' }}>
        
        {/* Интерактивный календарь с поддержкой внешнего стейта */}
        <CalendarComponent
          onChange={onChange}
          value={selected || new Date()}
          locale="en-US"
          className="custom-react-calendar"
        />

        <div className="calendar__period" style={{ marginTop: '14px', borderTop: '1px solid #EFF2F6', paddingTop: '10px' }}>
          <p className="calendar__p date-end" style={{ margin: 0, fontSize: '14px', color: '#94A3B8', fontWeight: '500' }}>
            Due Date: <span className="date-control" style={{ color: '#565EEF', fontWeight: '600', marginLeft: '4px' }}>{formatDate(selected)}</span>
          </p>
        </div>
      </div>

      {/* Кастомные стили для интеграции react-calendar в дизайн Kanban-доски */}
      <style>{`
        .custom-react-calendar {
          width: 100% !important;
          border: none !important;
          font-family: 'Roboto', sans-serif !important;
        }
        .react-calendar__navigation button {
          color: #565EEF !important;
          font-weight: bold !important;
        }
        .react-calendar__tile--active {
          background: #565EEF !important;
          color: white !important;
          border-radius: 4px !important;
        }
        .react-calendar__tile--now {
          background: #EFF2F6 !important;
          border-radius: 4px !important;
        }
        .react-calendar__month-view__weekdays__weekday abbr {
          text-decoration: none !important;
          font-weight: 600 !important;
          color: #94A3B8 !important;
        }
      `}</style>
    </div>
  );
}
