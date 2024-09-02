import { useState } from "react"
const explorer = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "public",
            isFolder: true,
            items: [
                {
                    id: "3",
                    name: "index.html",
                    isFolder: false,
                },
                {
                    id: "4",
                    name: "logo.jpg",
                    isFolder: false,
                }
            ]
        },
        {
            id: "5",
            name: "src",
            isFolder: true,
            items: [
                {
                    id: "6",
                    name: "index.js",
                    isFolder: false,
                },
                {
                    id: "7",
                    name: "app.js",
                    isFolder: false,
                }
            ]
        },
    ]
}

const FileExplorer = ({ }) => {

    const [finalData, setFinalData] = useState(explorer)

    return (
        <>
            <span>{finalData?.name}</span>
            {finalData?.items?.map((item) => {
                return (
                    <Explorer item={item} key={item?.id} />
                )
            })}

        </>
    )
}

export default FileExplorer



const Explorer = ({ item }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {(item?.isFolder) ?
                <>
                    <span className="folder" style={{ display: "block" }} onClick={() => setIsOpen(!isOpen)}>
                        {item?.name}
                    </span>
                    {!!isOpen &&
                        <span className="folder-child" style={{ paddingLeft: 25 }}>
                            {item?.items?.map((itemChild) => {
                                return (
                                    <Explorer item={itemChild} key={itemChild?.id} />
                                )
                            })
                            }
                        </span>
                    }

                </>
                :
                <span style={{ display: "block", paddingLeft: 25 }}>{item?.name}</span>
            }
        </>

    )
}