import React, {FC} from "react";
import {ItemType} from "../Accordion";


type AccBodyPropsType = {
    items: ItemType[]
    onClick: (value:any)=> void
}
const AccordionBody: FC<AccBodyPropsType> = (props) => {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}

export default AccordionBody;