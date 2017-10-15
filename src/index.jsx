import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Main from './components/Main';

import 'normalize.css';

require('./styles/global.scss');


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Main);

if (module.hot) {
  module.hot.accept('./components/Main', () => {
    render(Main);
  });
}

