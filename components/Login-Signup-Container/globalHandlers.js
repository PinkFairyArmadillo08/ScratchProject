/************************GLOBAL HANDLER FUNCTION****************************************/

  //saving the inputs values to be associated states properties to be invoked 'onChange'
  //@Params {event} - event   :input bar event
  //@Params {object} - state  :the state object in which the input bar will update
  //@Params {function} - setState : setter function of state
 export const saveBar = (state, setState) => {
    return (event) =>
      setState(
        Object.assign({}, state, { [event.target.id]: event.target.value })
      );
  }


