import "./App.css";
import "./Calendar.css";

function Calendar() {
  return (
    <section className="calendar-section">
      <h1>My Calendar</h1>

      <div className="calendar-grid">
        <div className="day completed">1</div>
        <div className="day completed">2</div>
        <div className="day missed">3</div>
      </div>
    </section>
  );
}

export default Calendar;