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
    btnListener();
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

function btnListener() {
  $("button").on("click", function() {
    // TODO: Grabbing and storing the array element value from the button being clicked
    // This now works for all existing buttons on the page, it does work for buttons added by user...
    var btnPressed = $(this).text();
    
    // Constructing a queryURL using the car name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    btnPressed + "&api_key=QAKj5BHpQWrw3yXBgL0Tlk3WZ3dFVBVA&limit=10";
    
    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    // After data comes back from the request
    .then(function(response) {
      console.log(queryURL);
      console.log(response);
      // storing the data from the AJAX request in the results variable
      var results = response.data;
      // Looping through each result item
      for (var i = 0; i < results.length; i++) {
        // Creating and storing a div tag
        var carDiv = $("<div>");
        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);
        // Creating and storing an image tag
        var carImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        carImage.attr("src", results[i].images.fixed_height.url);
        // Appending the paragraph and image tag to the carDiv
        carDiv.append(p);
        carDiv.append(carImage);
        // Prependng the animalDiv to the HTML page in the "#giphyDisplay" div
        $("#giphyDisplay").prepend(carDiv);
      }
    });
  });
};
  
  // TODO: Make Giphys come on the page still and start/stop when clicked...
  
  // Write an if statement that will add and remove "_s" to the end of the image url to change if it is still or not