import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/home/Home';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

ReactDOM.render(<Home/>, document.getElementById('root'));
serviceWorker.unregister();
