import React from "react";


type StarPropsType = {
    select: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}
const UncStar = (props: StarPropsType) => {
    return <span onClick={() => {
        props.setValue(props.value)
    }}> {props.select ? <b>star</b> : 'star'} </span>
}

export default UncStar;



