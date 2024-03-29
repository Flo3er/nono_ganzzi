import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './pages/main/HomePage';
import Sample from './pages/pageSample/SamplePage';
import Toolkit from './pages/toolkit/Toolkitpage'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/sample" component={Sample} />
          <Route path="/toolkit" component={Toolkit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
