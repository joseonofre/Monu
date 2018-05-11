import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Base from './Base';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render((
    <BrowserRouter>
        <Base />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
