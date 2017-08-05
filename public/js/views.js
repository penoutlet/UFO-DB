// $(function(){
    
//     $(".input-group-btn .dropdown-menu li a").click(function(){

//         var selText = $(this).html();
    
//         //working version - for single button //
//        //$('.btn:first-child').html(selText+'<span class="caret"></span>');  
       
//        //working version - for multiple buttons //
//        $(this).parents('.input-group-btn').find('.btn-search').html(selText);

//    });

// });
// $('.dropdown-toggle').on("click", function(event) {
//  event.preventDefault();

//   // Save the book they typed into the book-search input
//   var citySearched = $(".form-control").val().trim();

//   // Make an AJAX get request to our api, including the user's book in the url
//   $.get("/api/city/" + citySearched, function(data) {

//     console.log(data);
//     // Call our renderBooks function to add our books to the page
//     renderBooks(data);

//   });
// });



// When user hits the Date search-btn
$("#date-search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var dateSearched = moment($("#date-search").val().trim(), "MM-DD-YYYY").format("X");
    // Prettify the employee start
  var dateSearchPretty = moment.unix(dateSearched).format("MM-DD-YYYY");

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/date/" + dateSearchPretty, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);

  });

});

// When user hits the City search-btn
$("#city-search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var citySearched = $("#city-search").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/city/" + citySearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);

  });

});

// When user hits the State search-btn
$("#state-search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var stateSearched = $("#state-search").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/state/" + stateSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);

  });

});

// When user hits the Shape search-btn
$("#shape-search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var shapeSearched = $("#shape-search").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/shape/" + shapeSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);

  });

});

function renderBooks(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<p>Date: " + data[i].Date + "</p>");
      div.append("<p>City: " + data[i].City + "</p>");
      div.append("<p>State: " + data[i].State + "</p>");
      div.append("<p>Shape: " + data[i].Shape + "</p>");
      div.append("<p>Duration: " + data[i].Duration + "</p>");
      div.append("<p>Summary: " + data[i].Summary + "</p>");
      div.append("<hr>");
      

      $("#stats").append(div);

    }//for loop
  }//if statement
}//function