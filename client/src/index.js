import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EventsManager from './components/EventsManager';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<EventsManager />, document.getElementById('root'));
registerServiceWorker();
