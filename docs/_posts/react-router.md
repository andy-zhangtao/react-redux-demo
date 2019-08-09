# 快速使用React-Router

React生态圈中使用率最高的路由组件就是React-Router，因此特意记录一下如何集成并使用React-Router。 首先安装React-Router。

```shell
yarn add react-router-dom @types/react-router-dom react-router @types/react-router
```

下面将要配置两个path:

- /home 跳转到Home这个组件
- /card 调整到Card这个组件

因此先创建这两个组件，先编写Card组件。

```typescript
// componets/Card.tsx
import * as React from 'react';

export default class Card extends React.PureComponent {
    render() {
        return (
            <p>
                This is a Card List Page
            </p>
        )
    }
}
```

只显示一句话，来表示这里是Card组件的内容。 

Home组件是从App组件修改而来。 在官方提供的React脚手架中，App是入口组件，本次修改将App作为入口路由组件使用，并经里面的内容迁移到Home组件中去。

```typescript
// Components/Home.tsx
import React from 'react';
import logo from '../assistant/logo.svg';
import './Home.css';
import CountCon from '../components/CounterCon';

const Home: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
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
                <CountCon/>
            </header>
        </div>
    );
}

export default Home;

```

现在Home和Card组件都已经准备就绪，下一步是编写Router组件。 在 `/src/router` 创建 `router.tsx` 。

```typescript
import * as React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Card from '../components/Card';
import Home from '../components/Home';

export default class RouterList extends React.PureComponent {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/card">Card</Link>
                        </li>
                    </ul>
                </div>
                <Route path="/home" component={Home}/>
                <Route path="/card" component={Card}/>
            </Router>)
    }
}
```

在 `RouterList` 中引入 `Home` 和 `Card` 两个组件，并分别用 `/home` 和 `/card` 来做指向。一个简单的Router组件就准备就绪了。 

剩下的工作就是将 `RouterList` 集成到 `App` 中了。

```typescript
// Componets/App.tsx
import React from 'react';
import RouterList from './router/router'

const App: React.FC = () => {
    return (
        <div className="App">
            <RouterList/>
        </div>
    );
}

export default App;

```

