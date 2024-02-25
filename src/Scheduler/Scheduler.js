import React, { Component } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

import "./Scheduler.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class Scheduler extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
      },
    ],
  };

  render() {
    return (
      <div className="mx-auto text-center h-full py-28">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView={Views.DAY}
          events={this.state.events}
          style={{ height: "50vh" }}
          step={30}
        />
      </div>
    );
  }
}

export default Scheduler;
