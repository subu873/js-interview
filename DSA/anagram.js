//Check two strings are anagrams
// DEER,REED - True
// Toy,Boy- False

const IsValidAnagrams = (str1, str2) => {
    return str1.split("").sort("")?.join("") === str2.split("").sort("")?.join("")
}

