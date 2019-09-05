import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app.js';
import {Router} from 'react-router'
import {createBrowserHistory} from 'history'
import routes from 'src/router'

// 全局样式
import './style/index.scss'

const history = createBrowserHistory()

ReactDOM.render(<Router routes={routes} history={history}/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
