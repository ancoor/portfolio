import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import {Redirect, Route, Switch, useLocation} from 'react-router'
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import About from './components/about/About.jsx';
import { AnimatePresence } from 'framer-motion'
import  {useStateContext} from './contexts/ContextProvider';
function App() {

  const location = useLocation();
  const { loader } = useStateContext();
  return (
    <>
        {loader}
        <div className="App">
          <div className="container app__container">
            <div className="row app__row">
              <div className="col-lg-3">
                  <Sidebar />
              </div>
              <div className="col-lg-9 app__main-content">
                <Navbar />
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.key}>
                    <Route exact path="/resume">
                      <Resume />
                    </Route>
                    <Route exact path="/projects">
                      <Projects />
                    </Route>
                    <Route exact path="/">
                      <About />
                    </Route>
                    <Route>
                      <Redirect to="/" />
                    </Route>
                  </Switch>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
    </>

  );
}

export default App;
