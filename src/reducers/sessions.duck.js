const START_SESSION = 'YouCanDoIt/sessions/START_SESSION';

export const SESSION_MODE = {
  problem: 0,
  goal: 1,
};

const defaultState = {
  sessionMode: SESSION_MODE.problem,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case START_SESSION:
      return {
        ...state,
        sessionMode: action.props.sessionMode,
      };
    default:
      return state;
  }
}

export const startSession = sessionMode => ({
  type: START_SESSION,
  props: {sessionMode},
});
