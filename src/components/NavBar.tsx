import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from "../routes/About";
import Contact from "../routes/Contact";
import Home from "../routes/Home";
import "./NavBar.css"
import styled from "@emotion/styled";

const Nav = styled.nav`
    background-color: yellow;
`;
const Item = styled.li`
  margin-left: 300px;
`;


export default function App() {
    return (
        <Router>
            <div>
                <Nav>
                    <ul>
                        <Item>
                            <Link to="/">Home </Link>
                        </Item>
                        <Item>
                            <Link to="/about">Sobre mi</Link>
                        </Item>
                        <Item>
                            <Link to="/contact">Contacto</Link>
                        </Item>
                    </ul>
                </Nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}