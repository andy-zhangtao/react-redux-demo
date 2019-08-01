import {ModifyAction} from '../actions';
import {DECREMENT, INCREMENT} from '../constants';
import {StoreState} from "../types";

// 处理并返回 state
export default (state: StoreState = {value: 0}, action: ModifyAction): StoreState => {
    switch (action.type) {
        case INCREMENT:
            return {
                value: state.value + 1
            }
        case DECREMENT:
            return {
                value: state.value - 1
            }
        default:
            return state
    }
}
