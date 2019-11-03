import React from 'react';

interface CounterInterface {
    counter: number;
}

const Counter = (props: CounterInterface) => {
    return (
        <p style={{ textAlign: 'center'}}>{props.counter}</p>
    )
}

export default Counter;