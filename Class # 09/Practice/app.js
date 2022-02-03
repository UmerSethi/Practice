
// Video Duration :- 2:23:33

// Video Number : 21


// (1) setInterval => repeatively running => 2 arguments first function & and second time in milliseconds

// (2) setTimeOut => after sometime




// ======================================================================================



// function timer(){
//     console.log('running...')
// }

// setInterval(timer,1000)





// ======================================================================================




// function timeOut(){                       

//     console.log('running...')
// }

// setTimeout(timeOut,3000)                //Ek mrtaba chly ga bs wo bhi mention kiye wy time py sirf , jesa k idhr mention kiya hoa h 3 seconds ...osky bad nhi 


// ======================================================================================


var count = 0;
var interval ;

function timer(){
    count++
    console.log(count)
}



interval = setInterval(timer,1000)

setTimeout(function(){

clearInterval(interval)

    },5000)