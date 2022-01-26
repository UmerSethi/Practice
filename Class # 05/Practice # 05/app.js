//                          CHAPTER # 31 (START)




//     ==============================================================================
//                CHAPTER # 31 :- Getting the current date and time
//     ==============================================================================

// var a = new Date()
// console.log (a)

// var b = a.toString();
// var c = b.slice(0,3)
// console.log(c)


                                 //the week start with sunday ...so the index of sunday is 0


//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];



// console.log(nameOfToday)





// ========================================================================================




//     ==========================================================================
//                CHAPTER # 32 :- Extracting parts of the date and time
//     ==========================================================================

// getHours gives you a number from 0 through 23 corresponding to midnight through 11
// p.m.
// var currentHrs = d.getHours();
// getMinutes gives you a number from 0 through 59.
// var currMins = d.getMinutes();
// getSeconds gives you a number from 0 through 59.
// var currSecs = d.getSeconds()
// getMilliseconds gives you a number from 0 through 999.
// var currMills = d.getMilliseconds();
// getTime gives you the number of milliseconds that have elapsed since midnight, Jan. 1,
// 1970.
// var millsSince = d.getTime();




// ========================================================================================




//     ==========================================================================
//                CHAPTER # 33 :- Specifying a date and time
//     ==========================================================================




// QUESTION # :- HOW TO CALCULATE AGE ?



// var dob = new Date("AUGUST 25,2001")
// var dobmili = dob.getTime();
// var today = new Date()
// var todaymili = today.getTime()

// var diff = todaymili-dobmili

// var diffyear = diff/(1000*60*60*24*30*12)
// var accuage = Math.floor(diffyear)


// console.log(dobmili)
// console.log(todaymili)
// console.log(diff)
// console.log(diffyear)
// console.log(accuage)

// -------------------------------------------------------------------------------

// FROM USER :-

// var dob = new Date (prompt("Enter your date of birth","Aug 25","2001"))
// var dobmili = dob.getTime();
// var today = new Date()
// var todaymili = today.getTime()

// var diff = todaymili-dobmili

// var diffyear = diff/(1000*60*60*24*30*12)
// var accuage = Math.floor(diffyear)

// document.write(diffyear)








// ========================================================================================




//     ==========================================================================
//                CHAPTER # 35 :-  Functions
//     ==========================================================================




// function greeting(){                                //   () => Parenthesis in which we define Parameters
//     alert("Hello Umer")                             //   function is a KEYWORD
// }                                                   // greeting => function name

// greeting()



// ---------------------------------------------------------------------------------

// function greeting(greet){             // greet => parameter
//     alert(greet)
// }

// greeting("Hello Basit");

// ---------------------------------------------------------------------------------

// function add (a,b,c){                 // 
//     alert(a+b+c)
// }

// add(5,8,11);                        // argument k through hm function ko values dy rhy thy....simple



// ---------------------------------------------------------------------------------

// RETURN                     // hm function sy value lety h ...simple



// function add(a,b,c){
//     var f = 15;
//     var z = a+b+c
//     return z;
// }

// var g = add(5,8,11)
// // alert(g)
// // alert(f)

// console.log(f)               /// IDHR EK ERROR GENERATE HOGA .....BECACE "f" is local variable means "f" is define in function



// ---------------------------------------------------------------------------------



//     =======================================================================================
//                CHAPTER # 38 :- Functions: Local vs. global variables
//     =======================================================================================

// GLOBAL & LOCAL VARIABLES :-

// GLOBAL VARIABLES : with in the function or globally...

// LOCAL VARIABLES : Only use inside the function ...not globaly use



//   (a)   GLOBAL VARIABLES :-

// var h = 15;                            //Global variable 

// function add(a,b,c){
//     alert(h)                         // here we call these global variable
//     var z = a+b+c;
//     return z;
// }

// var g = add(5,8,11)
// alert(g)






//   (b)     LOCAL VARIABLES :-

// function add(a,b,c){
//     var f = 15;
//     var z = a+b+c
//     return z;
// }

// var g = add(5,8,11)
// // alert(g)
// // alert(f)

// console.log(f)               /// IDHR EK ERROR GENERATE HOGA .....BECACE "f" is local variable means "f" is define in function


// ---------------------------------------------------------------------------------

// _________________________________
// FUNCTION OF AGE CALCULATOR :
// _________________________________


// function ageCalculator(){
//     var dob = new Date (prompt("Enter your date of birth","Aug 25","2001"))
// var dobmili = dob.getTime();
// var today = new Date()
// var todaymili = today.getTime()

// var diff = todaymili-dobmili

// var diffyear = diff/(1000*60*60*24*30*12)
// var accuage = Math.floor(diffyear)

// document.write(diffyear)
// }


// ageCalculator();                  //agr mujhe example ek koi application k banai h ...to m bar bar age calculator ka pura code nhi likhoon ga balky sirf fuction ko call kroon ga ....(SIMPLE)



// ----------------------------------------------------------------------------------------------------------------------------

// _________________
// CONCEPTUAL :-
// _________________







// var a = "Ghous"

// function foo (){
//     a = "Ahmed"
// }
// foo()
// console.log(a);



// -------------------------------------------------------------------------------------


// CALCULATOR USING FUNCTION :-


// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
//     }
//     else if (opr === "-"){
//         return num1 - num2
//     }else {
//         return "Incorrect operator"
//     }
// }

// var result =calc(5,"+",6);
// var result1 = calc(4,"-",7);
// var result2 = calc(3,"$",7);                    //INCORRECT OPERATOR

// console.log(result);
// console.log(result1);


// console.log(result2);                       //INCORRECT OPERATOR



// -----------------------------------------------------------------------------


//           AGR VALUE NA MILY TO DEFAULT VALUE UTHA LO ....


// function foo (a,b = 3){
//     return a+b
// }

// console.log(foo(2))   //







// ================================================================================================================












//        =================================================================================
//                      CHAPTER # 39 :- Switch Statements: How to start them
//        =================================================================================


// SWITCH CASE :

//                  IF = > Case ;
//                  else => default ;

//                  break => lagana zarori h ...werna sb kch run kr dega.




// EXAMPLE # 01 :

// var age = 20 ;
// switch(age){
//     case 20:
//         alert("Allow")
//         break;
//         default:
//             alert("Not allow")
//             break;
// }



// EXAMPLE # 02 :

// var name = "Basit"
// switch(name){
//     case "Ghous":
//         alert("Hello Ghous")
//         break;
//         case "Basit":
//             alert("Hello Basit")
//             break;
//             default:
//                 alert("Hello")

// }




                                                // CHAPTER # 40 
// =========================================================================================================







//        =================================================================================
//                                    " COMPLETE "
//        =================================================================================