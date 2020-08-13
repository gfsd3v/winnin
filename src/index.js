import React from 'react';
import ReactDOM from 'react-dom';

// Page
import HomePage from 'pages/HomePage';

// Style
import 'normalize.css';
import 'typeface-roboto';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HomePage />, document.getElementById('root'));

serviceWorker.register();
