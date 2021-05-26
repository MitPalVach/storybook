import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";


type AppPropsType = {
    title: string,
    value: number,
    collapsed: boolean
}

function App() {
    return (
        <div>
            <Accordion title={'first acc'} collapsed={false}/>
            <Accordion title={'second acc'} collapsed={true}/>
            <Accordion title={'third acc'} collapsed={false}/>
            <Accordion title={'fourth acc'} collapsed={false}/>
            <Accordion title={'fifth acc'} collapsed={false}/>
            <Rating value={3}/>
            <Rating value={2}/>
            <Rating value={1}/>
            <Rating value={0}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;
