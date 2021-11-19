const clear = document.querySelector('.clear')

clear.addEventListener('click', function(e){
  e.preventDefault()

  todoList.innerHTML = ''
})