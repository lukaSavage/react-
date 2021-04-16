import React from 'react';
import { connect } from 'react-redux'

import { increment, incrementAsync } from './store/actions'

import logo from './logo.svg';
import './App.css';

interface Props {
    count?: number;
    increment?: Function;
    incrementAsync?: Function;
}

function App({ count, increment, incrementAsync }: Props) {
    function add() {
        increment?.()
    }
    function addAsync() {
        incrementAsync?.()
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{count}</p>
                <div>
                    <button onClick={add}>同步+1</button>
                    <button onClick={addAsync}>异步+1</button>
                    <button>发请求+1</button>
                </div>
            </header>
        </div>
    );
}

const mapStatetoProps = (state: any) => {
    return {
        count: state.count
    }
}
export default connect(mapStatetoProps, { increment, incrementAsync })(App);
