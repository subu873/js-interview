import { Fragment, useState } from "react"

const ToDoApp = () => {

    const [data, setData] = useState([])

    const [formData, setFormData] = useState({
        text: "",
        description: "",
        isComplete: false,
        status: "Pending"
    })

    const handleChange = (e) => {
        let field = e?.target?.name;
        let value = e?.target?.value;
        setFormData((prev) => {
            return {
                ...prev,
                [field]: value
            }
        })
    }

    const handleCreate = () => {
        if (!formData?.text || !formData?.description) {
            console.error("please enter title and description")
            return
        }
        let formatted = {
            ...formData,
            id: new Date().getTime()
        }
        setData((prev) => [formatted, ...prev])
        setFormData({})
    }

    const handleRemove = (targetId) => {
        const result = data?.filter((k) => k?.id !== targetId)
        setData(result)
    }


    return (
        <Fragment>
            <div className="container">
                <div className="col-6 offset-3">
                    <div className="card p-5">
                        <input className="form-control mb-3"
                            value={formData?.text}
                            name="text"
                            placeholder="Title"
                            onChange={handleChange}
                        />
                        <input className="form-control  mb-3"
                            value={formData?.description}
                            name="description"
                            placeholder="Description"
                            onChange={handleChange}
                        />
                        <select className="form-control  mb-3"
                            name="status"
                            onChange={handleChange}
                            value={formData?.status}>
                            <option value="PENDING">Pending</option>
                            <option value="REJECTED">Rejected</option>
                            <option value="COMPLETE">Complete</option>
                        </select>

                        <button className="btn btn-primary" onClick={handleCreate}>
                            Create
                        </button>

                    </div>

                    {!!data && data.length > 0 &&
                        <div className="card mt-4 p-3">
                            <ul>
                                {!!data && data?.map((key) => {
                                    return (
                                        <li key={key?.id} className="card p-3 mb-3">
                                            <span>
                                                {key?.text} : {key?.status}
                                                <button className="btn btn-sm btn-danger" onClick={(e) => handleRemove(key?.id)}>
                                                    Remove
                                                </button>
                                            </span>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    }
                </div>


            </div>
        </Fragment>
    )
}

export default ToDoApp