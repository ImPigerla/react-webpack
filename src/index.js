import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app.js';

// 全局样式
import './style/index.scss'

ReactDOM.render(<App/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
