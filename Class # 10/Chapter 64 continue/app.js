
      // ================================================================
               //    CHAPTER # 64 The DOM  Counting elements
      // ================================================================



// var list = document.getElementById("li1")

// console.log(list)


// ------------------------------------------------------------------------


// var list = document.getElementsByClassName("li")

// console.log(list)


// ------------------------------------------------------------------------


// var list = document.getElementsByTagName("li")

// console.log(list[2])


// ------------------------------------------------------------------------

// var list = document.getElementsByTagName("li")

// console.log(list.length)






//  =====================================================================================


            
         // ================================================================
                //    CHAPTER # 65:- The DOM : Attributes
         // ================================================================ 


        //  var target = document.getElementById('p1')

        //  if(target.hasAttribute('class')){
        //      alert('available')
        //  }else {
        //      alert('not available')
        //  }


// ------------------------------------------------------------------------


    // var target = document.getElementById('p1')

    // console.log(target.getAttribute('class'))

// ------------------------------------------------------------------------



    // var target = document.getElementById('p1')

    // console.log(target.setAttribute("class" , "blue"))           


// ------------------------------------------------------------------------






//  =====================================================================================


          
         // =====================================================================
                //  CHAPTER # 66:- The DOM : Attributes names and values
         // =====================================================================





    // var target = document.getElementById('p1')
    // console.log(target.attributes)




// ------------------------------------------------------------------------




// var target = document.getElementById('p1')


// console.log(target.attributes[0])

// console.log(target.attributes[1])

// console.log(target.attributes[2])





// ------------------------------------------------------------------------




// var target = document.getElementById('p1')


// console.log(target.attributes[0].nodeName)

// console.log(target.attributes[1].nodeName)

// console.log(target.attributes[2].nodeName)





// ------------------------------------------------------------------------





// var target = document.getElementById('p1')


// console.log(target.attributes[0].nodeValue)

// console.log(target.attributes[1].nodeValue)

// console.log(target.attributes[2].nodeValue)







//  =====================================================================================


          


         // =============================================================
                //  CHAPTER # 67:- The DOM : Adding nodes                    <===       "IMPORTANT CHAPTER"
         // =============================================================





// var p = document.createElement('p');

// console.log(p)



// ------------------------------------------------------------------------



// var p = document.createElement('img');

// console.log(p)


// ------------------------------------------------------------------------

// var p = document.createElement('h1');

// console.log(p)


// ------------------------------------------------------------------------

 //  QUESTION :-            HOW TO WRITE TEXT ?




// var p = document.createElement('p');
// var text = document.createTextNode('Hello World !')

// p.appendChild(text)

// console.log(p)



// ------------------------------------------------------------------------



// var p = document.createElement('p');
// var text = document.createTextNode('Hello Saylani !')

// p.appendChild(text)

// var main = document.getElementById("main")

// main.appendChild(p) ;                        // Acha idhr "innerHTML" nhi likhyn gy ...object kr ky kch agjye ga! .


