// WHAT IS DOM ?

// Document Object Modle


// DOCUMET :- A piece of paper is document ....


//WEB :- A browser screen is a document ...what ever we built we render on the screen


// OBJECT :- Object is an identity (ek poory herarki ko hm object kehty h ...parent and child relationship) 





// html minify             /// y website junk architect remove kry k liye (simple)




//(1)childNodes[1] ...childNodes[0] ...childNodes[2]


//(2)  .firstChild

//(3)  .nextSibling

//(4)  .lastChild

//(5)  .parentNode


//(6)   .nodeType    //DEFINE IN TWO PARAMETERS !!!  //FOR ELEMENT => 1....AND FOR JUNK => 3


//(7) .nodeName    /// <p></p> m sy "p" ajaye ga...


//(8)  .nodeValue


//(9)  document.all (or)   document.all[4]


//(10)  document.head













// ==================================================================================



// html minify    /// y website junk architect remove kry k liye (simple)



// ==================================================================================


// console.log(document.childNodes[0])


// -------------------------------------------------------------------------------------


// console.log(document.childNodes[1])


// -------------------------------------------------------------------------------------



// console.log(document.childNodes[1].childNodes[0])


// -------------------------------------------------------------------------------------

// console.log(document.childNodes[1].childNodes[1])           //#text => JÜNK Architects


// -------------------------------------------------------------------------------------


// console.log(document.childNodes[1].childNodes[1].childNodes[0])



// ==================================================================================


// var a = document.getElementById('pappa')
// console.log(a.childNodes[1])

// OR

// var a = document.getElementById('pappa')
// console.log(a.firstChild)

 // OR


// var a = document.getElementById('pappa')
// console.log(a.childNodes)                   //jitny bhi child h ...en childes ko get krny k liye 


// -------------------------------------------------------------------------------------


// var a = document.getElementById('firstSon')
// console.log(a.nextSibling)


// -------------------------------------------------------------------------------------



// var a = document.getElementById('pappa')
// console.log(a.lastChild)



// -------------------------------------------------------------------------------------

// var a = document.getElementById('secondSon')
// console.log(a.parentNode)


// ==================================================================================


// FOR NODETYPE :-

//  var a = document.getElementById('firstSon')
//  console.log(a.nodeType)

//  RESULT :- 1


// -------------------------------------------------------------------------------------


// var a = document.getElementById('firstSon')
// console.log(a.childNodes[0].nodeType)

// -------------------------------------------------------------------------------------

// var a = document.getElementById('firstSon')
// console.log(a.nodeName)



// ==================================================================================


// FOR NODEVALUE :-

// var a = document.getElementById('pappa')
// console.log(a.childNodes[0].nodeValue)


// ==================================================================================
              
            //              COMPLETE