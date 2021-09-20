import React, {useState} from 'react';


export default {
    title: 'useState',
}

export const useStateExample = () => {
    console.log('useState');

    function generateValue() {
        console.log('generateValue');
        return 50
    }

    const [counter, setCounter] = useState<number>(generateValue)

    return <>
        <button onClick={() => setCounter(counter + 1)}>plus</button>
        {counter}
    </>
}