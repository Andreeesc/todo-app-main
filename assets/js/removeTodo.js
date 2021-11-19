const remove = document.querySelector('.remove')

remove.addEventListener('click', function(e){
  e.preventDefault()

  const fieldset = document.querySelector('fieldset')
  fieldset.style.display = 'none'
})