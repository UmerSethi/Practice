// WHAT IS DOM ?

// Document Object Modle

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