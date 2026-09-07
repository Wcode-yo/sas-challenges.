function existence(numbers, value){
for(let i = 0;i<numbers.length;i++){
if(numbers[i]===value){
    return true; 
}
}
return false ; 
}

    
console.log(existence([1,2,3,4,5],7));
