import { combineReducers } from 'redux';
import ValueReducer from './reducer_value';
import CountReducer from './reducer_count';

const rootReducer = combineReducers({
    value: ValueReducer,
    count: CountReducer
});

export default rootReducer;
