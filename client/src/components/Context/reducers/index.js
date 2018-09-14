import { combineReducers } from 'redux';
import reportReducer from './reportReducer';
import utilisationReducer from './utilisationReducer';

export default combineReducers({
    report: reportReducer,
    utilisation: utilisationReducer
});