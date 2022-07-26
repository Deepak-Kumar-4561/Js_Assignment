//1. String is palindrome or not
function palindrome(str){
    return (str===str.split('').reverse().join(''));
}
console.log(palindrome('abcbc'));
//2. Convert decimal to binary
function dec_bin(n){
    return n.toString(2);
}
console.log(dec_bin(7));

3// Ascii value of character using charCodeAt()
function asciivalue(a){
    return a.charCodeAt(0);
}
console.log(asciivalue('D'));

//4. ASCII value of character using codePointat();
function asciivalue1(a){
    return a.codePointAt(0);
}
console.log(asciivalue1('a'));
