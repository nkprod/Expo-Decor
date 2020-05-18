import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  const HatsPage = () => (
    <div>
      <h1>Hats Listings Page</h1>
    </div>
  );

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop/hats' component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
