
var list = document.getElementById('list')

function addTodo(){
    
    var todo_item = document.getElementById('todo-item')

    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)

    li.appendChild(liText)

    li.appendChild(li)

    console.log(li)
  

}









//  =====================================================================================


                        // "END"      CHAPTER '30' TK COMPLETE



                         
 //        VIDEO DURATION : 2:44:01
 
 //               =====================
//                    CHAPTER # 18
 //               =====================
 

//  FOR LOOP :-

// var a;
// for(initialization , condition , increment){
//     document.write(a)
// }

// for (var b=1 ; b<=10; b++){
//     document.write(b + "<br>")
// }

// RESUTL:
//                 1
//                 2
//                 3
//                 4
//                 5
//                 6
//                 7
//                 8
//                 9
//                 10

// for(var b=10 ; b>=1 ; b--){
//     document.write(b)
// }


// PRACTICE :-

// for(var i = 0 ; i<=5 ;i++){
//     alert("Hello World!")
// }

// --------------------------------------------------------------

// document.write("2" + "x" + "1" + "=" + 2*1 + "<br>")
// document.write("2" + "x" + "2" + "=" + 2*2 + "<br>")
// document.write("2" + "x" + "3" + "=" + 2*3 + "<br>")
// document.write("2" + "x" + "4" + "=" + 2*4 + "<br>")
// document.write("2" + "x" + "5" + "=" + 2*5 + "<br>")


// for(var i=1 ; i<=10 ; i++){
//     document.write("2" + "x" + i + "=" + 2*i + "<br>" )
// }



// var names = ["Ghous","Basit","Fahad"]
// for( i = 0; i < names.length ; i++ ){
//     console.log(names[i])
// }



// var cities = ["Karachi","Isalamabad","Lahore", "Hyderabad","Sialkot"];
// for (var i=0; i < cities.length ; i++){
//     console.log(cities[i])
// }



// var cities = ["Karachi","Isalamabad","Lahore", "Hyderabad","Sialkot"];
// for (var i=0; i < cities.length ; i++){
//     if(cities[i]==="Karachi"){
//         alert(cities[i] +" "+ "is a cleanest city!")
//     }
// }



// ========================
//         BREAK :-
// ========================

// for (var i=0 ; i<10 ;i++){
//     if(i===5){
//         break;
//     }
//     console.log("hello")
// }




//  var cities = ["Karachi","Isalamabad","Lahore", "Hyderabad","Sialkot"];
// for (var i=0; i < cities.length ; i++){
//     if(cities[i]==="Karachi"){
        
//         alert(cities[i] +" "+ "is a cleanest city!")
//         break

//     }
// }


// ===========================================================

//   FOR NESTED LOOP :-

// for( i=0 ; i<5 ; i++){
//     for(var j= 0 ; j<3 ; j++){

//      document.write("Pakistan Zindabad" + "<br>")

//     }
// }





// var firstNames = ["Ghous" , "Basit" , "Fahad"]
// var lastNames = ["Ahmed"]

// for(var i=0 ; i<firstNames.length ; i++){
//     for(var x=0 ; x<lastNames.length; x++){
//         console.log(firstNames[i] +" " + lastNames[x])

//     }
// }


// ----------------------------------------------------------

// QUESTION # :
                
            //    How to Print Star ?

        //     for(var i = 0 ; i < 10 ; i++){
        //         for (var j = 0 ; j < i ; j++){
        //             document.write("*")
        //         }
        //   document.write("<br>")
        //     }



// -----------------------------------------------------------






                //   =============================
//                       PALINDROME WORD
                //   =============================

//   FOLLOWING ARE THE PALINDROME WORDS:-
                       
  //                      1) CIVIC
  //                      2) REFER
  //                      3)Bib. B-I-B. A fun clue for this palindrome word could be “it's something that a baby wears when they eat!”
  //                      4)Nun. N-U-N. ...
  //                      5) Madam. M-A-D-A-M. ...
  //                      6)Racecar. R-A-C-E-C-A-R. ...
  //                      7)Civic. C-I-V-I-C. ...
  //                      8)Deified. D-E-I-F-I-E-D. ...
  //                      9)Hannah. H-A-N-N-A-H. ...
  //                      10)Level. L-E-V-E-L.



// var word = prompt ("Enter Your Word");
// var check = "";
// for (var i = word.length - 1; i >= 0 ; i--){
//     check +=word[i]
// }
// if (word === check){
//     console.log(word +" "+ "is palindrome word")
// }
// else{
//     console.log(word +" "+ "is not a palindrome word...")
// }




//--------------------- --------------------------------------------------------





//          ======================================
//              CHAPTER # 21 : CHANGING CASE 
//          ======================================




// var name = "UMER";

// name = name.toLowerCase();

// console.log(name)



//--------------------- --------------------------------------------------------


           

// var name = "Muhammad Umer";


// console.log(name.indexOf("u"))