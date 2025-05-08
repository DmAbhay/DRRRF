import React, { useState, useEffect } from 'react';

function CounterUseEffect() {

    const [count, setCount] = useState(0);

    const printText = () => {
        console.log(`The count is now: ${count}`);
    };

    useEffect(() => {
        printText(); // Call the function whenever count changes
    }, [count]); // Dependency array watches count

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default CounterUseEffect;
