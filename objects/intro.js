/*Here are some questions on the topic "OBJECTS" in JS.

An object is described as a key value pair entity
example:

 const demo={
    name:"Mohit Pandey",
    title:"Full stack developer"
 }
 console.log(demo)
 {name: 'Mohit Pandey', title: 'Full stack developer'}
name:"Mohit Pandey"
title:"Full stack developer"
[[Prototype]]:Object

here we have an object named demo with two key value pair : where keys are "name" and "title" which have respective values "Mohit Pandey" and "Full stack developer" 

<----------------------------------------------------------->

To access specific key value pair , the syntax is:

console.log(demo.name) ---> Mohit Pandey

This logs the name property of the object demo

demo.name <-> demo["name"]



<----------------------------------------------------------->

To modify a specific pair:

demo.name="Mohit"
console.log(demo.name) --> Mohit


<----------------------------------------------------------->

To delete a specific pair:

delete demo.title
console.log(demo)
{name: 'Mohit'}
name:"Mohit"
[[Prototype]]:Object


<----------------------------------------------------------->






 */