import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import TodoList from './TodoList'
import App from './App';
import Bottom from './Bottom';

// ReactDOM.render(<TodoList />, document.getElementById('todolist'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById('root'));
const bottom = ReactDOM.createRoot(document.getElementById('bottom'));
bottom.render(
    <React.StrictMode>
        <Bottom/>
    </React.StrictMode>
);

// ReactDOM.render(<Bottom />, document.getElementById('bottom'));
const todolist = ReactDOM.createRoot(document.getElementById('todolist'));
todolist.render(
    <React.StrictMode>
        <TodoList/>
    </React.StrictMode>
);
