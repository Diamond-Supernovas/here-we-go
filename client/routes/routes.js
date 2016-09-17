// REACTJS ROUTER CONFIGURATION ===============================================
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// APP PAGE <== ENTRY POINT TO APPLICATION
import App from './../components/App.js';

// SPLASH PAGE
import Splash from './../components/Splash.js';

// DASHBOARD PAGE
import Dashboard from './../components/Dashboard.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Splash} />
    <Route path="dashboard" component={Dashboard}>
      <NavigationBar />
    </Route>
  </Route>
);