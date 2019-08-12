import * as React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CardCon from "../components/CardCon";
import Home from '../components/Home';
import Drawer from '../components/Drawers';

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
                        <li>
                            <Link to="/drawer">Drawer</Link>
                        </li>
                    </ul>
                </div>
                <Route path="/home" component={Home}/>
                <Route path="/card" component={CardCon}/>
                <Route path="/drawer" component={Drawer}/>
            </Router>)
    }
}