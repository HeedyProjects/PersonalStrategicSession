import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {store} from './store';
import Setup from './Setup';
import {sendAnalyticEvent} from './services/Analytics';
import {ANALYTIC_EVENT} from './services/Analytics/const';

class App extends Component {
  async componentDidMount() {
    sendAnalyticEvent(ANALYTIC_EVENT.launchApp);
  }

  render() {
    return (
      <Provider store={store}>
        <Setup />
      </Provider>
    );
  }
}

export default App;
