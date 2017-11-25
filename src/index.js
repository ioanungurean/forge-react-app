import React from 'react';
import ReactDOM from 'react-dom';
import Async from 'react-code-splitting';

import 'ui/layout';

const App = () => (<Async load={import('modules/app')} />);

ReactDOM.render(<App message={true} />, document.getElementById('root'));
