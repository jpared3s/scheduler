import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";



const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING"
const CONFIRM = "CONFIRM"
const DELETING= "DELETING"

//In the Appointment component, add a delete function that takes an id parameter and uses the props.cancelInterview function to update the state by setting the interview property of the corresponding appointment object to null.

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  function onAdd() {
    transition(CREATE);
  }

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
    .then (() => {
      transition(SHOW);
    })
    console.log('appointment ID:', props.id, 'interview:', interview);
  }

function onDelete() {
  transition(DELETING)
  props.cancelInterview(props.id)
  .then(() => {
    transition(EMPTY)
  })
}


  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && (
        <Empty onAdd={onAdd} />
      )}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
        />
      )}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      )}
       {mode === SAVING && (
        <Status
          message= "Saving..."
        />
      )}
      {mode === DELETING && (
        <Status
        message= "Deleting.."
        />
      )}
       {mode === CONFIRM && (
        <Confirm
        onCancel={() => back()}
        onConfirm={onDelete}
        />
      )}
    </article>
  );
}