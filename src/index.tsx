import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App: React.FC = () => {
    return (
        <div>Hello world</div>
    );
}

ReactDOM.render(
    <App/>, document.getElementById('root')
);