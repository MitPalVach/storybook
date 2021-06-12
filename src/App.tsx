import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import Rating from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";


function App() {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className={'app'}>
            <h2>Контролируемый аккордион</h2>
            <Accordion title={'first acc'} collapsed={true}/>
            <Accordion title={'second acc'} collapsed={false}/>
            <h2> Неконтролируемый аккордион</h2>
            <UncontrolledAccordion titleValue={'Toggle'}
                                   collapsed={accordionCollapsed}
                                   onChange={() => {
                                       setAccordionCollapsed(!accordionCollapsed)
                                   }}/>
            <h2>Контролируемый рейтинг</h2>
            <Rating value={0}/>
            <Rating value={2}/>
            <Rating value={5}/>
            <h2>Неконтролируемый рейтинг</h2>
            <UncontrolledRating/>
            <h2>Контролируемый Вкл\Выкл</h2>
            <OnOff on={switchOn} onChange={(on) => {
                setSwitchOn(on)
            }}/>
            <h2>Неконтролируемый Вкл\Выкл</h2>
            <UncontrolledOnOff/>
            <UncontrolledOnOff/>
        </div>
    )
}

export default App;
