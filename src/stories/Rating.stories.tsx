import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import UncRating from "../components/UncRating/UncRating";


export default {
    title: 'UncRating Component',
    component: UncRating,
}

const onClick = action('w')

export const ChangeRating = () => {
    const [rating, setRating] = useState(2)
    return <UncRating/>
}
