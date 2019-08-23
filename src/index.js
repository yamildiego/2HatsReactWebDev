import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './assets/fonts/fonts.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faSearch, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner, faSearch, faChevronLeft, faChevronRight);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
