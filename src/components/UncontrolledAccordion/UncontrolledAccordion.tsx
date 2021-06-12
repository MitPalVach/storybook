import React from 'react';
import AccordionBody from "../Accordion/AccordionBody/AccordionBody";
import UncAccordionTitle from "./UncAccordionTitle/UncAccordionTitle";

type UncontrolledAccordionType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}
const UncontrolledAccordion: React.FC<UncontrolledAccordionType> = (props) => {
    return (
        <div>
            <UncAccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
};

export default UncontrolledAccordion;