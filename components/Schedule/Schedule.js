import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import Client from "../../services/Client";
import { useAuth } from "../../contexts/auth";

function Schedule() {
  const { user } = useAuth();
  const eventCalendar = [
    { title: "", startTime: "", endTime: "", duration: "" },
  ];
  // const calendar = useRef(null);

  //console.log('L17', start, end);
  // console.log('calendar', calendar);
  // if (!user) return <></>;
 // console.log("l15", user.id);
  // const res = Client(`trainer?userId=${user.id} `, "GET").then((res) => {
  //  // console.log("l14", res);
  //    return Client(`trainer/${res.data.id}/lessons?startTime=${start}&endTime=${end}`, 'GET').then((res2) => {
  //     return res2.data.map((item) => {
  //       return {title : item.name, startTime : item.startTime, duration: item.duration}
  //     })
  //   })
  // }).catch((error)=>{
  //  // console.log('L24', error.response.data);
  //   return error.response.data;
  // });
 // console.log("l21", res);
  // const handleDateClick = (arg) => { // bind with an arrow function
  //   alert(arg.dateStr)
  // }
  return (
    <FullCalendar
      plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin]}
      initialView="dayGridWeek"
      nowIndicator={true}
      editable={true}
      initialEvents={[{ title: "nice event", start: new Date() }]}
      // dateClick={handleDateClick}
    />
  );
}

export default Schedule;
