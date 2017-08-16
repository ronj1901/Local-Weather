

  $(document).ready(function() {

    $('#button').on('click', function(){

      if( $("#city").val() != ''){   // checks if user input is empty
        var city = $("#city").val();
        var  api ='http://api.openweathermap.org/data/2.5/weather?q='+city+',USA&appid=204fec1eba241de0d2157ce7cbce4d20';

        $.getJSON(api, function(Data) {

          var weather = Data.weather[0].main;
          var tempKelvin = Data.main.temp;
          var tempFahren = tempKelvin * 1.8  - 459.67;
          var temperature= tempFahren.toFixed(1);
          var windSpeed = Data.wind.speed;
          var icon = Data.weather[0].icon;
          var cityName = Data.name;
          var iconSrc = 'http://openweathermap.org/img/w/'+icon + '.png';


          var imgUrl = ['images/rainy.jpg', 'images/cloudy.jpg', 'images/Clear.jpg', 'images/default.jpg'];

          $("#result").text(weather);
          $("#result").append("<br>");
          $("#result").prepend('<img src =' + iconSrc + '>');
          $("#result").append("<h1>" + temperature + " °F" + " </h1>");

          $("#result").append('<h3>Wind : ' + windSpeed + '</h3>');
          $("#result").append('<h3>' + cityName  + '</h3>');

          //$("#result").append('<h2>Latitude : ' + lat +  ' <br>  Longitude : '  + lon + '</h2>');
          $("#result").css('color', 'white');
            $("#resultDiv").css('background-color', 'black');
          // sets background according to the weather type

        });

      }
      else{
        $("#result").text("Please Enter the City");
        $("#result").css('color', '#8E44AD');
          $("#resultDiv").css('background-color', '');
      };


    });

    var reset = function() {
      $('#reset').on('click', function(){
        $("#city").val("");
        $("#result").text("");
        $("#resultDiv").css('background-color', '');

        //$('body').css('background-image' , 'url(https://i.ytimg.com/vi/WXIK4dppWpE/maxresdefault.jpg)');
        init();
      });
    }

    reset();
// /*
    // default weather landing page goes here

    var init = function(){

      if ("geolocation" in navigator) {
        /* geolocation is available */
        navigator.geolocation.watchPosition(function(position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;

          var API = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=204fec1eba241de0d2157ce7cbce4d20';

          $.getJSON(API, function(Data) {
            var weather = Data.weather[0].main;
            var tempKelvin = Data.main.temp;
            var tempFahren = tempKelvin * 1.8  - 459.67;
            var temperature= tempFahren.toFixed(1);
            var windSpeed = Data.wind.speed;
            var icon = Data.weather[0].icon;
            var cityName = Data.name;
            var iconSrc = 'http://openweathermap.org/img/w/'+icon + '.png';

            $("#result").text(weather);
            $("#result").append("<br>");
            $("#result").prepend('<img src =' + iconSrc + '>');
            $("#result").append("<h1>" + temperature + " °F" + " </h1>");

            $("#result").append('<h3>Wind : ' + windSpeed + '</h3>');
            $("#result").append('<h1>' + cityName  + '</h1>');

            //$("#result").append('<h2>Latitude : ' + lat +  ' <br>  Longitude : '  + lon + '</h2>');
            $("#result").css('color', 'white');
            // sets background according to the weather type
            $("#resultDiv").css('background-color', 'black');
            $("#resultDiv:hover").css('opacity', '0.6');
            $("#resultDiv").css('opacity', '0.8');


          });
        });
      }
      else {
        /* geolocation IS NOT available */
        console.log("not available");
      }
    }

    init();


});  //  closoing jquery
