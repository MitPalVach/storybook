import React, {useState} from "react";
import Select from "./Select";


export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState('2')

    return < >
        <Select value={value} onChange={setValue}
                item={[
                    {value: '1', title: 'Kazan'},
                    {value: '2', title: 'London'},
                    {value: '3', title: 'Paris'},
                ]}
        />
    </>
}

export const WhithoutValue = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select value={value} onChange={setValue}
                item={[
                    {value: '1', title: 'Kazan'},
                    {value: '2', title: 'London'},
                    {value: '3', title: 'Paris'},
                ]}
        />
    </>
}


