const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value)
  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercent = Number(tipInput.value) / 100
  // get the total tip amount
  const tipAmount = bill * tipPercent
  // calculate the total (tip amount + bill)
  const total = tipAmount + bill
  // calculate the per person total (total divided by number of people)
  const perPersonTotal = total / numberOfPeople
  // update the perPersonTotal on DOM & show it to user
  /*  perPersonTotalDiv.innerText = `$${perPersonTotal.perPersonTotalLs.toFixed(2)}`  */
  perPersonTotalDiv.innerText = `$${perPersonTotal.toLocaleString(undefined, {maximumFractionDigits: 2})}`
  
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1
  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople
  // calculate the bill based on the new number of people
  calculateBill()
}


// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // if amount is 1 or less simply return
  // can't decrease the number of people to 0 or negative!
  // Guard Clause
  if (numberOfPeople <= 1) {
    throw 'You cannot have less than 1 person!'
  }
  // decrement the amount of people
  numberOfPeople -= 1  
  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople
  // calculate the bill based on the new number of people
  calculateBill()
}

