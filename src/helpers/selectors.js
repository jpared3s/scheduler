export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const filteredDay = state.days.find(dayInfo => dayInfo.name === day);
  return filteredDay ? filteredDay.appointments.map(id => state.appointments[id]) : [];
}
