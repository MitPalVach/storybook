import React, {useState} from 'react';
import AccordionTitle from "../Accordion/AccordionTitle/AccordionTitle";
import AccordionBody from "../Accordion/AccordionBody/AccordionBody";

type UncontrolledAccordionType = {
    titleValue: string
}
const UncontrolledAccordion: React.FC<UncontrolledAccordionType> = (props) => {
    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={() => {
                setCollapsed(!collapsed)
            }}>Toggle
            </button>
            {!collapsed && <AccordionBody/>}
        </div>
    );
};


export default UncontrolledAccordion;