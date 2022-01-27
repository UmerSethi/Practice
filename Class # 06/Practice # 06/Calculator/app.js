
                //    CALCULATOR

function getNumber(num){
    
// console.log(num)                            //sirf check krny k liye k Onclick py number chl rhy h ...k nhi (SIMPLE)

var result = document.getElementById('result')

result.value += num                            // "+" ka sign simple concatenation k liye use krna hota h .....

}



function clearResult(){
    
var result = document.getElementById('result')
result.value = ""                                  ///Jesy hi hm click kryn gy poora input empty hojaye ga....

}



function getResult(){
    var result = document.getElementById('result')

result.value =eval(result.value)                     //  <===  IMPORTANT EVAL


    // console.log(result.value)                    //sirf check krny k liye k Onclick py number chl rhy h ...k nhi (SIMPLE)
}