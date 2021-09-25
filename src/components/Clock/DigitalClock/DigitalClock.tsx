import React from 'react';
import './DigitalClock.css'


type PropsType = {
    date: any
}
const getFirstZero = (num: number) => num < 10 ? '0' + num : num

const DigitalClock = (props: PropsType) => {
    return (
        <div className={'section'}>
            <span>{getFirstZero(props.date.getHours())}</span>
            :
            <span>{getFirstZero(props.date.getMinutes())}</span>
            :
            <span>{getFirstZero(props.date.getSeconds())}</span>
        </div>
    );
};

export default DigitalClock;