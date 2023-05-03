import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './pages/App';

import './css/rectify.css';
import './css/style.css';

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
