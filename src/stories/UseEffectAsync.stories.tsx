import React, {useEffect, useState} from "react";


export default {
    title: 'UseEffectSetTimeoutSetInterval'
}

export const UseEffectSetTimeoutSetInterval = () => {
    console.log('render UseEffectSetTimeoutSetInterval');
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)

    // setTimeout
    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout');
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])

    // setInterval
    useEffect(() => {
        setInterval(() => {
            console.log('setInterval');
            setCounter((state) => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter} fake: {fake}
        <button onClick={() => setCounter(counter + 1)}>Counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
    </>
}
