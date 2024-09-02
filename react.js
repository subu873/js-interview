// usestate hook
// useEffect hook
// useRef hook
//React.memo hook
// useMemo hook
// useCallback hook
// useReducer hook

const { Fragment, useState, memo } = require("react")




const Parent = () => {

    const [count, setCount] = useState(null)

    return (
        <Fragment>


            <ToDoCom arr={todoList} handleAddToDo={fn} />
            {count}
            <button onClick={() => setCount(count + 1)}>
                inc
            </button>
        </Fragment>
    )
}

const ToDoCom = ({ arr, handleAddToDo }) => {
    console.log("chikld rere nder")
}

export default memo(ToDoCom)