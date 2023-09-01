import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { useState } from 'react';

const InputTypeDate = () => {
  const [date, setDate] = useState<string | Date | Date[] | null>(null);
  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
  }}>
      <label htmlFor="date">Data de nascimento:</label>
      <Calendar value={date} onChange={(e : CalendarChangeEvent) => setDate(e.value)} showIcon />
    </div>
  );
};

export default InputTypeDate;

        