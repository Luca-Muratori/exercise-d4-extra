/* EXTRA 6
 Write a piece of code for
  removing all the vowels from a string.
*/

let str="Hello, my name is Luca and I'm learning JavaScript"
let str2=''

for(let i=0;i<str.length; i++){
    switch (str[i]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            break; 
        default:
            str2+=str[i];
    }
}

console.log(str2)