import React, {useReducer, useState} from 'react';
import UncAccordionTitle from "./UncAccordionTitle/UncAccordionTitle";
import UncAccordionBody from "./UncAccordionBody/UncAccordionBody";
import styles from './uncAccordion.module.css';
import {TOGGLE_COLLAPSED, UncAccReducer} from "./UncAccReducer";


export type UncAccordionType = {
    titleValue: string
}
const UncAccordion: React.FC<UncAccordionType> = (props) => {
    // const [collapsed, setCollapsed] = useState<boolean>(false)
    const [state, dispatch] = useReducer(UncAccReducer, {collapsed:false});
    return (
        <div className={styles.uncAccordionInner}>
            {/*<UncAccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <UncAccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <UncAccordionBody/>}
        </div>
    );
};

export default UncAccordion;