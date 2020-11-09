import React from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'


export default function Schedule(){
  return (
    <FullCalendar
      plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin ]}
      initialView="dayGridMonth"
      nowIndicator={true}
      editable={true}
      initialEvents={[{ title: "nice event", start: new Date() }]}
    />
  );
}