import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { AboutPage } from './Pages/AboutPage';
import { TodosPage } from './Pages/TodosPage';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
