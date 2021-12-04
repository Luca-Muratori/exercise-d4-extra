//EXTRA 4
//Write a piece of code for getting only 
//even numerical values from an array.


let a=[1, 2, 4, 5, 7, 8, 9, 11, 12]
let even=[]

for(i=0; i<a.length; i++){
    if(a[i]%2===0){
        even.push(a[i]);
    }
}
console.log(even)