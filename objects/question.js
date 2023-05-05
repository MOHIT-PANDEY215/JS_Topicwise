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
    console.log(strDemo)
    
    Output:
    {"name":"Mohit","title":"Full stack developer"}

    const objStrDemo=JSON.parse(strDemo);
    console.log(objStrDemo)
    
    Output:
    {name: 'Mohit Pandey', title: 'Full stack developer'}
    name:"Mohit Pandey"
    title:"Full stack developer"
    [[Prototype]]:Object
    
    
    Storing values in localstorage

    localStorage.setItem("test",strDemo)
    console.log(localStorage.getItem("test",strDemo))
    Output:   test : {"name":"Mohit","title":"Full stack developer"}
    localStorage assigns string values. if objects are assigned then it stores it as [object Object] 
    
    
    <----------------------------------------------------------->
    
    Q9. Spread operator

    console.log([..."Mohit"])
    (5) ['M', 'o', 'h', 'i', 't']

    const user={name:'Mohit',cool:'true'}
    const admin={liar:true,...user}

    console.log(admin)

    Output:
    {liar: true, name: 'Mohit', cool: 'true'}
    cool:"true"
    liar:true
    name:"Mohit"
    [[Prototype]]:Object
    
    
    <----------------------------------------------------------->
    
    Q10. Predict the output

    const settings ={
        username: "Mohit",
        level: 21,
        health: 98
    }

    const data =JSON.stringify(settings,["level","health"])
    console.log(data)
    
    Output:
    {"level":21,"health":98}
    here only the keys specified gets stringified


    <----------------------------------------------------------->
    
    Q11. Predict the output

    const shape={
        radius:10,
        diameter(){
            return this.radius*2;
        },
        perimeter: ()=>2*Math.PI*this.radius
    }
    
    console.log(shape.diameter())
    console.log(shape.perimeter())

    Output:
    20
    NaN -> 'this' keyword in arrow fnc points to window object and as there is no radius, therefore NaN is logged
    
    
    <----------------------------------------------------------->
    
    Q12. Destructuring

    let demo ={
        name: "Mohit",
        title:"Full stack Developer"
    }

    const {name}=demo;
    console.log(name)

    Output:
    Mohit




















    */
   