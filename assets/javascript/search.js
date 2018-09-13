



var mySearchString = $("#q-search-term").val(); // id="num-of-reccords"
var mySearchNumOfRecords = $("#num-of-reccords").val(); // id="num-of-reccords"
console.log("mySearchString = " + mySearchString);
// console.log("mySearchString = " + mySearchString)

var mySearchStartDate = $("#query-term").val();
var mySearchEndDate = $("#query-term").val();

// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "26cdc544d1c44879a6e42b3a988987ba",
  'q': mySearchString,
//   'num': mySearchNumOfRecords,
  'begin_date' : mySearchStartDate,
  'end_date' : mySearchEndDate
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
// })
// .fail(function(err) {
//   throw err;
});