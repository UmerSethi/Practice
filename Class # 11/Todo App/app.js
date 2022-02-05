
var list = document.getElementById('list')

function addTodo(){
    
    var todo_item = document.getElementById('todo-item')

    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)

    li.appendChild(liText)

    li.appendChild(li)

    console.log(li)
  

}









            
//                   ===========================

//                           VIDEO # 14 

//                   ===========================
            
            
            //  CHAPTER # 21


            // ===========================

                  //  CHANGING CASE

            // ===========================

// var City = prompt("Enter Your City Name : ")
// var arr = ["Karachi" , "Isalamabad" , "Peshawar"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
//         alert("City Has Found")
//     }else{
//         alert("City is Not Found !")
    // }
// }

                        //   OR  


// var City = prompt("Enter Your City Name : ")

// City = City.toLowerCase()                                        //toLowerCase()

// var arr = ["karachi" , "isalamabad" , "peshawar"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
//         alert("City Has Found")
//     }else{
//         alert("City is Not Found !")
//     }
// }





// var City = prompt("Enter Your City Name : ")

// City = City.toUpperCase()                                        //toUpperCase()

// var arr = ["KARACHI" , "ISLAMABAD" , "PESHAWAR"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
//         alert("City Has Found")
//     }else{
//         alert("City is Not Found !")
//     }
// }






// =====================================================================================




            
    // ==================================================== ==========================
  //             CHAPTER # 22 :- STRINGS MEASURING LENGTH & EXTRACTING PARTS
  //    ===============================================================================

//            WHAT IF USER TYPE UPPER & LOWER CASE BOTH IN ONE WORD?  
  


// var City = prompt("Enter Your City Name : ")
// var firstChar = City.slice(0,1);                          
//  firstChar = firstChar.toUpperCase()
// var otherChar = City.slice(1);
// otherChar = otherChar.toLowerCase()

// var City = firstChar + otherChar ;
// var found = "false"

// var arr = ["Karachi" , "Islamabad" , "Peshawar"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
   
//         alert("City Has Found")
//         found = "true"
               
//     }
    
// }

// if(found==="false"){
//     alert("not found")
// }



// ---------------------------------------------------------------------------------------------


// QUESTION :-

//  WRITE A CODE TO DETECT DOUBLE SPACE IN A SENTENCE ?    // ALERT IF USER USE DOUBLE SPACE IN A SENTENCE



// var str = prompt("Enter some text ....")
// var numChars = str.length;

// for( var i = 0 ; i < numChars ; i++){
//     if (str.slice(i , i+2 )==="  "){
//         alert("Double space are Found !")
//     }
// }






// =====================================================================================







//     ===============================================================================
//             CHAPTER # 23 :- STRINGS FINDING SEGMENTS
//     ===============================================================================

// CONTINUE.......

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
//      }





// var text = "The New Yorker magazine doesn't allow the phrase World War II."
// var indxNum = text.indexOf("World War II")

// console.log(indxNum)

// ---------------------------------------------------------------------------

// QUESTION # :
//       HOW TO REPLACE WORLD WAR II INTO SECOND WORLD WAR ?




// var text = "The New Yorker magazine doesn't allow the phrase World War II They say it new should"
// var indxNum = text.indexOf("World War II")
// var firstText = text.slice(0,indxNum)
// var repalcingText = "The Second World War"
// var thirdText = text.slice(indxNum+12)
// console.log(firstText+repalcingText+thirdText)

// console.log(thirdText)


// ---------------------------------------------------------------------------

// QUESITON :- 
//                   How to find index of last string ?



// var text = "The New Yorker magazine doesn't allow the phrase World War II They say it new should"
// var lastNum = text.lastIndexOf("new")
// console.log(lastNum)









// =====================================================================================







//     ===============================================================================
//             CHAPTER # 24 :- Strings: Finding a character at a location
//     ===============================================================================


//  charAt(indexnumber) :-

// var a = "Umer";
// console.log(a.charAt("3"))



















// =====================================================================================







//     ===============================================================================
//             CHAPTER # 25 :- Strings: Replacing characters
//     ===============================================================================



// var para = "This is Example" ;
// var para1 = para.replace("Example","Text");
// console.log(para1)

// ----------------------------------------------------------------------------------------



// QUESTION # :  IF WE WANT TO REPLACE ALL "Example" in paragraph what we should do ?

// var para = "This is Example , By these Example we solve these equation ";
// var para1 = para.replace(/Example/g,"Text");                // WE DONOT USE "" ...WE ONLY USE (/STRING1/g,"STRING2") 
// console.log(para1)

















//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 26 :- Rounding numbers
//     ===============================================================================



 //        (1) Math.round()
 //        (2) Math.ceil()
 //        (3) Math.floor()


// -------------------------------------------------------------------------



//   Math.round() :-

// EXAMPLE # 01 :-
// var num = 1.2 ;
// var round = Math.round(num) ;
// console.log(round) ;

// EXAMPLE # 02 :-
// var num = 1.6 ;
// var round = Math.round(num) ;
// console.log(round) ;










// -------------------------------------------------------------------------





// Math.ceil()                                         //BIGGEST NUMBER

// EXAMPLE # 01 :-
// var num = 1.2 ;
// var round = Math.ceil(num) ;
// console.log(round) ;

// result = > 2






// -------------------------------------------------------------------------






// Math.floor()                                         //SMALLEST NUMBER

// EXAMPLE # 01 :-
// var num = 1.2 ;
// var round = Math.floor(num) ;
// console.log(round) ;

// result => 1



// EXAMPLE # 02 :-
// var num = 1.6 ;
// var round = Math.floor(num) ;
// console.log(round) ;

// result => 1















//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 27 :- Generating random numbers
//     ===============================================================================


// EXAMPLE # 01 :

// Math.random()

// EXAMPLE # 02 :

// Math.random() * 2

// ---------------------------------------------------------------------------------------


// =============================
    //    GAME 
// =============================


// var headUsers = prompt("Enter heads username")
// var tailsUser = prompt("Enter tails username")

// var toss = Math.random() * 2;

// var floor = Math.floor(toss);

// if(floor === 0){
//     alert("Head" +headUsers +"win the toss")
//  }else{
//      alert("Tails" + tailsUser +"win the toss")
//  }













//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 28 :- Converting strings to integers and decimals
//     ===============================================================================


// Number("10")

// parseInt("10")










//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 29 :- Converting strings to numbers, numbers to strings
//     ===============================================================================




// .toString() :-


// var num = 10;
// console.log(num.toString())





//  =====================================================================================




//     ===============================================================================
//             CHAPTER # 30 :- Controlling the length of decimals
//     ===============================================================================



// .toFixed()                                //to control decimal point & round the value also

// var num = 10.545454545454;
// var cont = num.toFixed(2)
// console.log(cont)








//  =====================================================================================


                        // "END"      CHAPTER '30' TK COMPLETE







                                    
//                   ===========================

//                           VIDEO # 14 

//                   ===========================
            
            
            //  CHAPTER # 21


            // ===========================

                  //  CHANGING CASE

            // ===========================

// var City = prompt("Enter Your City Name : ")
// var arr = ["Karachi" , "Isalamabad" , "Peshawar"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
//         alert("City Has Found")
//     }else{
//         alert("City is Not Found !")
    // }
// }

                        //   OR  


// var City = prompt("Enter Your City Name : ")

// City = City.toLowerCase()                                        //toLowerCase()

// var arr = ["karachi" , "isalamabad" , "peshawar"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
//         alert("City Has Found")
//     }else{
//         alert("City is Not Found !")
//     }
// }





// var City = prompt("Enter Your City Name : ")

// City = City.toUpperCase()                                        //toUpperCase()

// var arr = ["KARACHI" , "ISLAMABAD" , "PESHAWAR"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
//         alert("City Has Found")
//     }else{
//         alert("City is Not Found !")
//     }
// }






// =====================================================================================




            
    // ==================================================== ==========================
  //             CHAPTER # 22 :- STRINGS MEASURING LENGTH & EXTRACTING PARTS
  //    ===============================================================================

//            WHAT IF USER TYPE UPPER & LOWER CASE BOTH IN ONE WORD?  
  


// var City = prompt("Enter Your City Name : ")
// var firstChar = City.slice(0,1);                          
//  firstChar = firstChar.toUpperCase()
// var otherChar = City.slice(1);
// otherChar = otherChar.toLowerCase()

// var City = firstChar + otherChar ;
// var found = "false"

// var arr = ["Karachi" , "Islamabad" , "Peshawar"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
   
//         alert("City Has Found")
//         found = "true"
               
//     }
    
// }

// if(found==="false"){
//     alert("not found")
// }



// ---------------------------------------------------------------------------------------------


// QUESTION :-

//  WRITE A CODE TO DETECT DOUBLE SPACE IN A SENTENCE ?    // ALERT IF USER USE DOUBLE SPACE IN A SENTENCE



// var str = prompt("Enter some text ....")
// var numChars = str.length;

// for( var i = 0 ; i < numChars ; i++){
//     if (str.slice(i , i+2 )==="  "){
//         alert("Double space are Found !")
//     }
// }






// =====================================================================================







//     ===============================================================================
//             CHAPTER # 23 :- STRINGS FINDING SEGMENTS
//     ===============================================================================

// CONTINUE.......

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
//      }





// var text = "The New Yorker magazine doesn't allow the phrase World War II."
// var indxNum = text.indexOf("World War II")

// console.log(indxNum)

// ---------------------------------------------------------------------------

// QUESTION # :
//       HOW TO REPLACE WORLD WAR II INTO SECOND WORLD WAR ?




// var text = "The New Yorker magazine doesn't allow the phrase World War II They say it new should"
// var indxNum = text.indexOf("World War II")
// var firstText = text.slice(0,indxNum)
// var repalcingText = "The Second World War"
// var thirdText = text.slice(indxNum+12)
// console.log(firstText+repalcingText+thirdText)

// console.log(thirdText)


// ---------------------------------------------------------------------------

// QUESITON :- 
//                   How to find index of last string ?



// var text = "The New Yorker magazine doesn't allow the phrase World War II They say it new should"
// var lastNum = text.lastIndexOf("new")
// console.log(lastNum)









// =====================================================================================







//     ===============================================================================
//             CHAPTER # 24 :- Strings: Finding a character at a location
//     ===============================================================================


//  charAt(indexnumber) :-

// var a = "Umer";
// console.log(a.charAt("3"))



















// =====================================================================================







//     ===============================================================================
//             CHAPTER # 25 :- Strings: Replacing characters
//     ===============================================================================



// var para = "This is Example" ;
// var para1 = para.replace("Example","Text");
// console.log(para1)

// ----------------------------------------------------------------------------------------



// QUESTION # :  IF WE WANT TO REPLACE ALL "Example" in paragraph what we should do ?

// var para = "This is Example , By these Example we solve these equation ";
// var para1 = para.replace(/Example/g,"Text");                // WE DONOT USE "" ...WE ONLY USE (/STRING1/g,"STRING2") 
// console.log(para1)

















//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 26 :- Rounding numbers
//     ===============================================================================



 //        (1) Math.round()
 //        (2) Math.ceil()
 //        (3) Math.floor()


// -------------------------------------------------------------------------



//   Math.round() :-

// EXAMPLE # 01 :-
// var num = 1.2 ;
// var round = Math.round(num) ;
// console.log(round) ;

// EXAMPLE # 02 :-
// var num = 1.6 ;
// var round = Math.round(num) ;
// console.log(round) ;










// -------------------------------------------------------------------------





// Math.ceil()                                         //BIGGEST NUMBER

// EXAMPLE # 01 :-
// var num = 1.2 ;
// var round = Math.ceil(num) ;
// console.log(round) ;

// result = > 2






// -------------------------------------------------------------------------






// Math.floor()                                         //SMALLEST NUMBER

// EXAMPLE # 01 :-
// var num = 1.2 ;
// var round = Math.floor(num) ;
// console.log(round) ;

// result => 1



// EXAMPLE # 02 :-
// var num = 1.6 ;
// var round = Math.floor(num) ;
// console.log(round) ;

// result => 1















//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 27 :- Generating random numbers
//     ===============================================================================


// EXAMPLE # 01 :

// Math.random()

// EXAMPLE # 02 :

// Math.random() * 2

// ---------------------------------------------------------------------------------------


// =============================
    //    GAME 
// =============================


// var headUsers = prompt("Enter heads username")
// var tailsUser = prompt("Enter tails username")

// var toss = Math.random() * 2;

// var floor = Math.floor(toss);

// if(floor === 0){
//     alert("Head" +headUsers +"win the toss")
//  }else{
//      alert("Tails" + tailsUser +"win the toss")
//  }













//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 28 :- Converting strings to integers and decimals
//     ===============================================================================


// Number("10")

// parseInt("10")










//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 29 :- Converting strings to numbers, numbers to strings
//     ===============================================================================




// .toString() :-


// var num = 10;
// console.log(num.toString())





//  =====================================================================================




//     ===============================================================================
//             CHAPTER # 30 :- Controlling the length of decimals
//     ===============================================================================



// .toFixed()                                //to control decimal point & round the value also

// var num = 10.545454545454;
// var cont = num.toFixed(2)
// console.log(cont)








//  =====================================================================================


                        // "END"      CHAPTER '30' TK COMPLETE
            
//                   ===========================

//                           VIDEO # 14 

//                   ===========================
            
            
            //  CHAPTER # 21


            // ===========================

                  //  CHANGING CASE

            // ===========================

// var City = prompt("Enter Your City Name : ")
// var arr = ["Karachi" , "Isalamabad" , "Peshawar"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
//         alert("City Has Found")
//     }else{
//         alert("City is Not Found !")
    // }
// }

                        //   OR  


// var City = prompt("Enter Your City Name : ")

// City = City.toLowerCase()                                        //toLowerCase()

// var arr = ["karachi" , "isalamabad" , "peshawar"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
//         alert("City Has Found")
//     }else{
//         alert("City is Not Found !")
//     }
// }





// var City = prompt("Enter Your City Name : ")

// City = City.toUpperCase()                                        //toUpperCase()

// var arr = ["KARACHI" , "ISLAMABAD" , "PESHAWAR"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
//         alert("City Has Found")
//     }else{
//         alert("City is Not Found !")
//     }
// }






// =====================================================================================




            
    // ==================================================== ==========================
  //             CHAPTER # 22 :- STRINGS MEASURING LENGTH & EXTRACTING PARTS
  //    ===============================================================================

//            WHAT IF USER TYPE UPPER & LOWER CASE BOTH IN ONE WORD?  
  


// var City = prompt("Enter Your City Name : ")
// var firstChar = City.slice(0,1);                          
//  firstChar = firstChar.toUpperCase()
// var otherChar = City.slice(1);
// otherChar = otherChar.toLowerCase()

// var City = firstChar + otherChar ;
// var found = "false"

// var arr = ["Karachi" , "Islamabad" , "Peshawar"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
   
//         alert("City Has Found")
//         found = "true"
               
//     }
    
// }

// if(found==="false"){
//     alert("not found")
// }



// ---------------------------------------------------------------------------------------------


// QUESTION :-

//  WRITE A CODE TO DETECT DOUBLE SPACE IN A SENTENCE ?    // ALERT IF USER USE DOUBLE SPACE IN A SENTENCE



// var str = prompt("Enter some text ....")
// var numChars = str.length;

// for( var i = 0 ; i < numChars ; i++){
//     if (str.slice(i , i+2 )==="  "){
//         alert("Double space are Found !")
//     }
// }






// =====================================================================================







//     ===============================================================================
//             CHAPTER # 23 :- STRINGS FINDING SEGMENTS
//     ===============================================================================

// CONTINUE.......

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
//      }





// var text = "The New Yorker magazine doesn't allow the phrase World War II."
// var indxNum = text.indexOf("World War II")

// console.log(indxNum)

// ---------------------------------------------------------------------------

// QUESTION # :
//       HOW TO REPLACE WORLD WAR II INTO SECOND WORLD WAR ?




// var text = "The New Yorker magazine doesn't allow the phrase World War II They say it new should"
// var indxNum = text.indexOf("World War II")
// var firstText = text.slice(0,indxNum)
// var repalcingText = "The Second World War"
// var thirdText = text.slice(indxNum+12)
// console.log(firstText+repalcingText+thirdText)

// console.log(thirdText)


// ---------------------------------------------------------------------------

// QUESITON :- 
//                   How to find index of last string ?



// var text = "The New Yorker magazine doesn't allow the phrase World War II They say it new should"
// var lastNum = text.lastIndexOf("new")
// console.log(lastNum)









// =====================================================================================







//     ===============================================================================
//             CHAPTER # 24 :- Strings: Finding a character at a location
//     ===============================================================================


//  charAt(indexnumber) :-

// var a = "Umer";
// console.log(a.charAt("3"))



















// =====================================================================================







//     ===============================================================================
//             CHAPTER # 25 :- Strings: Replacing characters
//     ===============================================================================



// var para = "This is Example" ;
// var para1 = para.replace("Example","Text");
// console.log(para1)

// ----------------------------------------------------------------------------------------



// QUESTION # :  IF WE WANT TO REPLACE ALL "Example" in paragraph what we should do ?

// var para = "This is Example , By these Example we solve these equation ";
// var para1 = para.replace(/Example/g,"Text");                // WE DONOT USE "" ...WE ONLY USE (/STRING1/g,"STRING2") 
// console.log(para1)

















//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 26 :- Rounding numbers
//     ===============================================================================



 //        (1) Math.round()
 //        (2) Math.ceil()
 //        (3) Math.floor()


// -------------------------------------------------------------------------



//   Math.round() :-

// EXAMPLE # 01 :-
// var num = 1.2 ;
// var round = Math.round(num) ;
// console.log(round) ;

// EXAMPLE # 02 :-
// var num = 1.6 ;
// var round = Math.round(num) ;
// console.log(round) ;










// -------------------------------------------------------------------------





// Math.ceil()                                         //BIGGEST NUMBER

// EXAMPLE # 01 :-
// var num = 1.2 ;
// var round = Math.ceil(num) ;
// console.log(round) ;

// result = > 2






// -------------------------------------------------------------------------






// Math.floor()                                         //SMALLEST NUMBER

// EXAMPLE # 01 :-
// var num = 1.2 ;
// var round = Math.floor(num) ;
// console.log(round) ;

// result => 1



// EXAMPLE # 02 :-
// var num = 1.6 ;
// var round = Math.floor(num) ;
// console.log(round) ;

// result => 1















//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 27 :- Generating random numbers
//     ===============================================================================


// EXAMPLE # 01 :

// Math.random()

// EXAMPLE # 02 :

// Math.random() * 2

// ---------------------------------------------------------------------------------------


// =============================
    //    GAME 
// =============================


// var headUsers = prompt("Enter heads username")
// var tailsUser = prompt("Enter tails username")

// var toss = Math.random() * 2;

// var floor = Math.floor(toss);

// if(floor === 0){
//     alert("Head" +headUsers +"win the toss")
//  }else{
//      alert("Tails" + tailsUser +"win the toss")
//  }













//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 28 :- Converting strings to integers and decimals
//     ===============================================================================


// Number("10")

// parseInt("10")










//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 29 :- Converting strings to numbers, numbers to strings
//     ===============================================================================




// .toString() :-


// var num = 10;
// console.log(num.toString())





//  =====================================================================================




//     ===============================================================================
//             CHAPTER # 30 :- Controlling the length of decimals
//     ===============================================================================



// .toFixed()                                //to control decimal point & round the value also

// var num = 10.545454545454;
// var cont = num.toFixed(2)
// console.log(cont)








//  =====================================================================================


                        // "END"      CHAPTER '30' TK COMPLETE

                                    
//                   ===========================

//                           VIDEO # 14 

//                   ===========================
            
            
            //  CHAPTER # 21


            // ===========================

                  //  CHANGING CASE

            // ===========================

// var City = prompt("Enter Your City Name : ")
// var arr = ["Karachi" , "Isalamabad" , "Peshawar"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
//         alert("City Has Found")
//     }else{
//         alert("City is Not Found !")
    // }
// }

                        //   OR  


// var City = prompt("Enter Your City Name : ")

// City = City.toLowerCase()                                        //toLowerCase()

// var arr = ["karachi" , "isalamabad" , "peshawar"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
//         alert("City Has Found")
//     }else{
//         alert("City is Not Found !")
//     }
// }





// var City = prompt("Enter Your City Name : ")

// City = City.toUpperCase()                                        //toUpperCase()

// var arr = ["KARACHI" , "ISLAMABAD" , "PESHAWAR"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
//         alert("City Has Found")
//     }else{
//         alert("City is Not Found !")
//     }
// }






// =====================================================================================




            
    // ==================================================== ==========================
  //             CHAPTER # 22 :- STRINGS MEASURING LENGTH & EXTRACTING PARTS
  //    ===============================================================================

//            WHAT IF USER TYPE UPPER & LOWER CASE BOTH IN ONE WORD?  
  


// var City = prompt("Enter Your City Name : ")
// var firstChar = City.slice(0,1);                          
//  firstChar = firstChar.toUpperCase()
// var otherChar = City.slice(1);
// otherChar = otherChar.toLowerCase()

// var City = firstChar + otherChar ;
// var found = "false"

// var arr = ["Karachi" , "Islamabad" , "Peshawar"]

// for (var i = 0 ; i < City.length ; i++){
//     if(arr[i] === City){
   
//         alert("City Has Found")
//         found = "true"
               
//     }
    
// }

// if(found==="false"){
//     alert("not found")
// }



// ---------------------------------------------------------------------------------------------


// QUESTION :-

//  WRITE A CODE TO DETECT DOUBLE SPACE IN A SENTENCE ?    // ALERT IF USER USE DOUBLE SPACE IN A SENTENCE



// var str = prompt("Enter some text ....")
// var numChars = str.length;

// for( var i = 0 ; i < numChars ; i++){
//     if (str.slice(i , i+2 )==="  "){
//         alert("Double space are Found !")
//     }
// }






// =====================================================================================







//     ===============================================================================
//             CHAPTER # 23 :- STRINGS FINDING SEGMENTS
//     ===============================================================================

// CONTINUE.......

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
//      }





// var text = "The New Yorker magazine doesn't allow the phrase World War II."
// var indxNum = text.indexOf("World War II")

// console.log(indxNum)

// ---------------------------------------------------------------------------

// QUESTION # :
//       HOW TO REPLACE WORLD WAR II INTO SECOND WORLD WAR ?




// var text = "The New Yorker magazine doesn't allow the phrase World War II They say it new should"
// var indxNum = text.indexOf("World War II")
// var firstText = text.slice(0,indxNum)
// var repalcingText = "The Second World War"
// var thirdText = text.slice(indxNum+12)
// console.log(firstText+repalcingText+thirdText)

// console.log(thirdText)


// ---------------------------------------------------------------------------

// QUESITON :- 
//                   How to find index of last string ?



// var text = "The New Yorker magazine doesn't allow the phrase World War II They say it new should"
// var lastNum = text.lastIndexOf("new")
// console.log(lastNum)









// =====================================================================================







//     ===============================================================================
//             CHAPTER # 24 :- Strings: Finding a character at a location
//     ===============================================================================


//  charAt(indexnumber) :-

// var a = "Umer";
// console.log(a.charAt("3"))



















// =====================================================================================







//     ===============================================================================
//             CHAPTER # 25 :- Strings: Replacing characters
//     ===============================================================================



// var para = "This is Example" ;
// var para1 = para.replace("Example","Text");
// console.log(para1)

// ----------------------------------------------------------------------------------------



// QUESTION # :  IF WE WANT TO REPLACE ALL "Example" in paragraph what we should do ?

// var para = "This is Example , By these Example we solve these equation ";
// var para1 = para.replace(/Example/g,"Text");                // WE DONOT USE "" ...WE ONLY USE (/STRING1/g,"STRING2") 
// console.log(para1)

















//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 26 :- Rounding numbers
//     ===============================================================================



 //        (1) Math.round()
 //        (2) Math.ceil()
 //        (3) Math.floor()


// -------------------------------------------------------------------------



//   Math.round() :-

// EXAMPLE # 01 :-
// var num = 1.2 ;
// var round = Math.round(num) ;
// console.log(round) ;

// EXAMPLE # 02 :-
// var num = 1.6 ;
// var round = Math.round(num) ;
// console.log(round) ;










// -------------------------------------------------------------------------





// Math.ceil()                                         //BIGGEST NUMBER

// EXAMPLE # 01 :-
// var num = 1.2 ;
// var round = Math.ceil(num) ;
// console.log(round) ;

// result = > 2






// -------------------------------------------------------------------------






// Math.floor()                                         //SMALLEST NUMBER

// EXAMPLE # 01 :-
// var num = 1.2 ;
// var round = Math.floor(num) ;
// console.log(round) ;

// result => 1



// EXAMPLE # 02 :-
// var num = 1.6 ;
// var round = Math.floor(num) ;
// console.log(round) ;

// result => 1















//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 27 :- Generating random numbers
//     ===============================================================================


// EXAMPLE # 01 :

// Math.random()

// EXAMPLE # 02 :

// Math.random() * 2

// ---------------------------------------------------------------------------------------


// =============================
    //    GAME 
// =============================


// var headUsers = prompt("Enter heads username")
// var tailsUser = prompt("Enter tails username")

// var toss = Math.random() * 2;

// var floor = Math.floor(toss);

// if(floor === 0){
//     alert("Head" +headUsers +"win the toss")
//  }else{
//      alert("Tails" + tailsUser +"win the toss")
//  }













//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 28 :- Converting strings to integers and decimals
//     ===============================================================================


// Number("10")

// parseInt("10")










//  =====================================================================================







//     ===============================================================================
//             CHAPTER # 29 :- Converting strings to numbers, numbers to strings
//     ===============================================================================




// .toString() :-


// var num = 10;
// console.log(num.toString())





//  =====================================================================================




//     ===============================================================================
//             CHAPTER # 30 :- Controlling the length of decimals
//     ===============================================================================



// .toFixed()                                //to control decimal point & round the value also

// var num = 10.545454545454;
// var cont = num.toFixed(2)
// console.log(cont)








//  =====================================================================================


                        // "END"      CHAPTER '30' TK COMPLETE



