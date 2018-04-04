import React from 'react';
import { render } from 'react-dom';

import { injectGlobal } from 'styled-components';

import App from './components/App';

injectGlobal`
    body {
        margin: 20px;
        padding: 0;
        font-family: sans-serif;
    }
`;

render(
    <App />, 
    document.getElementById('root')
);