$(document).ready(function(){
    
// get the td's in the table to repeat to fill the background

$(function(){

  // listen for a submit event on the #itunes-search form
  $("#giphy-search").submit(function(event){
    event.preventDefault();

    // fetch search term from the text field
    var searchTerm = $("#search-term").val();

    // call search function and pass the search term as a parameter
    search(searchTerm);
    $("#daresults").html("");
    $("#search-term").val("");
  });

  function displayResults(results){

  	var rand = results.data[Math.floor(Math.random()*(results.data).length)];

    $("#daresults")
      .append("<div><img src='" + rand.images.fixed_height.url +"'/></div>");


    // use jquery to create a new table row containing data received from the API
    // $.each(results.data, function(index, gif){
    //   $("#results-table tbody")
    //   .append("<tr>" +
    //           "<td>" + gif.rating + "</td>" +
    //           "<td><img src='" + gif.images.fixed_height.url +"'/></td>" +
    //           "</tr>");

    // });
  }

  function search(term){
    var url = "http://api.giphy.com/v1/gifs/search";
    // this is the public beta key, sign up for production if you want this to be live on the web
    var apiKey = "dc6zaTOxFJmzC";

    // Makes an API request to the itunes server with a request for data using the search term
    // This uses jQuery's .ajax function
    $.ajax({
      url: url,
      type: "GET",
      data: {q: term, api_key: apiKey },
      success: function(data){
        console.log(data);
        displayResults(data);
      }
    });
  }
});

// when user enters word


















});