import { Fragment, useRef } from "react"

const DebounceUI = () => {

    const timerRef = useRef(null)

    const DebounceFn = (callback, delay) => {
        return function (...args) {
            clearTimeout(timerRef.current)
            timerRef.current = setTimeout(() => {
                callback(...args)
            }, delay)
        }
    }

    const handleInputChange = (value) => {
        console.log("value", value)
    }

    const handleDebounce = DebounceFn(handleInputChange, 1000)


    return (
        <Fragment>
            <input onChange={(e) => handleDebounce(e.target.value)} />
        </Fragment>
    )
}

export default DebounceUI