import React from "react";


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {

    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    )
}

export default AccordionTitle;