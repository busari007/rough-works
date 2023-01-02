/*const person = {
    name: "William",
    age: 19,
    address: "12 stout Street",
    race: function(){  //object method 
        return this.name + " " + this.address; //this here refers to the current object youre in
    }
}
console.log(person.race());*/


//this.innerHTML changes the result of its own html element

/*function nameChange(){
    let text1 = "Hey";
    let text2 = "Busari";
    let text3 = text1.concat(" ",text2, " William");   //concat string method joins multiple strings
    document.getElementById("demo").innerHTML = text3;
}*/

/*const cars = ["Volvos ", 10, "Lexus"];
cars.push("Toyota");   //(arrayName).push() adds array element amd .pop() removes
console.log(cars); */

/*let d = new Date();
document.getElementById("demo").innerHTML = d.getMonth(); //This and .getDay are the only date methods that counts it based on array style
*/

/*let num = Math.random(); //generates a random number from 0 to 1
document.getElementById("demo").innerHTML = Math.trunc(num * 10); //Multiplies generated number by 10 then truncates 
*/

/*let x = new Date();

if(x.getHours() > 15){
    document.getElementById("demo").innerHTML = "Its past three";
}else if(x.getHours() < 15){                                           //else if only executes if the if before it is false
    document.getElementById("demo").innerHTML = "Its not three yet";
}
*/

/*let name = prompt("Whats your name?");
switch(name){
    case "William":    //switch accepts strings as cases
        alert("Fuck you William");
        break;
        case "Busari":
            alert("Fuck the busaris");
            break;
            default:       //default runs code when none of the conditions are met
                alert("Fuck you then");

}
*/

/*function myFunction(x,y,z){
    this.name = x;
    this.age = y;
    this.address = z;
}
myFunction.nation = "uwu";
let Person = new myFunction("Willam", 12, "Latina");
console.log(Person.name)
console.log(Person.nation);//You can only add a new property to a function constructor from its definition not mid way through code 
*/

/*const names = ["William", "Ngozi", "Ass"];
let text = "<ul>";
for(i = 0; i<names.length; i++){
    text += "<li>" + names[i] + "</li>"  //for loop to print shi in html using unordered lists
}
 text += "</ul";
 document.getElementById("demo").innerHTML = text;
 */

/*function myFunction(x,y,z){
    this.name = x;
    this.age = y;
    this.attire = z;
}
let names = new myFunction("Ngozi","My Love", "Yansh");
let text = "<ol>";
 for(let x in names){
    text += "<li>" + names[x] +"</li>";  //for in loop lopp through array objects and objects like constructors
 }
 text += "</ol>";
 function Name(){
     this.uwu = "My love crazy fr";
 }
 let text2 = new Name();
 document.getElementById("demo").innerHTML = text;
 document.getElementById("demo2").innerHTML = text2.uwu; 
 */



 let num = parseInt(document.getElementById("number").innerHTML);
 console.log(num);
 function handleIncrement(num){
       return num++;
 }
 function handleDecrement(num){
     return num--;
 }
 let number2 = num;
 console.log(number2);
 document.getElementById("number").innerHTML = num;

 