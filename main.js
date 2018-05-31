document.querySelector("#reset-field button")
.addEventListener('click',function eraseContent(){
  // TASK #1
  var boxContentEl = document.querySelector('.ex1-text')
  boxContentEl.value = ''

})


document.querySelector("#validate-field button")
.addEventListener('click',function(){
  // TASK #2
  var boxContentEl = document.querySelector('#validate-field .answer-box input')
  var userInput = boxContentEl.value
  var validationBoxEl = document.querySelector('.flash-message')


  if (userInput.length<7) {
    validationBoxEl.classList.remove('valid')
    validationBoxEl.innerHTML = "Input not long enough"
    validationBoxEl.classList.add('invalid')
  }

  else {
    validationBoxEl.classList.remove('invalid')
    validationBoxEl.innerHTML = "Field valid"
    validationBoxEl.classList.add('valid')
  }

})







document.querySelector("#calculate-items button")
.addEventListener('click',function(){
  // TASK #3
var itemsListEl = document.querySelectorAll('.cars-list input')
var totalSumEl = document.querySelector('.sum-total')
var totalCheckSum = 0

itemsListEl.forEach(function isItChecked(el){

  if (el.checked === true) {
      var selectedItemPrice = el.value
      totalCheckSum = totalCheckSum + selectedItemPrice
    }

  if (el.checked === false) {
      totalCheckSum = totalCheckSum + 0
    }

  })

totalSumEl.innerHTML = `$ ${totalCheckSum}`

})


document.querySelector("#select-to-show-more button")
.addEventListener('click',function(){
  // TASK #4

})
