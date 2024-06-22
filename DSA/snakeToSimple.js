//this_is_a_good_news - input
//thisIsAGoodNews - output

const SnakeToSimple = (str) => {
    return str.split("_")?.map((key, index) => {
        if (index === 0) return key
        return key.charAt(0)?.toUpperCase() + key.slice(1)
    })?.join("")
}