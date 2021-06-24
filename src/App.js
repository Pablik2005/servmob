import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Logo from './components/logo';
import Bar from './components/bar';
import Footer from './components/footer';

import AboutUs from './components/aboutUs';
import NewTask from './components/newTask';
import ITCare from './components/itCare';
import Contact from './components/contact';
import Login from './components/login';
import Registration from './components/registration';



function App() {
  return (
    <Router>
      <div className="App">
          <Logo />
          <Bar />
          <div className="Content" style={{padding:"30px"}}>
            <Switch>
              <Route exact path="/">
                <AboutUs />
              </Route>
              <Route exact path="/NewTask">
                <NewTask />
              </Route>
              <Route exact path="/ITCare">
                <ITCare />
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Route exact path="/logReg">
                <Login />
                <Registration />
              </Route>
            </Switch>
          </div>
          
      </div>
    </Router>
  );
}

export default App;
