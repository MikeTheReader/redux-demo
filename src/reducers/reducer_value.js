import { CHANGE_VALUE } from '../actions/index';

export default function(state = null, action) {
    switch(action.type) {
        case CHANGE_VALUE:
            return action.value;
        default:
            return state;
    }
}
