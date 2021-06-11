import React, {useState} from "react";


const OnOff = () => {
    let [on, setOn] = useState(false);
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
    const wrapperStyles = {
        margin: '20px'
    }

    return (
        <div style={wrapperStyles}>
            <span style={onStyles}
                  onClick={() => {
                      setOn(true)
                  }}>On</span>
            <span style={offStyles}
                  onClick={() => {
                      setOn(false)
                  }}>Off</span>
            <span style={indicatorStyles}>....</span>
        </div>
    )
}

export default OnOff;