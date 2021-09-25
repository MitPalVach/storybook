import React, {useEffect, useState} from 'react';
import AnalogClock from "./AnalogClock/AnalogClock";
import DigitalClock from "./DigitalClock/DigitalClock";


const Clock = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <AnalogClock date={date}/>
            <DigitalClock date={date}/>
        </>
    );
};

export default Clock;