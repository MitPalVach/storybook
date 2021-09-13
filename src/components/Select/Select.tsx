import React from 'react';
import styles from './Select.module.css';


export type ItemsSelectPropsType = {
    title: string
    value: any
}
export type SelectPropsType = {
    item: ItemsSelectPropsType[]
    onChange: (value: any) => void
    value?: any
}
const Select = (props: SelectPropsType) => {
    const selectedItem = props.item.find(i => i.value === props.value)
    return (
        <>
            <select>
                <option value="">Kazan</option>
                <option value="">Moscow</option>
                <option value="">London</option>
            </select>
            <div className={styles.selectInner}>
                <h3>{selectedItem && selectedItem.title}</h3>
                <div className={styles.selectItems}>
                    {props.item.map((i) => <div key={i.value}>{i.title}</div>)}
                </div>
            </div>
        </>
    );
};

export default Select;