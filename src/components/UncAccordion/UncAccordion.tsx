import React from 'react';
import UncAccordionTitle from "./UncAccordionTitle/UncAccordionTitle";
import UncAccordionBody from "./UncAccordionBody/UncAccordionBody";
import styles from './uncAccordion.module.css';


type UncAccordionType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}
const UncAccordion: React.FC<UncAccordionType> = (props) => {
    return (
        <div className={styles.uncAccordionInner}>
            <UncAccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <UncAccordionBody/>}
        </div>
    );
};

export default UncAccordion;