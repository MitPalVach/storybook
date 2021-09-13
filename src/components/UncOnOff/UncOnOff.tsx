import React, {useState} from "react";
import styles from './UncOnOff.module.css';


const UncOnOff = () => {
    let [on, setOn] = useState(true);
    const onStyles = {
        border: "1px solid #000",
        padding: '4px',
        width: "80px",
        height: "40px",
        margin: "5px",
        backgroundColor: on ? "#8AFD6FFF" : "white"
    };
    const offStyles = {
        border: "1px solid #000",
        padding: '4px',
        width: "80px",
        height: "40px",
        margin: "5px",
        backgroundColor: on ? "white" : "#FF5454FF"
    };
    const indicatorStyles = {
        border: "1px solid #000",
        padding: '4px',
        width: "40px",
        height: "40px",
        margin: "5px",
        borderRadius: "20px",
        backgroundColor: on ? "#8AFD6FFF" : "#FF5454FF"
    };

    const onClicked = () => {
            setOn(true)
    }
    const offClicked = () => {
        setOn(false)
    }

    return (
        <div className={styles.uncOnOffInner}>
            <span style={onStyles}
                  onClick={onClicked}>On</span>
            <span style={offStyles}
                  onClick={offClicked}>Off</span>
            <span style={indicatorStyles}>....</span>
        </div>
    )
}

export default UncOnOff;