import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('item clicked')

export const MenuCollapsedMode = () => <Accordion title={'Menu'}
                                                  collapsed={true}
                                                  onChange={callback}
                                                  onClick={onClickCallback}
                                                  items={[]}
/>
export const UsersUncollapsedMode = () => <Accordion title={'Users'}
                                                     collapsed={false}
                                                     onChange={callback}
                                                     onClick={onClickCallback}
                                                     items={[{title: 'MitPal', value: 1}, {title: 'DarLeo', value: 2}]}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      onClick={(value) => console.log(`user id is ${value}`)}
                      items={[{title: 'MitPal', value: 1},
                          {title: 'DarLeo', value: 2}]}
    />
}
