import {combineReducers} from 'redux';
import language from './language.duck';
import sessions from './sessions.duck';

const rootReducer = combineReducers({
  language,
  sessions,
});

export default rootReducer;
