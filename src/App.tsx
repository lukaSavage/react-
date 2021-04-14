import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>1</p>
                <div>
                    <button>同步+1</button>
                    <button>异步+1</button>
                    <button>发请求+1</button>
                </div>
            </header>
        </div>
    );
}

export default App;
