import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from "antd";
import zh_CN from "antd/es/locale-provider/zh_CN";

import './index.css';
import App from './layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={zh_CN}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
