const DebounceMethod = (callback, delay = 300) => {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        } else {
            setTimeout(() => {
                timer = callback(...args)
            }, delay)
        }
    }
}