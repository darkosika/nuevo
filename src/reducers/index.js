import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import LibraryReducer from './reducer_libraries';
const rootReducer = combineReducers({
 library:LibraryReducer,
 form:formReducer
});

export default rootReducer;
