"use strict";

document.getElementById("fetchWeather").addEventListener("click", fetchWeatherData);
document.getElementById("fetchNews").addEventListener("click", fetchNewsData); // Fetch Weather Data

function fetchWeatherData() {
  var weatherApiKey, city, url, response, data;
  return regeneratorRuntime.async(function fetchWeatherData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          weatherApiKey = "YOUR_WEATHER_API_KEY"; // Replace with your OpenWeather API key

          city = "Delhi";
          url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(weatherApiKey, "&units=metric");
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(fetch(url));

        case 6:
          response = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          data = _context.sent;
          displayWeather(data);
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](3);
          console.error("Error fetching weather:", _context.t0);
          document.getElementById("weatherContainer").innerHTML = "<p>❌ Error fetching weather data.</p>";

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 13]]);
}

function displayWeather(data) {
  document.getElementById("weatherContainer").innerHTML = "\n        <h3>\uD83C\uDF0D ".concat(data.name, "</h3>\n        <p>\uD83C\uDF21\uFE0F Temperature: ").concat(data.main.temp, "\xB0C</p>\n        <p>\uD83D\uDCA7 Humidity: ").concat(data.main.humidity, "%</p>\n        <p>\uD83C\uDF24\uFE0F Condition: ").concat(data.weather[0].description, "</p>\n    ");
} // Fetch News Data


function fetchNewsData() {
  var newsApiKey, url, response, data;
  return regeneratorRuntime.async(function fetchNewsData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          newsApiKey = "YOUR_NEWS_API_KEY"; // Replace with your NewsAPI key

          url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=".concat(newsApiKey);
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(fetch(url));

        case 5:
          response = _context2.sent;
          _context2.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          data = _context2.sent;
          displayNews(data);
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](2);
          console.error("Error fetching news:", _context2.t0);
          document.getElementById("newsContainer").innerHTML = "<p>❌ Error fetching news.</p>";

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 12]]);
}

function displayNews(data) {
  var container = document.getElementById("newsContainer");
  container.innerHTML = data.articles.slice(0, 5).map(function (article) {
    return "\n        <div class=\"news-item\">\n            <h4>".concat(article.title, "</h4>\n            <p>").concat(article.description, "</p>\n            <a href=\"").concat(article.url, "\" target=\"_blank\">Read More</a>\n        </div>\n    ");
  }).join('');
}