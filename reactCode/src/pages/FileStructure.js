import { Fragment, useState } from "react"

export const FOLDER_TYPE = "FOLDER"
export const FILE_TYPE = "FILE"
export const IMAGE_TYPE = "IMAGE"

const FOLDER_JSON = [
    {
        id: "1",
        name: "public",
        type: FOLDER_TYPE,
        children: [
            {
                id: "11",
                name: "favicon.ico",
                type: IMAGE_TYPE,
            },
            {
                id: "12",
                name: "index.html",
                type: FILE_TYPE,
            },
        ]
    },
    {
        id: "2",
        name: "src",
        type: FOLDER_TYPE,
        isOpen: false,
        children: [

            {
                id: "21",
                name: "App.js",
                type: FILE_TYPE,

            },
            {
                id: "22",
                name: "index.css",
                type: FILE_TYPE,

            },
            {
                id: "23",
                name: "setuptest.js",
                type: FILE_TYPE,
            },
            {
                id: "24",
                name: "pages",
                type: FOLDER_TYPE,
                isOpen: false,
                children: [
                    {
                        id: "241",
                        name: "Blog.js",
                        type: FILE_TYPE,
                    },
                    {
                        id: "242",
                        name: "Blog1.js",
                        type: FILE_TYPE,
                    },
                    {
                        id: "243",
                        name: "Blog3.js",
                        type: FILE_TYPE,
                    },
                ]
            }
        ]
    }
]



const FileStructureUI = () => {

    const [childShowIndex, setChildShowIndex] = useState({})

    const handleOpenFolder = (e, targetId) => {
        // we will write logic to open all the child elem   console.log("target id clicked", targetId)
        console.log("targetid clicked", targetId)

        let finalObj = childShowIndex

        e?.stopPropagation();

        if (targetId in finalObj) {
            delete finalObj[targetId]
        } else {
            finalObj = { ...finalObj, targetId }
        }

        setChildShowIndex(finalObj)
    }

    const FOLDER_UI = ({ data }) => {

        const final = {
            children: data
        }

        return (
            <Fragment>
                <CHILD_UI data={final} childShowIndex={childShowIndex} />
            </Fragment>
        )
    }

    const CHILD_UI = ({ data, childShowIndex }) => {
        let children = data?.children || []
        return (
            <Fragment>
                {(!!children && children.length > 0) &&
                    <ul>
                        {children?.map((child) => {
                            let nextChildArr = child?.children || [];
                            return (
                                <Fragment key={child?.id}>
                                    {child?.type === FOLDER_TYPE &&
                                        <li
                                            className="folder-type"
                                            onClick={(e) => handleOpenFolder(e, child?.id)} key={child?.id}>
                                            {child?.name}
                                            <ul>
                                                <FOLDER_UI data={nextChildArr} />
                                            </ul>
                                        </li>
                                    }
                                    {child?.type !== FOLDER_TYPE &&
                                        <li className="file-type">{child?.name}</li>
                                    }
                                </Fragment>
                            )
                        })}
                    </ul>
                }

            </Fragment>
        )
    }


    return (
        <Fragment>
            <ul>
                {!!FOLDER_JSON && FOLDER_JSON?.map((f, index) => {
                    let children = f?.children || [];

                    return (
                        <li
                            className="folder-type"
                            onClick={(e) => handleOpenFolder(e, f?.id)} key={f?.id}>
                            {f?.name}
                            <CHILD_UI data={f} childShowIndex={childShowIndex} />
                        </li>
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default FileStructureUI