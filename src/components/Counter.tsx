import * as React from 'react';
import {StoreState} from "../types";


// 创建类型接口
export interface IProps {
    state: StoreState,
    onIncrement: () => void,
    onDecrement: () => void
}

// 使用接口代替 PropTypes 进行类型校验
export default class Counter extends React.PureComponent<IProps> {

    public render() {
        const {state, onIncrement, onDecrement} = this.props;

        return (
            <p>
                Clicked: {state.value} times
                <br/>
                <br/>
                <button onClick={onIncrement} style={{marginRight: 20}}> +</button>
                <button onClick={onDecrement}> -</button>
            </p>
        )
    }
}

