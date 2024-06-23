import { Fragment, useEffect, useRef, useState } from "react"

//create stopwatch with second and milisecond
const StopWatch = () => {

    const timerRef = useRef()
    const [typedValue, setTypedValue] = useState(0)
    const [inputValue, setInputValue] = useState(0)


    const handleInputChange = (value) => {
        setTypedValue(value)
        setInputValue(value * 60)
    }

    const handleStart = () => {
        timerRef.current = setInterval(() => {
            setInputValue((prev) => prev - 1)
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(timerRef.current)
        timerRef.current = null;
    }

    useEffect(() => {
        //clearing the timer on unmount
        return (() => {
            clearInterval(timerRef.current);
        })
    }, [])

    return (
        <Fragment>
            <div className="container">
                <input type="text" value={typedValue}
                    onChange={(e) => handleInputChange(e?.target?.value)} />

                <button className="btn btn-primary" onClick={handleStart}>
                    Start
                </button>
                <button className="btn btn-danger  mr-2" onClick={handlePause}>
                    Pause
                </button>

                <h5>
                    Time is {Math.floor(inputValue / 60)}: {inputValue % 60}
                </h5>

            </div>
        </Fragment>
    )
}

export default StopWatch