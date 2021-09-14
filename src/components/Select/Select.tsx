import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css';


export type ItemsSelectPropsType = {
    value: any
    title: string
}
export type SelectPropsType = {
    item: ItemsSelectPropsType[]
    onChange: (value: any) => void
    value?: any
}
const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState<boolean>(true)
    const [hoveredElValue, setHoveredElValue] = useState(props.value)
    const selectedItem = props.item.find(i => i.value === props.value)
    const hoveredItem = props.item.find(i => i.value === hoveredElValue)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    useEffect(() => {
        setHoveredElValue(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.item.length; i++) {
                const nextEl = e.key === 'ArrowDown' ? props.item[i + 1] : props.item[i - 1]
                if (props.item[i].value === hoveredElValue) {
                    if (nextEl) {
                        props.onChange(nextEl.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.item[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }


    return (
        <>
            <div className={styles.selectInner} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.selectItems}>
                        {props.item.map((i) => <div key={i.value}
                                                    onMouseEnter={() => {
                                                        setHoveredElValue(i.value)
                                                    }}
                                                    className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                                                    onClick={() => {
                                                        onItemClick(i.value)
                                                    }}>
                            {i.title}</div>)}
                    </div>
                }
            </div>
        </>
    );
};

export default Select;