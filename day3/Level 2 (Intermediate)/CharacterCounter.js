function countChar(str, char){
let count = 0 ;
for(let i=0;i<str.length;i++){
if(str[i]===char){ 
count++; 
}
}
return count;
}console.log(countChar("you code","o"));
