function scrambleWord(word) {
    let originalWord = word;
    let scrambledWord = '';
    
    for (let i = 0; i < originalWord.length; i++) {
        const randomIndex = Math.floor(Math.random() * originalWord.length);
        const randomLetter = originalWord.charAt(randomIndex);
        
        scrambledWord += randomLetter;
        originalWord = originalWord.substring(0, randomIndex) + originalWord.substring(randomIndex + 1);
        
        console.log(`Original Word: ${word}, Scrambled Word: ${scrambledWord}, Remaining Letters: ${originalWord}`);
    }
    
    return scrambledWord;
}

const word = 'HELLO';
const result = scrambleWord(word);
console.log(`Final Scrambled Word: ${result}`);
