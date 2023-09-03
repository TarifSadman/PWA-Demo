import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function Counter(props) {
    let [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.userAgent)
    console.log(isAppleDevice());

    const checkTabInView = () => !document.hidden
    console.log(checkTabInView());

    const generateRandomIP = () => {
        return Array.from({length: 4}, () => Math.floor(Math.random() * 256)).join('.');
      }
      
      generateRandomIP() // 220.187.184.113
      generateRandomIP() // 254.24.179.151

    // isAppleDevice() // true or false

    return(
        <div style={{textAlign: 'center'}}>
            <h3>A Random IP: {generateRandomIP()}</h3>
            <div style={{ marginBottom: 10 }}>
                <Button variant="contained" onClick={increment}>+</Button>
                <span> {count} </span>
                <Button variant="contained" onClick={decrement}>-</Button>
            </div>
            <div style={{ marginBottom: 10 }}>
            {isAppleDevice() ? 'Apple Device' : 'Not Apple Device'}
            </div>
            <div style={{ marginBottom: 10 }}>
            {checkTabInView() ? 'Tab is in view' : 'Tab is not in view'}
            </div>
            <TextField fullWidth label="fullWidth" id="fullWidth" />
        </div>
    );
};

export default Counter;