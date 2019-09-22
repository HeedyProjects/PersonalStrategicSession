const START_SESSION = 'YouCanDoIt/sessions/START_SESSION';
const NEXT_PHASE = 'YouCanDoIt/sessions/NEXT_PHASE';

export const SESSION_MODE = {
  problem: 0,
  goal: 1,
  phase: 0,
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
    case NEXT_PHASE:
      return {
        ...state,
        phase: action.props.phase,
      };
    default:
      return state;
  }
}

export const startSession = sessionMode => ({
  type: START_SESSION,
  props: {sessionMode},
});

export const goToNextPhase = phase => ({
  type: START_SESSION,
  props: {phase},
});
