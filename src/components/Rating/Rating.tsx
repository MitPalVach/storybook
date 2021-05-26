import React from "react";
import Star from "./Star/Star";

type RatingPropsType = {
    value: number
}
const Rating = (props: RatingPropsType) => {
    if (props.value === 1) {
        return <div>
            <Star select={true}/>
            <Star select={false}/>
            <Star select={false}/>
            <Star select={false}/>
            <Star select={false}/>
        </div>
    }
    if (props.value === 2) {
        return <div>
            <Star select={true}/>
            <Star select={true}/>
            <Star select={false}/>
            <Star select={false}/>
            <Star select={false}/>
        </div>
    }
    if (props.value === 3) {
        return <div>
            <Star select={true}/>
            <Star select={true}/>
            <Star select={true}/>
            <Star select={false}/>
            <Star select={false}/>
        </div>
    }
    if (props.value === 4) {
        return <div>
            <Star select={true}/>
            <Star select={true}/>
            <Star select={true}/>
            <Star select={true}/>
            <Star select={false}/>
        </div>
    }
    if (props.value === 5) {
        return <div>
            <Star select={true}/>
            <Star select={true}/>
            <Star select={true}/>
            <Star select={true}/>
            <Star select={true}/>
        </div>
    }
    return <div>
        <Star select={false}/>
        <Star select={false}/>
        <Star select={false}/>
        <Star select={false}/>
        <Star select={false}/>
    </div>
}

export default Rating;