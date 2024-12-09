function updateCities() {
    var cities = [
        'Baker Island',
        'Pago Pago',
        'Honolulu',
        'Anchorage',
        'Los Angeles',
        'Denver',
        'Chicago',
        'New York',
        'Halifax',
        'Buenos Aires',
        'South Georgia',
        'Cape Verde',
        'Lisbon',
        'Paris',
        'Athens',
        'Moscow',
        'Dubai',
        'Tashkent',
        'Dhaka',
        'Jakarta',
        'Singapore',
        'Tokyo',
        'Sydney',
        'Magadan',
        'Auckland',
        'Miami',
        'Bern',
        'Zürich',
        'Genf',
        'Rom',
        'Stockholm',
        'Malmö',
        'London',
        'Atlanta',
        'Berlin',
        'München',
        'Wien',
        'Mumbai',
        'Abu Dhabi',
        'Johannesburg',
        'Lima',
        'San Juan',
        'Tampa',
        'Olbia',
        'San Francisco',
        'Washington',
        'Barcelona',
        'Madrid',
        'Cagliari',
        'Marseille',
        'Monte Carlo',
        'Genua',
        'Brüssel',
        'Amsterdam',
        'Prag',
        'Riga',
        'Budapest',
        'Bukarest', 
        'Brisbane',
        'Dublin',
        'Hamburg',
        'Kuala Lumpur',
        'Bangkok',
        'Colombo',
        'Sofia',
        'Florenz',
        'Houston',
        'Mailand',
        'Dallas',
        'Las Vegas',
        'Toronto',
        'Kopenhagen',
        'Hongkong',
        'Shenzhen',
        'Manchester',
        'Montevideo',
        'Santiago',
        'Quito',
        'Bogotá',
        'Rio de Janeiro',
        'Istanbul',
        'Ankara',
        'Antalya'


    ];

    var searchQuery = document.getElementById('searchBox').value.toLowerCase();
    var filteredCities = cities.filter(city => city.toLowerCase().includes(searchQuery));

    var container = document.getElementById('cities-container');
    container.innerHTML = '';

    filteredCities.forEach(function(city) {
        var cityDiv = document.createElement('div');
        cityDiv.className = 'city';
        cityDiv.onclick = function() {
            window.location.href = 'subsites/' + city.replace(/ /g, '_') + '.html';
        };
        cityDiv.innerHTML = city;
        container.appendChild(cityDiv);
    });
}

document.addEventListener('DOMContentLoaded', updateCities);
