// import FullCalendar from "./fullcalendar";
import React from 'react'
import FullCalendar from './fullcalendar';
import timeGridPlugin from '@fullcalendar/timegrid';

function Schedule() {
  // let calendar = new Calendar(calendarEl, {
  //   plugins: [ dayGridPlugin, timeGridPlugin ]
  // });
  return (
    <FullCalendar
      initialView="timeGridWeek"
      nowIndicator={true}
      editable={true}
      initialEvents={[{ title: "nice event", start: new Date() }]}
      plugins={[timeGridPlugin]}
    />
  );
}
export default Schedule;
