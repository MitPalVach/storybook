import React from "react";


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
const UncAccordionTitle = (props: AccordionTitlePropsType) => {

    return <>
        <h3 onClick={props.onChange}>{props.title}</h3>
    </>
}

export default UncAccordionTitle;