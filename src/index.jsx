import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
    return (
        <>
        <h1 className="text-red-500 text-3xl text-bold">Hello React</h1>
        <Pizza />
        </>
    )
}

function Pizza() {
    return <h2 className="text-green-500 text-2xl">Pizza is great!...Sometimes</h2>
}

const my_react_app = document.getElementById('app');
const app = ReactDOM.createRoot(my_react_app);


app.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);