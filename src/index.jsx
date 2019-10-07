import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './header/Header'
import Home from './pages/home/Home';
import Submit from './pages/submit/Submit';
import Footer from './footer/Footer';
import './index.css';

var routing = (
    <Router>
        <div>
            <Route path="/home" component={Home} />
            <Route path="/submit" component={Submit}/>
        </div>
    </Router>
)

class Root extends Component {
    render() {
        return (
        <div>
            <Header/>
            <div id="welcome-page" className="row">
                <h1 id="welcome-header"> Introduction to Starcraft 2</h1>
            </div>
            <div>
                {routing}
            </div>
            <Footer/>
        </div> 
        )       
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));