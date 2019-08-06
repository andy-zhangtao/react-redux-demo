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
                {/*<IndexRoute component={Card}/>*/}
                <Route path="/home" component={Home}/>
                <Route path="/card" component={Card}/>
            </Router>)
    }
}