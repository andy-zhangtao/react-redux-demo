# 使用React-Redux的七个步骤

从后端转前端不久，尤其入手React更是最近才开始的事情。 前端很多事情都搞不清楚，为了能快速入手，根据踩得坑总结了使用React-Redux的七个步骤，方便以后使用和学习。

<a name="3kfuA"></a>
### 1. 定义State
这是所有事情的起点，先定义一个好的state。很多demo，都将state设置为一个单变量。从实用性上来说，state肯定是一个Object，因此直接将state定义为Object.

```typescript
// types/index.ts
export type StoreState = {value:number};
```

<a name="LJBmb"></a>
### 2. 定义Action
根据Redux的单向数据流定义，所有数据的变化都是从Action触发开始的。因此当State定义完成后，就需要定义Action。

```typescript
// actions/index.ts
import {DECREMENT, INCREMENT} from "../constants";

export interface IINCREMENTAction {
    type: INCREMENT;
}

export interface IDECREMENTAction {
    type: DECREMENT;
}

// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type ModifyAction = IINCREMENTAction | IDECREMENTAction;


// 增加 state 次数的方法
export const increment = (): IINCREMENTAction => ({
    type: INCREMENT,
})

// 减少 state 次数的方法
export const decrement = (): IDECREMENTAction => ({
    type: DECREMENT
})

```

<a name="V9EVS"></a>
### 3. 定义Compent
Compent会通过触发Action来引起State的变化，从而引起页面的渲染。因此此刻可以定义组件了.

```typescript
// components/Counter.tx
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
        const { state, onIncrement, onDecrement } = this.props;

        return (
            <p>
                Clicked: { state.value } times
                <br />
                <br />
                <button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </button>
                <button onClick={ onDecrement }> - </button>
            </p>
        )
    }
}
```

<a name="viz17"></a>
### 4. 创建Connect组件
Component是通过Props中的数据来获取state和action的。 因此需要创建一个将state和props交互打通的组件，也就是Connect组件。 <br />重点是定义 `mapStateToProps` 和 `mapDispatchToProps` 这两个函数。 

`mapStateToProps` 是用来将State映射到Props的函数，可以对State进行二次处理，但我这里没有对State进行了透传。

`mapDispatchToProps` 是用来将Action映射到Props的函数。 在Component中在对应的组件中挂载Action，就可以进行Action触发了。 

```typescript
// components/CounterConn.ts
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { decrement, increment } from '../actions';
import Counter from '../components/Counter';
import { StoreState } from '../types';


// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state:StoreState) => {
    return {
        state:{
            value:state.value
        }
    }
}

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
})

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

```

<a name="RaRWG"></a>
### 5. 定义Reducer函数

Reducer是用来计算和更新State的函数，需要注意一定要是纯函数。 

```typescript
// reducers/index.ts

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

```

<a name="HRG5P"></a>
### 6. 挂载Component

此时就是正常使用封装好的Connet后的组件，例如在下面的app.ts

```typescript
import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountCon from './components/CounterCon';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://juejin.im/post/5c81d10b5188257ee7275222
        </a>
        <CountCon  />
      </header>
    </div>
  );
}

export default App;

```

<a name="KT9Rt"></a>
### 7. 注入State和Reducer
最后一步，在Index.ts中注入唯一的State和Reducer.

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import './index.css';
import reducer from './reducers';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();

```


