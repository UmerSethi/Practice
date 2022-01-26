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



