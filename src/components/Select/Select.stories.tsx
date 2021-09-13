import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Select, {ItemsSelectPropsType} from "./Select";
import styles from './Select.module.css';


export default {
    title: 'Select',
    component: Select,
}

const callback = action('select was fired')

export const SelectExample = () => <Select item={[{title: 'Kazan', value: 1}, {title: 'Moscow', value: 2}]}
                                           onChange={callback} value={'1'}
/>

export const UnselectExample = () => {
    const [select, setSelect] = useState<ItemsSelectPropsType[]>([
        {title: 'Kazan', value: 1},
        {title: 'Moscow', value: 2}
    ])

    return <Select item={select} onChange={callback} value={'1'}/>
}
