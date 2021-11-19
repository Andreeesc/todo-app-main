function itemsLeft(){
  const itemsLeft = document.querySelector('.items-left')
  itemsLeft.innerHTML = `${todoList.getElementsByTagName('fieldset').length} items left`
}