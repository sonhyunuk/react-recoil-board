import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import CreatePage from './container/CreatePage';
import ListPage from './container/ListPage';
import UpdatePage from './container/UpdatePage';
import ReadPage from './container/ReadPage';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListPage}></Route>
        <Route exact path="/board/create" component={CreatePage}></Route>
        <Route exact path="/board/update" component={UpdatePage}></Route>
        <Route exact path="/board/read" component={ReadPage}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
