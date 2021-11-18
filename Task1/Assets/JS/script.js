let str = "Hello World";

function wordReverse(){
    
    let word = str.split("").reverse()
    console.log(word);
}

function letterReverse(){
    let letter = str.split(" ").reverse();
    console.log(letter);
}

wordReverse();
letterReverse();