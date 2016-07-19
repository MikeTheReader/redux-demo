import { CHANGE_COUNT } from '../actions/index';

export default function(state = 0, action) {
    switch(action.type) {
        case CHANGE_COUNT:
            return action.value;
        default:
            return state;
    }
}
