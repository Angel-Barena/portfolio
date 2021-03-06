//import './icons/ab-logo.svg';
//import './icons/bootstrap.svg';
/*SCSS*/
import './scss/main.scss';
/*React*/
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
//react router dom
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//font awesome icons
import { library, /*dom*/ } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faCodepen, 
    faHtml5, faReact, faCss3Alt, faSass, faJs, faNodeJs, faGit} from '@fortawesome/free-brands-svg-icons';
import {faPhoneSquare, faEnvelopeSquare, faCog, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
library.add(
    faLinkedin, faGithub, faCodepen, 
    faPhoneSquare, faEnvelopeSquare, 
    faCog, faExternalLinkAlt,
    faHtml5, faReact, faCss3Alt, faSass, faJs ,faNodeJs, faGit);

const NotFound = ({location})=>{
    return (
        <main className="not-found">
            <h1 className="not-found__title">404! Not Found... {`¯\\_(ツ)_/¯`}</h1>
            <h3 className="not-found__subtitle">No match for <code>{location.pathname}</code></h3>      
        </main>
    );
};

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            // subRoute: '/portfolio',
            navListItems: [
                {
                    name: 'about',
                    href: '/about'
                },
                {
                    name: 'projects',
                    href: '/projects'
                },
                {
                    name: 'contact',
                    href: '/contact'
                }
            ]
        }
    }
    render(){
        const props = this.state;
        return(
            <Router>
                <div className="container">
                    <NavBar {...props}/>
                    <Switch>
                        {/* <Redirect exact from='/' to={`/`}/> */}
                        <Route exact path={`/`} component={Home}/>
                        <Route path={`/about`} component={About}/>
                        <Route path={`/projects`} component={Projects}/>
                        <Route path={`/contact`} component={Contact}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);