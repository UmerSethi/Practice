
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
