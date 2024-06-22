const DeepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

const DeepCloneV2 = (obj) => {
    return structuredClone(obj)
}