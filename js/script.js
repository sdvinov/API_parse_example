//Sergej Dvinov | August 24th
$(document).ready (function() {
	$.ajax({
		url : "http://api.wunderground.com/api/5ec2b53c8678132a/forecast/geolookup/conditions/q/FL/Orlando.json",
	  	dataType : "json", 
	  	success : function(parsed_json) { 
		    var weather = parsed_json['current_observation']['weather']; //getting weather condition
		    var temp_f = parsed_json['current_observation']['temp_f']; //getting temperature
		    var wind_dir = parsed_json['current_observation']['wind_dir']; //getting wind direction
		    var wind_mph = parsed_json['current_observation']['wind_mph']; //getting wind speed
		    var feelslike_f = parsed_json['current_observation']['feelslike_f']; //getting feelslike temperature
		    var relative_humidity = parsed_json['current_observation']['relative_humidity']; //getting relative humidity
		    var icon_url = parsed_json['current_observation']['icon_url']; //getting weather condition icon

		    //adding a block on a page
		    $('#current').append('<table class="current-block"><tr><td colspan="2"><img src="' + icon_url + '" alt="current weather"/><br/><div id="weather" colspan="2">' + weather + '</div></td><td><table id="current-inside"><tr><td id="temp">Temperature:</td><td class="right"> ' + temp_f + ' F</td></tr><tr><td id="feelslike">Feelslike: </td><td class="right">' + feelslike_f + ' F</td></tr><tr><td id="humidity">Relative humidity: </td><td class="right">' + relative_humidity + '</td></tr><tr><td id="humidity">Reative humidity: </td><td class="right">' + relative_humidity + '</td></tr><tr><td id="wdir">Wind direction: </td><td class="right">' + wind_dir + '</td></tr><tr><td id="wspd">Wind speed: </td><td class="right">' + wind_mph + ' mph</td></tr></table></td></tr></table>');
	  	} 
	}); 

	$.ajax({
		url : "http://api.wunderground.com/api/5ec2b53c8678132a/hourly/q/FL/Orlando.json",
	  	dataType : "json", 
	  	success : function(parsed_json) {
	  		for(var i = 0; i <= 23; i++) { //loop to shorten the code
			  	var time = parsed_json.hourly_forecast[i].FCTTIME.pretty; //getting time
			  	var condition = parsed_json.hourly_forecast[i].condition; //getting weather condition
			  	var temp = parsed_json.hourly_forecast[i].temp.english; //getting temperature
			  	var wspd = parsed_json.hourly_forecast[i].wspd.english; //getting wind speed
			  	var wdir = parsed_json.hourly_forecast[i].wdir.dir; //getting wind direction
			  	var feelslike = parsed_json.hourly_forecast[i].feelslike.english; //getting feelslike temperature
			  	var humidity = parsed_json.hourly_forecast[i].humidity; //getting relative humidity 
			  	var icon_url_hourly = parsed_json.hourly_forecast[i].icon_url; //getting weather condition ico
			  	

			  	//adding a block on a page
			  	$('#hourly').append('<table class="block"><tr><td id="time" colspan="2">Weather at ' + time + '</td></tr><tr><td colspan="2"><img src="' + icon_url_hourly + '" alt="hourly weather"/></td></tr><tr><td id="condition" colspan="2">' + condition + '</td></tr><tr><td id="temp">Temperature:</td><td class="right"> ' + temp + ' F</td></tr><tr><td id="wspd">Wind speed: </td><td class="right">' + wspd + ' mph</td></tr><tr><td id="wdir">Wind direction: </td><td class="right">' + wdir + '</td></tr><tr><td id="feelslike">Feelslike: </td><td class="right">' + feelslike + ' F</td></tr><tr><td id="humidity">Relative humidity: </td><td class="right">' + humidity + '%</td></tr></table>');
		  	}
		}
	}); 

	$.ajax({
		url : "http://api.wunderground.com/api/5ec2b53c8678132a/forecast10day/q/FL/Orlando.json",
	  	dataType : "json", 
	  	success : function(parsed_json) {
	  		for(var i = 0; i <= 6; i++) { //loop to shorten the code
			  	var time_week = parsed_json.forecast.simpleforecast.forecastday[i].date.pretty; //getting time
			  	var conditions = parsed_json.forecast.simpleforecast.forecastday[i].conditions; //getting weather condition
			  	var high = parsed_json.forecast.simpleforecast.forecastday[i].high.fahrenheit; //getting temperature
			  	var low = parsed_json.forecast.simpleforecast.forecastday[i].low.fahrenheit; //getting temperature
			  	var mph = parsed_json.forecast.simpleforecast.forecastday[i].avewind.mph; //getting wind speed
			  	var dir = parsed_json.forecast.simpleforecast.forecastday[i].avewind.dir; //getting wind direction
			  	var avehumidity = parsed_json.forecast.simpleforecast.forecastday[i].avehumidity; //getting relative humidity
			  	var icon_url_week = parsed_json.forecast.simpleforecast.forecastday[i].icon_url; //getting weather condition icon

			  	//adding a block on a page
			  	$('#week').append('<table class="block"><tr><td id="time" colspan="2">Weather at ' + time_week + '</td></tr><tr><td colspan="2"><img src="' + icon_url_week + '" alt="hourly weather"/></td></tr><tr><td id="condition" colspan="2">' + conditions + '</td></tr><tr><td id="temp">Temperature:</td><td class="right"> ' + low + '-' + high + ' F</td></tr><tr><td id="wspd">Wind speed: </td><td class="right">' + mph + ' mph</td></tr><tr><td id="wdir">Wind direction: </td><td class="right">' + dir + '</td></tr><tr><td id="feelslike">Average humidity: </td><td class="right">' + avehumidity + '%</td></tr></table>');
			}
		}
	}); 
});