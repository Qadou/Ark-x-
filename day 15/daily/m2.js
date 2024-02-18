const http = require('http');
const url = require('url');

const cities = [
    { "name": "New York", "lat": 40.7128, "lng": -74.0060 },
    { "name": "London", "lat": 51.5074, "lng": -0.1278 },
    { "name": "Paris", "lat": 48.8566, "lng": 2.3522 },
    { "name": "Tokyo", "lat": 35.6895, "lng": 139.6917 },
    { "name": "Sydney", "lat": -33.8651, "lng": 151.2099 },
    { "name": "Rome", "lat": 41.9028, "lng": 12.4964 },
    { "name": "Cairo", "lat": 30.0444, "lng": 31.2357 },
    { "name": "Rio de Janeiro", "lat": -22.9068, "lng": -43.1729 },
    { "name": "Dubai", "lat": 25.2048, "lng": 55.2708 },
    { "name": "Rabat", "lat": 34.0209, "lng": -6.8416 }
];

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;
    const city = query.city;

    if (path === '/users') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('User information goes here');
    } else if (path === '/products') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('I am a list of products :p');
    } else if (path === '/weather' ) {
        let found = false;
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name.toUpperCase === city) {
                try {
                    found = true;
                    const temperature = await fetchTemperature(cities[i].lat, cities[i].lng);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ temperature }));
                    break; 
                } catch (error) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                }
            }
        }
        if (!found) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('City not found');
        }
    
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

async function fetchTemperature(latitude, longitude) {
    
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const data = await response.json();
        const temperature = data.current_weather.temperature;
        return temperature;
    } catch (error) {
        throw new Error('Error fetching temperature data');
    }
}

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
