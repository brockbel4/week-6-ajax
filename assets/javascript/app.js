// Event listener for our randomBtn
$("#randomBtn").on("click", function() {

    // Storing our giphy API URL for a random image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=QAKj5BHpQWrw3yXBgL0Tlk3WZ3dFVBVA";
    var topic = "";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    // After the data from the AJAX request comes back
      .then(function(response) {

      // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var randomImage = $("<img>");

        // Setting the randomImage src attribute to imageUrl
        randomImage.attr("src", imageUrl);
        randomImage.attr("alt", "random image");

        // Prepending the randomImage to the images div
        $("#images").prepend(randomImage);
      });
  });