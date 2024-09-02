import { Fragment, useRef } from "react"

const ThorttleUI = () => {

    let timerRef = useRef(null)

    function ThorttleFn(cb, delay) {
        return function (...args) {
            if (!timerRef.current) {
                cb(...args)
                timerRef.current = setTimeout(() => {
                    clearTimeout(timerRef.current)
                    timerRef.current = null
                    // console.log("timer ref cleared", timerRef.current)
                }, delay)
            }
        }
    }

    const handleClick = () => {
        console.log('Hello')
    }

    const handleThrottle = ThorttleFn(handleClick, 1000)


    return (
        <Fragment>
            <button className="btn" onClick={handleThrottle}>Click</button>
        </Fragment>
    )
}

export default ThorttleUI