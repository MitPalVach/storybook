import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import OnOff from './components/OnOff/OnOff';
import Rating from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";


function App() {
    return (
        <div className={'app'}>
            <Accordion title={'first acc'} collapsed={true}/>
            <Accordion title={'second acc'} collapsed={false}/>
            <hr/>
            <UncontrolledAccordion titleValue={'It\'s Johny'}/>
            <hr/>
            <hr/>
            <Rating value={0}/>
            <Rating value={2}/>
            <Rating value={5}/>
            <hr/>
            <UncontrolledRating titleValue={'It\'s alive! Alive!'}/>
            <hr/>
            <hr/>
            <OnOff/>
            <OnOff/>
        </div>
    )
}

export default App;
