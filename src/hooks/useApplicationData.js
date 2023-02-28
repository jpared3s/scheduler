import { useState, useEffect } from "react";
import axios from 'axios';


export default function useApplicationData () {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers:all[2].data}));
    })
  }, []);


  const setDay = day => setState({ ...state, day });

  function updateSpots(state, appointments) {
    const days = state.days.map((day) => ({
      ...day,
      spots: 0,
    }));

    days.forEach((day) => {
      let count = 0;
      for (const id of day.appointments) {
        if (!appointments[id].interview) {
          count++;
        }
      }
      day.spots = count;
    });

    return days;
  }

  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`, {
      interview: interview
    })
    .then(response => {
      //add spots logic(decrease)
      setState({
        ...state,
        appointments,
        days: updateSpots(state, appointments)
      });
    })
  }
  
  function cancelInterview (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`)
    .then(response => {
      setState({
        ...state,
        appointments,
        days: updateSpots(state, appointments)
      });
    })
  }
  return { state, setDay, bookInterview, cancelInterview };
}
