import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import { increment, incrementAsync, getUserDataAsync } from './store/actions'

import logo from './logo.svg';
import './App.css';

interface Props {
    count?: number;
    increment?: Function;
    incrementAsync?: Function;
}

function App({ count, increment, incrementAsync }: Props) {
    const [select, setSelect] = useState(1);
    const [b, setB] = useState('haha')
    // useEffect(()=>{
    //     console.log(select);
    //     console.log(b);

    // },[])


    /* -----------methods---------------- */
    function add() {

        increment?.(select * 1)
    }
    function addAsync() {
        incrementAsync?.(select * 1)
    }
    function handleSelect(e: any) {
        const value = e.target.value;
        setSelect(value)
    }
    function handleClick() {
        console.log('dianle ');
        
        getUserDataAsync();
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{count}</p>
                <div>
                    <select name="calc" id="select" onChange={handleSelect}>
                        <option value="1">我是1</option>
                        <option value="2">我是2</option>
                        <option value="3">我是3</option>
                    </select>
                    <button onClick={add}>同步+1</button>
                    <button onClick={addAsync}>异步+1</button>
                    <button onClick={handleClick}>发请求+1</button>
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
export default connect(mapStatetoProps, { increment, incrementAsync, getUserDataAsync })(App);
