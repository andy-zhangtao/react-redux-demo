import {ModifyAction} from '../actions';
import {DECREMENT, INCREMENT} from '../constants';
import defaultStore, {StoreState,} from "../types";
import axios from 'axios';

// 处理并返回 state
export default (state: StoreState = defaultStore, action: ModifyAction): StoreState => {

    switch (action.type) {
        case INCREMENT:
            axios.get('http://devex.yqxiu.cn').then(
                res => {
                    console.log(res)
                }
            )

            return {
                value: state.value + 1,
                idx: state.idx + state.value + 1
            }

        case DECREMENT:

            return {
                value: state.value - 1,
                idx: state.idx + state.value-1
            }
        default:
            return state
    }
}
