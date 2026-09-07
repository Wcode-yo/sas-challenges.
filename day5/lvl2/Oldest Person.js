let persons = [
    { name: "taha", age: 22 },
    { name: "Sara", age: 27 },
    { name: "Yassine", age: 23 }
]; 
  let oldest = persons[0] ;
for(let i =0 ; i<persons.length;i++){
   
if ( persons[i].age > oldest.age){
oldest = persons[i];


}


}console.log(oldest)
