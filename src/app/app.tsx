import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App(): ReactElement {
  return (
    <Router>
      <div className="bg-black">
        {/* <Header></Header> */}

        <Switch>
          {/* <Route path="/" exact component={PageHome} /> */}
          {/* <Route path="/product" exact component={PageProduct} /> */}
        </Switch>
      </div>
    </Router>
  );
}
