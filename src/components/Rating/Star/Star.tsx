import React from "react";


type StarPropsType = {
    select: boolean
}
const Star = (props: StarPropsType) => {
    return <span onClick={() => {
    }}> {props.select ? <b>star</b> : 'star'} </span>
}

export default Star;