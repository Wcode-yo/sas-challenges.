let even = 0 ; 
let odd =  0 ; 
let numbers=[4, 7, 2, 9, 10, 13];
for(let i = 0 ; i<numbers.length;i++){
if (numbers[i]%2==0){
even ++ ; 
}
else{
odd ++ ; 

}
}console.log("Even: " + even + "\nOdd: " + odd);