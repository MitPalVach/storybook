import React, {useState} from 'react';
import UncStar from "./UncStar/UncStar";
import styles from './UncRating.module.css';


const UncRating = () => {
    let [value, setValue] = useState(0)

    return (
            <div className={styles.uncRatingInner}>
                <UncStar select={value > 0} setValue={setValue} value={1}/>
                <UncStar select={value > 1} setValue={setValue} value={2}/>
                <UncStar select={value > 2} setValue={setValue} value={3}/>
                <UncStar select={value > 3} setValue={setValue} value={4}/>
                <UncStar select={value > 4} setValue={setValue} value={5}/>
            </div>
    );
};

export default UncRating;


