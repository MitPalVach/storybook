import React, {useState} from 'react';
import Star from "../Rating/Star/Star";


type UncontrolledRatingType = {
    titleValue: string

}
const UncontrolledRating: React.FC<UncontrolledRatingType> = (props) => {
    let [value, setValue] = useState(0)

    return (
        <div>
            {props.titleValue}
            <div>
                <Star select={value > 0}/>
                <button onClick={() => {
                    setValue(1)
                }}>1
                </button>
                <Star select={value > 1}/>
                <button onClick={() => {
                    setValue(2)
                }}>2
                </button>
                <Star select={value > 2}/>
                <button onClick={() => {
                    setValue(3)
                }}>3
                </button>
                <Star select={value > 3}/>
                <button onClick={() => {
                    setValue(4)
                }}>4
                </button>
                <Star select={value > 4}/>
                <button onClick={() => {
                    setValue(5)
                }}>5
                </button>
            </div>
        </div>
    );
};

export default UncontrolledRating;