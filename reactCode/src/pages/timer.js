import { Fragment, useEffect, useRef, useState } from "react"

const TimerApp = () => {

    const timerRef = useRef()
    const [count, setCount] = useState(0)

    const handleStart = () => {
        //if you want to show milisecond then add prev+10
        timerRef.current = setInterval(() => {
            setCount((prev) => prev + 10)
        }, 10)
    }

    const handleReset = () => {
        setCount(0)
        clearInterval(timerRef?.current)
        timerRef.current = null;
    }

    const handlePause = () => {
        clearInterval(timerRef?.current)
        timerRef.current = null;
    }

    // Cleanup on component unmount
    useEffect(() => {
        return () => clearInterval(timerRef.current);
    }, []);

    return (
        <Fragment>
            <div className="container">
                <h1>Timer</h1>
                <button className="btn btn-primary mr-2" onClick={handleStart}>
                    Start
                </button>
                <button className="btn btn-primary  mr-2" onClick={handleReset}>
                    Reset
                </button>
                <button className="btn btn-danger  mr-2" onClick={handlePause}>
                    Pause
                </button>


                <h1>
                    Count {Math.floor(count / 1000)}:{count % 1000}
                </h1>

            </div>

        </Fragment>
    )
}

export default TimerApp