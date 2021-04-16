import React, {useState} from 'react';
import './Hooks.css';
import Step from './Step';

function Hooks(props) {
    const [step, setStep] = useState(1);
    const [hooks, setHooks] = useState(props.initValue);

    const changeHooks = () => {
        setHooks((prevHooks) => {
            return prevHooks + step;
        });
    }

    const reinitHooks = () => {
        setHooks(props.initValue);
    }

    const resetHooks = () => {
        setHooks(0);
    }

    const changeStepValue = (e) => {
        setHooks(+e.target.value);
        console.log(e.target.value);
    }

    return(
        <div className="hooks">
            Licznik:

            <span className="value">
                {hooks}
            </span>
            <br /><br />
            <Step changeStepValueMth={changeStepValue} stepValue={step} />
            <br />
            <button onClick={changeHooks}>
                Add {step}
            </button>
            <button onClick={reinitHooks}>
                Reinit 
            </button>
            <button onClick={resetHooks}>
                Reset 
            </button>
        </div>
    )
}

export default Hooks;