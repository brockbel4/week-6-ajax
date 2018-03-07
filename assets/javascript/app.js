// Initial Cars Array
var cars = ["McLaren", "Lamborghini", "Audi", "Bugatti", "Porsche", "Pagani", "Koenigsegg", "Ferrari", "Aston Martin", "BMW"];

// Displays the Buttons on the page
function renderButtons() {
// Delete all of the car buttons prior to adding new ones to avoid a repeat
  $("#carContainer").empty();
// Looping through the array of cars/buttons
  for (var i = 0; i < cars.length; i++) {
// Dynamically creates a button for each array element
    var a = $("<button>");
// Adding the class to the buttons
    a.addClass("car");
// Adds a data-attribute with the value of the car name at the index of i
    a.attr("data-name", cars[i]);
// Putting the text on the button by taking the string from the array and using .text()
    a.text(cars[i]);
// Appending the button to the HTML page (Puts it on the end)
    $("#carContainer").append(a);
  }
}

// This function detects the click of the addCar button and adds a new element to the array
$("#addCar").on("click", function(e) {

  e.preventDefault();
// Grab the input text value, trim extra spaces off beginning and end
  var car = $("#carInput").val().trim();
// Add the value to the array
  cars.push(car);
  renderButtons();
});

renderButtons();

