
// <!-- QUESTION : DISABLE CONCEPT !!! -->



// function disable(){
//     var btn = document.getElementById('example')
//     btn.disabled = true

// }


//  ================================================================================== 
//  ================================================================================== 
//  ================================================================================== 
//  ================================================================================== 



// function get(){
//     var p =document.getElementsByTagName('p')
//     console.log(p)
// }


// ----------------------------------------------------------------------------------



// function get(){
//     var p =document.getElementsByTagName('p')
//     console.log(p[0])
// }



// ----------------------------------------------------------------------------------


// function get(){
    
//     console.log(document.childNodes)
// }


// ----------------------------------------------------------------------------------



// function get(){
    
//     console.log(document.childNodes[0])
// }

// ----------------------------------------------------------------------------------


// function get(){
    
//     console.log(document.childNodes[1])
// }



//  ================================================================================== 
           
           
                    //  ADD TO CART FUNCTION

function addtocart(){

    var img = document.getElementById('product')
    var name =document.getElementById('name')
    var price =document.getElementById('price')

    var cartimg = document.getElementById('cart-product')
    var cartname =document.getElementById('cart-name')
    var cartprice =document.getElementById('cart-price')

    cartname.innerHTML = name.innerHTML
    cartprice.innerHTML = price.innerHTML
    cartimg.src = img.src

}