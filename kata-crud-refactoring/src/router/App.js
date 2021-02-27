import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from '../pages/Home';
import ToDoPage from '../pages/ToDoPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todo-list" component={ToDoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;