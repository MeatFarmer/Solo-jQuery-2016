console.log('js start');

red = 0;
yellow = 0;
green = 0;
blue = 0;

$( document ).ready(function() {
    console.log('jq start');
    $(".color-button").on("click", function() {
      console.log("click working");
      var buttonColor = $(this).attr("data-color");
      console.log(buttonColor);
      if (buttonColor === "red") {
          red++;
          $(".container").append("<div class='color-cube red'></div>");
          $("#red").html("Total red: " + red);
      } else if (buttonColor === "yellow") {
          yellow++;
          $(".container").append("<div class='color-cube yellow'></div>");
          $("#yellow").html("Total yellow: " + yellow);
      } else if (buttonColor === "green") {
          green++;
          $(".container").append("<div class='color-cube green'></div>");
          $("#green").html("Total green: " + green);
      } else {
          blue++;
          $(".container").append("<div class='color-cube blue'></div>");
          $("#blue").html("Total blue: " + blue);
      }
  });
}); // end document.ready

// $(".practice").on("click", function () {
// var outputText = '';
// outputText += $('.domInfo').append('<p class="party">do you work?</p>');
// });

// $(".practice").on("click", function () {
// console.log('button click works');
// });
