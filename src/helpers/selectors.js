export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const filteredDay = state.days.find((dayInfo) => dayInfo.name === day);
  return filteredDay
    ? filteredDay.appointments.map((id) => state.appointments[id])
    : [];
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];
  return {
    student: interview.student,
    interviewer: interviewer,
  };
}

export function getInterviewersForDay(state, day) {
  //... returns an array of appointments for that day
  const filteredDay = state.days.find((dayInfo) => dayInfo.name === day);
  return filteredDay
    ? filteredDay.interviewers.map((id) => state.interviewers[id])
    : [];
}
