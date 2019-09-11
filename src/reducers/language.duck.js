const SET_LANGUAGE = 'YouCanDoIt/language/SET_LANGUAGE';

const defaultState = {
  currentLanguage: 'en',
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.props.language,
      };
    default:
      return state;
  }
}

export const setLanguage = language => ({
  type: SET_LANGUAGE,
  props: {language},
});
