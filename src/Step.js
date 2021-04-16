import React from 'react';

function Step(props) {
    return (
        <div>
            Krok:
            <input type="number" value={props.stepValue} onChange={props.changeStepValueMth} />
        </div>
    )
}

export default Step;