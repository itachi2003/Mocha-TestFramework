function isPalindrome(string) {
    return string === reverse(string)
}
function reverse(string) {
    let newStr = "";
    for(let i = string.length - 1; i >= 0; i--) {
        newStr += string[i];
    }
    return newStr
}

module.exports = isPalindrome;

// Another way !!!!!!!!!!!!!!!! - =>
  
// function isPalindrome(string) {
//     let left = 0;
//     let right = string.length - 1;
//     while(left < right) {
//         if(string[left] !== string[right]) {
//             return false
//         }
//         left++;
//         right--;
//     }
//     return true
    
// }

// module.exports = isPalindrome;
