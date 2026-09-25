import CalendarComponent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendar({ selected, onChange }) {
  const formatDate = (date) => {
    if (!date) return '--.--.--';
    return date.toLocaleDateString('ru-RU', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });
  };

  return (
    <div className="pop-new-card__calendar calendar" style={{ fontFamily: 'Roboto, sans-serif', width: '100%', maxWidth: '340px', minWidth: '300px', boxSizing: 'border-box' }}>
      <p style={{ fontSize: '14px', fontWeight: '600', color: '#000000', marginBottom: '14px', margin: '0 0 14px 0' }}>Даты</p>
      <div className="calendar__block" style={{ border: '1px solid #EFF2F6', borderRadius: '8px', padding: '12px', background: '#fff', width: '100%', boxSizing: 'border-box' }}>
        
        <CalendarComponent
          onChange={onChange}
          value={selected || new Date()}
          locale="ru-RU"
          className="custom-react-calendar"
        />

        <div className="calendar__period" style={{ marginTop: '14px', borderTop: '1px solid #EFF2F6', paddingTop: '10px' }}>
          <p className="calendar__p date-end" style={{ margin: 0, fontSize: '14px', color: '#94A3B8', fontWeight: '500' }}>
            Срок исполнения: <span className="date-control" style={{ color: '#565EEF', fontWeight: '600', marginLeft: '4px' }}>{formatDate(selected)}</span>
          </p>
        </div>
      </div>

      <style>{`
        .custom-react-calendar {
          width: 100% !important;
          border: none !important;
          font-family: 'Roboto', sans-serif !important;
          background: #fff !important;
        }
        .react-calendar__navigation {
          display: flex !important;
          margin-bottom: 10px !important;
          height: 35px !important;
        }
        .react-calendar__navigation button {
          color: #565EEF !important;
          font-weight: 700 !important;
          font-size: 14px !important;
          min-width: 35px !important;
          background: none !important;
          border: none !important;
          cursor: pointer !important;
        }
        .react-calendar__navigation button:enabled:hover {
          background-color: #f4f5f7 !important;
          border-radius: 4px !important;
        }
        .react-calendar__month-view__weekdays {
          display: flex !important;
          text-transform: uppercase !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          padding-bottom: 8px !important;
        }
        .react-calendar__month-view__weekdays__weekday {
          flex: 1 !important;
          padding: 4px 0 !important;
          text-align: center !important;
        }
        .react-calendar__month-view__weekdays__weekday abbr {
          text-decoration: none !important;
          color: #94A3B8 !important;
          border: none !important;
        }
        .react-calendar__month-view__days {
          display: grid !important;
          grid-template-columns: repeat(7, 1fr) !important;
          gap: 4px !important;
        }
        .react-calendar__tile {
          max-width: none !important;
          height: 36px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 12px !important;
          font-weight: 500 !important;
          color: #202020 !important;
          background: none !important;
          border: none !important;
          padding: 0 !important;
          cursor: pointer !important;
        }
        .react-calendar__tile:enabled:hover {
          background-color: #EFF2F6 !important;
          border-radius: 4px !important;
        }
        .react-calendar__tile--now {
          background: #EFF2F6 !important;
          color: #565EEF !important;
          border-radius: 4px !important;
          font-weight: 700 !important;
        }
        .react-calendar__tile--active {
          background: #565EEF !important;
          color: white !important;
          border-radius: 4px !important;
          font-weight: 700 !important;
        }
        .react-calendar__month-view__days__day--neighboringMonth {
          color: #94A3B8 !important;
          opacity: 0.5 !important;
        }
      `}</style>
    </div>
  );
}
