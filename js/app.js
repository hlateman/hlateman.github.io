$(document).ready(function(){

  $('#daresults').hide();

  $('.marquee').marquee();

$(function(){

  // listen for a submit event on the #itunes-search form
  $("#giphy-search").submit(function(event){
    event.preventDefault();

    // fetch search term from the text field
    var searchTerm = $("#search-term").val();

    // call search function and pass the search term as a parameter
    search(searchTerm);
    $("#daresults").html("");

  });

  function displayResults(results){

  	var rand = results.data[Math.floor(Math.random()*(results.data).length)],
        textResults = displayotherResults(), 
        lengthResults = returnLengthtext(),
        message = (lengthResults) ? lengthResults:textResults;

    console.log('rand here: ',rand)

    $("#daresults")
      .html("<div><img src='" + rand.images.fixed_height.url +"'/>"+message+"</div>");




  }

  function search(term){
    var url = "http://api.giphy.com/v1/gifs/search";
    // this is the public beta key, sign up for production if you want this to be live on the web
    var apiKey = "dc6zaTOxFJmzC";

    // Makes an API request to the itunes server with a request for data using the search term
    // This uses jQuery's .ajax function
    $('#daresults').hide();
    $.ajax({
      url: url,
      type: "GET",
      data: {q: term, api_key: apiKey },
      success: function(data){
        console.log('data here: ',data);
        displayResults(data);
        $('#daresults').show();

        $("#search-term").val("");
      }
    });




  }
  function displayotherResults(){

      var str = $("#search-term").val();
      var res = str.split("");

      console.log(res.length, ' length there');

      var returnResults = {
        'b':'This word is weird.',
        'c':'not weird',
        'd':'this starts with a D',
        'x': 'this start with xx'
      }


      if(typeof returnResults[res[0]] === 'string'){
        return returnResults[res[0]]
      }else{
        return "This word is so weird we don't even recognise it."
      }



      // if (res[0] == 'b') { return ""}
      // else if (res[0] == 'c') { return "not weird"}
      // else if (res[0] == 'd') { return "this starts with a D"}
      // else if (res.length == 5) { return "x"}
      // else { return ("This word is so weird we don't even recognise it.")}

    }

      function returnLengthtext(){

      var str = $("#search-term").val();
      var res = str.split("");

      console.log(res.length, ' length there');

      var returnResults = {
        8 :'This word is very weird.',
        5 :'This word is kinda weird.',
        3 :'This word is not weird at all.',
      }

      if(typeof returnResults[res.length] == 'b'){
        return returnResults[res.length]
      }else{
        return false
      }

    }
});


});