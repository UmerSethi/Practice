                        
                    //  =================================   
                        //    OBJECT DESTRUCTURING
                    //  =================================   

// let obj = {
//     name : "ALI",
//     email : "m.umersethi91@gmail.com",
//     age : "18"

// }

// let { name , email , age} = obj;

// console.log(age)


// ============================================================================================

    
                    //  =================================   
                        //    ARRAY DESTRUCTURING
                    //  =================================   



// let arr = ["ghous","basit","umair"]

// // let name1 = arr[0];
// // let name2 = arr[1];

// // or

// let [name1, name2, name3] = arr;


// console.log(name2);



// ============================================================================================



                    //  ====================================   
                        //    Function Expressions
                    //  ====================================  



// let foo = function(){
//     console.log("Hello World")
// }

// foo()



// ============================================================================================
// ============================================================================================
// ============================================================================================





                    //  ====================================   
                        //      Arrow Function 
                    //  ====================================  


// let hello = ()=>{
//     console.log("Hi i am arrow function !")
// }

// hello()


// ------------------------------------------

// let hello = name=>{
//     console.log(`hello ${name}`)
// }

// hello("Umer")

// ------------------------------------------


// let hello = (name1,name2) => {
//     console.log(`Hello ${name1} and ${name2}`)
// }

// hello("Umer","Ali")

// ------------------------------------------

// let hello = () => {
//     return "Umer"
// }

// hello()

// ------------------------------------------


// let hello = () => "Umer"

// console.log(hello())



// ============================================================================================




// setInterval(()=> console.log("hello"),1000)



// ============================================================================================





                    //  ====================================   
                        //      Array Functions 
                    //  ====================================  



// let arr = [{name: "ghous", age: 20}, {name: "basit", age:30}]


// let filter = arr.filter(function(a){
//     return true
// })

// console.log(filter)


// ------------------------------------------------------------



// let arr = [{name: "ghous", age: 20}, {name: "basit", age:30}]


// let filter = arr.filter(function(a){
//     return a.age === 20
// })

// console.log(filter)


// ------------------------------------------------------------



// let arr = [{name: "ghous", age: 20}, {name: "basit", age:30}]


// let filter = arr.filter( a => false)

// console.log(filter)

// ------------------------------------------------------------




// let arr = [{name: "ghous", age: 20}, {name: "basit", age:30}]


// let filter = arr.filter(a => a => true)

// console.log(filter)

// ------------------------------------------------------------

//  let arr = [{name: "ghous", age: 20}, {name: "basit", age:30}]


// let filter = arr.filter(a => a.age === 20 )

// console.log(filter)

// ------------------------------------------------------------


// let arr = [{name: "ghous", age: 20}, {name: "basit", age:30}]


// let filter = arr.filter(a => a.age > 10 )

// console.log(filter)


// ------------------------------------------------------------

// ============================================================================================





                    //  ====================================   
                        //      Search 
                    //  ====================================  



// let name = "ghous"
// let search ="gh"

// console.log(name.startsWith(search))


// ------------------------------------------------------------

// let name = "ghous";
// let search = "";

// if (search.startsWith(name)){
//     console.log(name)
// }


// ------------------------------------------------------------


// let name = "ghous";
// let search = "g";

// if (search.startsWith(name)){
//     console.log(name)
// }


// ------------------------------------------------------------


// let name = "ghous";
// let search = "s";

// if(name.endsWith(search)){
//     console.log(name)
// }




// ============================================================================================





                    //  ====================================   
                        //       Array Map
                    //  ====================================  


// let arr = [2,3,4,5];

// console.log(arr)

// let multiply = arr.map(a => a * 2)

// console.log(multiply)

// ------------------------------------------------------------


// let arr = [{name: "ghous"},{name: "basit"}];

// console.log(arr)

// let multiply = arr.map(a => a.name = "umair")

// console.log(multiply)

// ------------------------------------------------------------


// let arr = [{name: "ghous"},{name: "basit"}];

// console.log(arr)

// let multiply = arr.map(a => {
//     document.getElementById("table").innerHTML = a.name
// })

// console.log(multiply)




// ------------------------------------------------------------
