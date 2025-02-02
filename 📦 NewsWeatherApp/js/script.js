document.getElementById("fetchWeather").addEventListener("click", fetchWeatherData);
document.getElementById("fetchNews").addEventListener("click", fetchNewsData);

// Fetch Weather Data
async function fetchWeatherData() {
    const weatherApiKey = "YOUR_WEATHER_API_KEY"; // Replace with your OpenWeather API key
    const city = "Delhi"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather:", error);
        document.getElementById("weatherContainer").innerHTML = "<p>❌ Error fetching weather data.</p>";
    }
}

function displayWeather(data) {
    document.getElementById("weatherContainer").innerHTML = `
        <h3>🌍 ${data.name}</h3>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌤️ Condition: ${data.weather[0].description}</p>
    `;
}

// Fetch News Data
async function fetchNewsData() {
    const newsApiKey = "YOUR_NEWS_API_KEY"; // Replace with your NewsAPI key
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2025-01-02&sortBy=publishedAt&apiKey=API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data);
    } catch (error) {
        console.error("Error fetching news:", error);
        document.getElementById("newsContainer").innerHTML = "<p>❌ Error fetching news.</p>";
    }
}

function displayNews(data) {
    const container = document.getElementById("newsContainer");
    container.innerHTML = data.articles.slice(0, 5).map(article => `
        <div class="news-item">
            <h4>${article.title}</h4>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        </div>
    `).join('');
}
