import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Frame from './components/frame/frame';
import Weather from './components/weather/weather';
import Condi from './components/condi/condi';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './router.css'

function AppRouter() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Router>
                    <Nav className="mr-auto" >
                        <Nav.Link>
                            <Link to="/colorchanger/" className="navstyle">Color and shape changer app</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/people/" className="navstyle">People app</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/condi/" className="navstyle">Conditionals app</Link>
                        </Nav.Link>
                    </Nav>
                    <div className="routerstyle">
                        <Route path="/colorchanger/" component={Frame} />
                        <Route path="/people/" component={Weather} />
                        <Route path="/condi/" component={Condi} />
                    </div>
                </Router>
            </Navbar>
        </div>
    );
}

export default AppRouter;
