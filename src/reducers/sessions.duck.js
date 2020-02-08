const USER_AUTH = 'YouCanDoIt/sessions/USER_AUTH';
const START_SESSION = 'YouCanDoIt/sessions/START_SESSION';
const NEXT_PHASE = 'YouCanDoIt/sessions/NEXT_PHASE';
const ANSWER_SENDED = 'YouCanDoIt/sessions/ANSWER_SENDED';

export const SESSION_MODE = {
  problem: 0,
  goal: 1,
  list: 1,
};

const defaultState = {
  sessionMode: SESSION_MODE.problem,
  phase: 0,
  uid: null,
  answers: {
    0: [],
    1: [],
    2: [],
  },
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case USER_AUTH:
      return {
        ...state,
        uid: action.props.uid,
      };
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
    case ANSWER_SENDED:
      return {
        ...state,
        answers: updatedAnswer(action.props, state.answers),
      };
    default:
      return state;
  }
}

const updatedAnswer = (props, answers) => {
  debugger;
  answers[props.phase][props.step] = props.answer;
  return answers;
};

export const userAuth = uid => ({
  type: USER_AUTH,
  props: {uid},
});

export const startSession = sessionMode => ({
  type: START_SESSION,
  props: {sessionMode},
});

export const goToNextPhase = phase => ({
  type: NEXT_PHASE,
  props: {phase},
});

export const saveAnswer = (phase, step, answer) => ({
  type: ANSWER_SENDED,
  props: {phase, step, answer},
});
