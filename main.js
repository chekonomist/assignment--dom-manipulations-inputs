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
      var selectedItemPrice = parseInt(el.value)
      totalCheckSum = totalCheckSum + selectedItemPrice
    }

  if (el.checked === false) {
      totalCheckSum = totalCheckSum + 0
    }

  })

totalSumEl.innerHTML = `$ ${totalCheckSum}`

})


document
.querySelector(“#select-to-show-more button”)
.addEventListener(‘click’,function addCarInfo(){
 // TASK #4
 var carListDropDownEl = document.querySelector(‘.selection’)
 var index = carListDropDownEl.selectedIndex
 var imgEl = document.querySelector(‘.img-box’)
 var makeAndModelEl = document.querySelector(‘.model’)
 var msrpEl = document.querySelector(‘.msrp’)
 var mpgEl = document.querySelector(‘.mpg’)
 var edmundsEl = document.querySelector(‘.edmunds’)

// Using this variable to read the data of EACH index
 var datasetIndex = carListDropDownEl.options[index].dataset

 imgEl.innerHTML = ‘<img src=´datasetIndex.img´>’
 makeAndModelEl.innerHTML = carListDropDownEl.value
 msrpEl.innerHTML = datasetIndex.msrp
 mpgEl.innerHTML = datasetIndex.mpg
 edmundsEl.innerHTML = datasetIndex.edmunds
})
