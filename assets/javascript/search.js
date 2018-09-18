$(document).ready(function(){

function createJQuery (num, response) {
  for (i=0; i<num; i++) {

  screenWell = $("<div>").attr("class", "well well-lg");
  screenWell.attr("id", "well-" + i);
  //  Title
  itemText = "<h3>Title: " + response.response.docs[i].headline.main + "</h3>";
  //  Author
  itemText += "<h4>Author: " + response.response.docs[i].byline.original + "</h4>";
  //  Section
  itemText += "<h4>Section: " + response.response.docs[i].headline.kicker + "</h4>";
  //  Date
  itemText += "<h4>Publication Date: " + response.response.docs[i].pub_date + "</h4>";
  //  Link
  itemText += "<span>Link: </span><a href='response.response.docs[i].web_url'>" + response.response.docs[i].web_url + "</a>";

  screenWell.html(itemText);
  $(".card-body").append(screenWell);
  }

};


  $("#search-btn").on("click", function () {
    

    var mySearchString = $("#q-search-term").val().trim(); // id="num-of-reccords"
    var mySearchNumOfRecords = $("#num-of-reccords").val().trim(); // id="num-of-reccords"
    console.log("mySearchString = " + mySearchString);
    // console.log("mySearchString = " + mySearchString)

    var mySearchStartDate = " ";
    if ($("#start-date").val()) {
      mySearchStartDate = $("#start-date").val().trim();
    };
    
    var mySearchEndDate = " ";
    if ($("#end-date").val()) {
      var mySearchEndDate = $("#query-term").val().trim();
    };

    // Built by LucyBot. www.lucybot.com
    var urlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url = urlBase + '?' + $.param({
      // 'api-key': "26cdc544d1c44879a6e42b3a988987ba",
      'api-key': "88fdb158c84640dcbe91c397193844b7",
      'q': mySearchString,
    //   'num': mySearchNumOfRecords,
      // 'begin_date' : mySearchStartDate,
      // 'end_date' : mySearchEndDate
    });
    console.log (url);
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
      // console.log(JSON.parse(result));
      createJQuery(3 , result)
    })
    .fail(function(err) {
      throw err;
    });
  });
});
