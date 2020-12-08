//this file imports react and all the files which were exported in components folder
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Content } from './components/content';

//These imports, import all the necessary files to display navbar which is coded below
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

//These imports, import all the necessary files for lab3
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';
import { Edit } from './components/edit';

    class App extends React.Component {
        render(){
        return (
            <Router>
                <div className="App">

                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="/">Navbar</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/read">Read</Nav.Link>
                            <Nav.Link href="/create">Create</Nav.Link>
                        </Nav>
                    </Navbar>

                    <Switch>
                        <Route path='/' component={Content} exact></Route>
                        <Route path='/read' component={Read}></Route>
                        <Route path='/create' component={Create}></Route>
                        <Route path='/edit/:id' component={Edit} exact />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;