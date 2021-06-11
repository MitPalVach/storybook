import React from "react";
import Star from "./Star/Star";

type RatingPropsType = {
    value: number
}
const Rating = (props: RatingPropsType) => {
    return <div>
        <Star select={props.value > 0}/>
        <Star select={props.value > 1}/>
        <Star select={props.value > 2}/>
        <Star select={props.value > 3}/>
        <Star select={props.value > 4}/>
    </div>
}

export default Rating;