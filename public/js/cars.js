"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  var carMake, carModel, carYear

  var array = carsJSON.map(car => {
    carMake = car.Make;
    carModel = car.Model;
    carYear = car.Year;
    return ["<div class='row'>",
      "<div class='col-md-4 car'>",
        "<h2>", carMake, "</h2>",
        "<p><strong>Model: </strong>", carModel, "</p>",
        "<p><strong>Year: </strong>", carYear, "</p>",
      "</div>",
    "</div>"
  ].join("");
  });

  return array.join("");
  // this function should return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"

}

function addCarsToDOM(carsJSON) {
  let html = formatCars(carsJSON);
  $('#cars').append(html);
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
}

function fetchJSON() {
  var numCars = ($('h2').length/3) + 1
  $.ajax({
       url: baseUrl + "/" + numCars + "/3",
       contentType: 'application/json',
       dataType: 'jsonp',
       success: function(data) {
         addCarsToDOM(data)
       }
  });
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
}
