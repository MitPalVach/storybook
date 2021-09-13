import React from "react";
import styles from './InOff.module.css';


type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}
const OnOff = (props: OnOffType) => {
    const onStyles = {
        border: "1px solid #000",
        padding: '4px',
        width: "80px",
        height: "40px",
        margin: "5px",
        backgroundColor: props.on ? "#8AFD6FFF" : "white"
    };
    const offStyles = {
        border: "1px solid #000",
        padding: '4px',
        width: "80px",
        height: "40px",
        margin: "5px",
        backgroundColor: props.on ? "white" : "#FF5454FF"
    };
    const indicatorStyles = {
        border: "1px solid #000",
        padding: '4px',
        width: "40px",
        height: "40px",
        margin: "5px",
        borderRadius: "20px",
        backgroundColor: props.on ? "#8AFD6FFF" : "#FF5454FF"
    };

    const onClicked = () => {
        props.onChange(true)
    }
    const offClicked = () => {
        props.onChange(false)
    }

    return (
        <div className={styles.onOffInner}>
            <span style={onStyles} onClick={onClicked}>On</span>
            <span style={offStyles} onClick={offClicked}>Off</span>
            <span style={indicatorStyles}>....</span>
        </div>
    )
}

export default OnOff;