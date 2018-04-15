import React from 'react';
import ReactDOM from 'react-dom';
import {Game, Board} from './App';
import {LoggingButton} from './TestEvent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Game gammer="Trandeptrai" />
        <LoggingButton />
       
    </div>, document.getElementById('root')
);
registerServiceWorker();




