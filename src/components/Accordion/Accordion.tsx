import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordeonBody/AccordionBody";
import styles from './Accordion.module.css';


export type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value:any)=> void
}
const Accordion = (props: AccordionPropsType) => {
    return (
        <div className={styles.accordionInner}>
            <AccordionTitle title={props.title} onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

export default Accordion;