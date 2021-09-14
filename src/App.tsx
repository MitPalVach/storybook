import React, {useState} from 'react';
import './App.css';
import Accordion, {ItemType} from "./components/Accordion/Accordion";
import UncOnOff from './components/UncOnOff/UncOnOff';
import Rating from "./components/Rating/Rating";
import UncAccordion from "./components/UncAccordion/UncAccordion";
import UncRating from "./components/UncRating/UncRating";
import OnOff from "./components/OnOff/OnOff";
import Select, {ItemsSelectPropsType} from "./components/Select/Select";


const App = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    const [users, setUsers] = useState<ItemType[]>([{title: 'MitPal', value: 1}, {title: 'DarLeo', value: 2}])
    const [item, setItem] = useState<ItemsSelectPropsType[]>([
        {value: '1', title: 'Kazan'},
        {value: '2', title: 'London'},
        {value: '3', title: 'Paris'},
    ])


    return (
        <div className={'app'}>
            <div className={'section'}>
                <h2>Select</h2>
                <Select onChange={() => {
                }}
                        item={item}/>
            </div>

            <div className={'section'}>
                <h2>Контролируемый аккордеон</h2>
                <Accordion title={'first acc'} collapsed={true}
                           items={users}
                           onClick={() => {
                           }}
                           onChange={() => {
                           }}
                />
                <Accordion title={'second acc'} collapsed={false}
                           items={users}
                           onClick={() => {
                           }}
                           onChange={() => {
                           }}
                />
            </div>

            <div className={'section'}>
                <h2> Неконтролируемый аккордеон</h2>
                <UncAccordion titleValue={'Toggle'}
                              collapsed={accordionCollapsed}
                              onChange={() => {
                                  setAccordionCollapsed(!accordionCollapsed)
                              }}/>
            </div>

            <div className={'section'}>
                <h2>Контролируемый рейтинг</h2>
                <Rating value={0}/>
                <Rating value={2}/>
                <Rating value={5}/>
            </div>

            <div className={'section'}>
                <h2>Неконтролируемый рейтинг</h2>
                <UncRating/>
            </div>

            <div className={'section'}>
                <h2>Контролируемый Вкл\Выкл</h2>
                <OnOff on={switchOn} onChange={(on) => {
                    setSwitchOn(on)
                }}/>
            </div>

            <div className={'section'}>
                <h2>Неконтролируемый Вкл\Выкл</h2>
                <UncOnOff/>
            </div>

        </div>
    )
}

export default App;
