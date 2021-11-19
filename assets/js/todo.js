const todoInput = document.querySelector('#todo')
const todoList = document.querySelector('#todo-list')

todoInput.addEventListener('keyup', function(e){

  if(e.keyCode === 13){
    e.preventDefault()
    const todoNumber = `todo-${Math.round(Math.random() * 1000)}`
    const todoValue = todoInput.value

    const html = `
      <fieldset class="${todoNumber} active">
        <input type="checkbox" name="${todoNumber}" id="${todoNumber}">
        <span class="checkmark"></span>
        <label for="${todoNumber}">${todoValue}</label>
        <span class="remove ${todoNumber}">
          <img src="./assets/images/icon-cross.svg" alt="">
        </span>
      </fieldset>
    `
    todoList.innerHTML += html
    this.value = ''
  }

  itemsLeft()
})