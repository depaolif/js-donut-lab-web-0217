//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
$(document).ready(function(){var guests, donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
window.prompt(insert)
//use parseInt to convert the users answer from a string to an integer.
//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.

  var donuts = parseInt(window.prompt("How many donuts do you want?"))
  var guests = parseInt(window.prompt("How many guests will there be?"))
  if (donuts >= guests*3) {
    window.alert(`Good. There are ${donuts} donuts and ${guests} guests. Everyone can have at least 3 donuts.`)
  } else {
    window.alert(`You did not provide sufficient donuts!!!`)
  }
})
