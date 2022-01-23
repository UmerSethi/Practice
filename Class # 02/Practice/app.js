                    // CHAPTER 09 SY CONTINUE

                    // PROMPT

//      // var a = prompt("Enter Your Age","Your age is : ");
//      alert(a)


// var a = prompt("Enter Value","Your value is : ");
// var b =a + 10;
// console.log("The output is: "+ " " +b)

// //prompt hmesha string m value ly ga ....es liye prompt sy phly hmesha "+" lagy ga 
// var a = +prompt("Enter Value","Your value is : ");
// var b =a + 10;
// console.log("The output is: "+ " " +b)
//     //  OR
// var a = prompt("Enter Value","Your value is : ");
// var b = +a + 10; // <====es line m goor kro
// console.log("The output is: "+ " " +b)

// ================================================================================================

        //    document.write

// var x = "Enter value";
// var y ="Your value is : "
// var a = +prompt(x,y);
// var b = a+10;
// document.write("The Output is" +" " + b)

// ================================================================================================

                // CONDITIONAL STATEMENTS


//       =>                = "assigning operator"
//       =>               ==     "actual equals to in javascript"




// var age = 16;
// if(age==28){
//     alert("Your age is less")
// }
// else{
//     alert("You are no more with less age")
// }



// var age = 16;
// if(age < 18){
//     alert("Your age is less")
// }
// else{
//     alert("You are no more with less age")
// }




// var age =+prompt("Enter Your age: ");
// if(age == 14 ){
//     alert("Your age is equal")
// }                                                               // ELSE IF (for multiple conditions)
// else if(age < 14 ){
//     alert("Your age is equal")
// }
// else{
//     alert("You age is more")
// }



// var age =+prompt("Enter Your age : ")
// var gender = prompt("Enter Your gender: ")
// if( age > 18 && gender == "male"){                        // && OPERATOR ...|| OPERATOR
//     alert("You are allowed to ride...")
// }
// else{
//     alert("You are not allowed !!! ")
// }


 // "==" only check values not check type
// var a = "5" ;
// if (a==5){                           // "==" only check values not check type....."===" check value and also type
// alert("True")
// }
// else{
//     alert("False")
// }




// "===" check value and also type
// var a = "5" ;
// if (a===5){                           // "===" check value and also type..."==" only check values not check type
// alert("True")
// }
// else{
//     alert("False")
// }




// var x = 5;
// var y = 10;
// var a = 30;
// var b = 15;
// if (x+y === a-b){
//     alert("Correct")
// }
// else{
//     alert("Incorrect")
// }



//                         // !==              

// var a = 10;
// if (a !== 15){
//     document.write("Correct")
// }
// else{
//     document.write("Incorrect")
// }



                            //   MARKSHEET

// var percentage = +prompt("Enter your percentage ")

// if (percentage >= 80 && percentage <= 100){
//     alert("A+")
// }

// else if (percentage >= 70 && percentage <=80){
//     alert("A")
// }

// else if (percentage >= 60 && percentage <=70){
//     alert("B")
// }

// else if (percentage >= 50 && percentage <=60){
//     alert("C")
// }

// else if (percentage >= 40 && percentage <=50){
//     alert("D")
// }

// else if (percentage >= 33 && percentage <=40){
//     alert("E")
// }

// else if (percentage >= 0 && percentage <=33){
//     alert("F")
// }

// =================================================================================

// CHAPTER # 14 : 
                 
                    //  NESTED IF   ..............IF Statement Nested


// =================================================================================
                

                //  ARRAY

//  var name = "Ghous";
//  var name1 = "Basit";
//  var name2 = "Ali";                             
                                                          //Array ki wajh sy Line of Code bach jaty h ...


//  var students = [ "Ghous" , "Basit" , "Ali"]             
//  alert ("Welcome" +" "+ students[1])


    //    HOW TO ASSIGN VALUE IN ARRAY

// var names = [];

// names[0] = "Ghous";
// names[1] ="Ahmed";
// names[2] = "Ali";

// console.log(names)

// ============================
                            //    PROPERTIES

//  var students = [ "Ghous" , "Basit" , "Ali"]             

//  students.pop()               // remove end value

//  students.push("Bilal","Zuhaib")   // push value to end
 
// console.log(students)

// =============================

//  var students = [ "Ghous" , "Basit" , "Ali"]             

//  students.shift()     // remove elements from start
//  students.unshift("Bilal","Zuhaib")       // Add some value in the start of the array

//  console.log(students)

// =============================

// var students = [ "Ghous" , "Basit" , "Ali"]             


// SPLICE:-                      
// students.splice(1,1)       // (Starting Point , Deleting Counting , String)              



// SLICE :-
// var copyStudents = students.slice(1,4)         //(Starting Point,Ending Point)
                                                    // (Index number,Length)
                                                    //For the copy use Slice

//  console.log(students)
// console.log(copyStudents)



//                         =============================

//                           CHAPTER # 17 => COMPLETE

//                         =============================
