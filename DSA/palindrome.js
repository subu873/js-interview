// Check a string is Palindrome or not
// nitin - True
// racecar - True
// Ram-false

const IsPalindrome = (str) => {
    return str.split("").reverse().join("") === str
}

IsPalindrome("nitin")
IsPalindrome("racecar")
IsPalindrome("Ram")

