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
