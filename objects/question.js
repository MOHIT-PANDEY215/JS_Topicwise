/*
Q1. Predict the output:

const func =(function(a)){
    delete a;
    return a;
})(5);

console.log(func) --> 5
Sol:
delete keyword only deletes properties from an object, doesn't works with local varaiables

<----------------------------------------------------------->

Q2. Key with spaces in it:

const demo={
    name:"Mohit Pandey",
    title:"Full stack developer",
    "is learning JS": true // key contains spaces
 }

 console.log(demo["is learning JS"]) --> true
 delete(demo["is learning JS"]) --> deletes the key value pair


 <----------------------------------------------------------->
 
 Q3. Pairs with variable name.

 const key="name"
 const value="Mohit Pandey"

 const demo ={
    [key]: value;
 }

 console.log(demo)
 Output:
 {name: 'Mohit Pandey'}
 name:"Mohit Pandey"
 [[Prototype]]:Object
 

 <----------------------------------------------------------->
 
 Q4. Looping through object

 const demo={
     name:"Mohit Pandey",
     title:"Full stack developer"
    }
    
    for(key in demo){
        console.log(demo[key]);
    }
    Output:
    Mohit Pandey
    Full stack developer
    
 
 <----------------------------------------------------------->
 
 Q5. Same key with different values
 
 const demo={
     name:"Mohit Pandey",
     title:"Full stack developer",
     name:"Mohit"
    }
    
    for(key in demo){
        console.log(demo[key]);
    }
    
    Output:
    Mohit
    Full stack developer
    
    <- The value of key : name is overwritten by the last value given but gets logged in the way it was initialised

 <----------------------------------------------------------->
 
 Q6. Crete a func. multiplyByTwo(obj) to multipy each numeric values by 2.

 let numberObj={
    a:50,
    b:30,
    title: "Number"
 }

 multiplyByTwo(numberObj)
 
 function multiplyByTwo(obj){
     for(key in obj){
         if(typeof obj[key]==='number')
         obj[key]*=2;
        }
    }
        
    console.log(numberObj)
    Output:
    a:100
    b:60
    title: "Number"
    
 <----------------------------------------------------------->
 
 Q7. Predict the output:

 const a={}
 const b={key:"b"}
 const c={key:"c"}

 a[b]=123
 a[c]=456

 console.log(a[b])

 Output:
 456

 b and c are not strings. So upon converting it to string, it becomes "[object Object]"
 
 hence a["[object Object]"] gets the last value 456. 
 
 
 <----------------------------------------------------------->

 Q8. JSON.stringify  and JSON.parse
    
    const demo={
     name:"Mohit Pandey",
     title:"Full stack developer"
    }

    const strDemo= JSON.stringify(demo)
    



 
 
 
 

*/
