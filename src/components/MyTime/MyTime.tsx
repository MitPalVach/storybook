import React, {useEffect, useState} from 'react';
import './MyTime.css'


const getFirstZero = (num: number) => num < 10 ? '0' + num : num

const MyTime = () => {
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
        <div className={'section'}>
            <span>{getFirstZero(date.getHours())}</span>
            :
            <span>{getFirstZero(date.getMinutes())}</span>
            :
            <span>{getFirstZero(date.getSeconds())}</span>
        </div>
    );
};

export default MyTime;