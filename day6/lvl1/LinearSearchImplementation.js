function linearSearch(array, target){
for(let i = 0 ; i<array.length;i++){
if (array[i]=== target){
return i ; 


}

}
return -1 ; 




}console.log(linearSearch([1,4,5,6,7], 7))