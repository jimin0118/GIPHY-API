$("button").on("click", function() {
  var movie = $(this).attr("data-movie");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    movie + "&api_key=SUKDMODfO0RfDFQmemfkqV6EeKBCtnjK&rating=pg-13&limit=5";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .done(function(response) {
      console.log(queryURL);
      console.log(response);

      var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var heroDiv = $("<div class='item'>");
          var rating = results[i].rating;
          var p = $("<p/>").text("Rating: " + rating);
              p.text(results[i].rating);

          var heroImage = $("<img/>");
            heroImage.addClass("image");
            heroImage.attr("src", results[i].images.fixed_height_still.url);
            heroImage.attr("data-still", results[i].images.fixed_height_still.url);
            heroImage.attr("data-animate", results[i].images.fixed_height.url);
            heroImage.attr("data-state", "still");

            heroDiv.append(p);
            heroDiv.append(heroImage);
            $("#heroGif").prepend(heroDiv);
          }

    $(".image").on("click", function() {
      var state = $(this).attr("data-state");  
        if (state === "still") {
          $(this).attr("src", $(this).data("animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).data("still"));
          $(this).attr("data-state", "still");
      }
    });  
  });
});

$("#submitButton").on("click", function () {
    var heroButton = $("#gifText").val();
    var addButton = $("<button/>").addClass("btn btn-outline-primary").attr("data-movie", heroButton).html(heroButton);
    $("#heroButtons").append(addButton);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    heroButton + "&api_key=SUKDMODfO0RfDFQmemfkqV6EeKBCtnjK&rating=pg-13&limit=5";

    $.ajax({
        url: queryURL,
        method: 'GET'
    })   
    .done(function (response) {
      console.log(queryURL);
      console.log(response);

        var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var newDiv = $("<div class='Item'>");
                var p = $("<p/>").text("Rating: " + rating);
                    p.text(results[i].rating);

        var heroImg = $("<img/>");
            heroImg.addClass("Image")
            heroImg.attr("src", results[i].images.fixed_height_still.url);
            heroImg.attr("data-still", results[i].images.fixed_height_still.url);
            heroImg.attr("data-animate", results[i].images.fixed_height.url);
            heroImg.attr("data-state", "still");

            newDiv.append(p);
            newDiv.append(heroImg);
            $("#heroGif").prepend(newDiv);
        }

    $(".Image").on("click", function () {
        var state = $(this).attr("data-state");
          if (state === "still") {
            $(this).attr("src", $(this).data("animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).data("still"));
            $(this).attr("data-state", "still");
        }
      });
    });
      $("#gif-input").val("");
      return false;
  })

