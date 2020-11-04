import FullCalendar from "./fullcalendar";
import React from "react";
import timeGridPlugin from "@fullcalendar/timegrid";


function Schedule() {
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridWeek"
      nowIndicator={true}
      editable={true}
      initialEvents={[{ title: "nice event", start: new Date() }]}
    />
  );
}
export default Schedule;
