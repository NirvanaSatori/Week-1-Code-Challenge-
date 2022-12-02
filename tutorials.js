function titleCased(tutorials) {
    for(let item of tutorials) {  //iterates through the array
        let splitElement = item.split(" ")   //splits every word into an array
        let wordArray = splitElement.map(letter => {
            return letter[0].toUpperCase() + letter.slice(1) // capitalizes the first letter of every word and returns it
        }).join(" ")
        return wordArray
    }
}

let tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
]

titleCased(tutorials)  //calling the function titleCased