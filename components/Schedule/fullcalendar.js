// import dynamic from "next/dynamic";
// import React, { useEffect, useState } from "react";

// let CalendarComponent;

// function FullCalendar(props) {
//   const [calendarLoaded, setCalendarLoaded] = useState(false);

//   useEffect(() => {
//     CalendarComponent = dynamic({
//       modules: () => ({
//         calendar: import("@fullcalendar/react"),
//         dayGridPlugin: import("@fullcalendar/daygrid"),
//         timeGridPlugin: import("@fullcalendar/timegrid"),
//       }),
//       render: (props, { calendar: Calendar, ...plugins }) => (
//         <Calendar
//           {...props}
//           plugins={Object.values(plugins)}
//           ref={props.myRef}
//         />
//       ),
//       ssr: false,
//     });
//     setCalendarLoaded(true);
//   });

//   let showCalendar = (props) => {
//     if (!calendarLoaded) return <div>Loading ...</div>;
//     return <CalendarComponent {...props} />;
//   };
//   return <div>{showCalendar(props)}</div>;
// }

// export default FullCalendar;
