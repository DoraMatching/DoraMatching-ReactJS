import React from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import Client from "../../services/Client";
import { useAuth } from "../../contexts/auth";
import { Component } from "react";

function DemoSchedule() {
  const { user } = useAuth();
  if (!user) return <></>;
  return (
    <Schedule user={user}/>
  );
}

class Schedule extends Component {
  constructor(props){
    super(props);
    this.state ={
      eventCalendar : [
        {
          title:'',
          duration: '',
          start: ''
        }
      ],
    }
    this.calendar = React.createRef();;
    this.setCalendarRef = (element) => {
      this.calendar = element;
    }
  }
  componentDidMount() {
    const start = this.calendar.current._calendarApi.view.activeStart
    const end = this.calendar.current._calendarApi.view.activeEnd
    const {user} = this.props;
    const res = Client(`trainer?userId=${user.id} `, "GET").then((res) => {
        const dat = Client(`trainer/${res.data.id}/lessons?startTime=${start}&endTime=${end}`, 'GET').then((res2) => {
          console.log("l14", res2);
         return res2.data.map((item) => {
           return {title : item.name, start : item.startTime, duration: item.duration}
         })
       })
       console.log("l45", dat);
       return dat;
     }).catch((error)=>{
      // console.log('L24', error.response.data);
       return error.response.data;
     });
      console.log("l49", res);
     // const handleDateClick = (arg) => { // bind with an arrow function
     //   alert(arg.dateStr)
     // }
     res.then(result => this.setState({eventCalendar : result}))

    console.log('L63', start, end);
}

  render(){
    console.log("l64", this.state.eventCalendar);
    return (
      <>
        <FullCalendar
          plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin]}
          initialView="timeGridWeek"
          nowIndicator={true}
          editable={true}
          events={this.state.eventCalendar}
          ref={this.calendar}
          // dateClick={handleDateClick}
        />
        {console.log("l72", this.calendar.current)}
      </>
    );
  }
}

export default DemoSchedule;
