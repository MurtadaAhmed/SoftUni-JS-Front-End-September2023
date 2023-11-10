function palindromeChecker(array) {

    function isPalindrome(number) {
        let string = number.toString();
        let reversed = string.split("").reverse().join("");

        return string === reversed;
    }


    for (let i of array) {
        console.log(isPalindrome(i))
    }
}



palindromeChecker([123,323,421,121])
palindromeChecker([32,2,232,1010])