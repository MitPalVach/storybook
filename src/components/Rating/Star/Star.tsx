import React from "react";

type StarPropsType = {
    select:boolean
}
const Star = (props: StarPropsType) => {
    return props.select ? <span><b>Star </b></span> : <span>Star </span>;
}

export default Star;