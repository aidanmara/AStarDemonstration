var map;


var locData = {
    locations: [
        { name: 'NewYork', lat: 40.712776, lng: -74.005974 },
        { name: 'LosAngeles', lat: 34.052235, lng: -118.243683 },
        { name: 'Chicago', lat: 41.878113, lng: -87.629799 },
        { name: 'Houston', lat: 29.760427, lng: -95.369804 },
        { name: 'Phoenix', lat: 33.448376, lng: -112.074036 },
        { name: 'Philadelphia', lat: 39.952583, lng: -75.165222 },
        { name: 'SanAntonio', lat: 29.424122, lng: -98.493629 },
        { name: 'SanDiego', lat: 32.715736, lng: -117.161087 },
        { name: 'Dallas', lat: 32.776665, lng: -96.796989 },
        { name: 'SanJose', lat: 37.338207, lng: -121.886330 },
        { name: 'Jacksonville', lat: 30.332184, lng: -81.655647 },
        { name: 'Columbus', lat: 39.961178, lng: -82.998795 },
        { name: 'Charlotte', lat: 35.227085, lng: -80.843124 },
        { name: 'SanFrancisco', lat: 37.774929, lng: -122.419418 },
        { name: 'Indianapolis', lat: 39.768403, lng: -86.158068 },
        { name: 'Seattle', lat: 47.606209, lng: -122.332069 },
        { name: 'Denver', lat: 39.739236, lng: -104.990251 },
        { name: 'WashingtonDC', lat: 38.907192, lng: -77.036871 },
        { name: 'Boston', lat: 42.360082, lng: -71.058880 },
        { name: 'ElPaso', lat: 31.761878, lng: -106.485022 },
        { name: 'Nashville', lat: 36.162663, lng: -86.781601 },
        { name: 'Detroit', lat: 42.331427, lng: -83.045754 },
        { name: 'Memphis', lat: 35.149534, lng: -90.048980 },
        { name: 'Portland', lat: 45.512794, lng: -122.679565 },
        { name: 'LasVegas', lat: 36.169941, lng: -115.139830 },
        { name: 'Louisville', lat: 38.252665, lng: -85.758456 },
        { name: 'Milwaukee', lat: 43.038902, lng: -87.906474 },
        { name: 'Albuquerque', lat: 35.084386, lng: -106.650422 },
        { name: 'Fresno', lat: 36.737798, lng: -119.787125 },
        { name: 'Sacramento', lat: 38.581572, lng: -121.494400 },
        { name: 'Atlanta', lat: 33.748995, lng: -84.387982 },
        { name: 'KansasCity', lat: 39.099727, lng: -94.578567 },
        { name: 'Miami', lat: 25.761680, lng: -80.191790 },
        { name: 'Raleigh', lat: 35.779590, lng: -78.638179 },
        { name: 'Omaha', lat: 41.256538, lng: -95.934502 },
        { name: 'Minneapolis', lat: 44.977753, lng: -93.265011 },
        { name: 'Tulsa', lat: 36.153981, lng: -95.992775 },
        { name: 'Wichita', lat: 37.687176, lng: -97.330053 },
        { name: 'NewOrleans', lat: 29.951065, lng: -90.071533 },
        { name: 'Cleveland', lat: 41.499320, lng: -81.694360 },
        { name: 'Bakersfield', lat: 35.373292, lng: -119.018713 },
        { name: 'Boise', lat: 43.615021, lng: -116.202316 },
        { name: 'Spokane', lat: 47.658779, lng: -117.426048 },
        { name: 'SaltLakeCity', lat: 40.760780, lng: -111.891045 },
        { name: 'Helena', lat: 46.589145, lng: -112.039105 },
        { name: 'Billings', lat: 45.783285, lng: -108.500690 },

    ],
    adjacencies: {
        'NewYork': [
            { city: 'Philadelphia', distance: 94 },
            { city: 'Boston', distance: 215 },
            { city: 'Cleveland', distance: 460 }
        ],
        'Philadelphia': [
            { city: 'NewYork', distance: 94 },
            { city: 'WashingtonDC', distance: 140 }
        ],
        'Boston': [
            { city: 'NewYork', distance: 215 }
        ],
        'Cleveland': [
            { city: 'NewYork', distance: 460 },
            { city: 'Detroit', distance: 170 },
            { city: 'Columbus', distance: 142 }
        ],
        'LosAngeles': [
            { city: 'SanDiego', distance: 120 },
            { city: 'SanJose', distance: 340 },
            { city: 'LasVegas', distance: 270 },
            { city: 'Phoenix', distance: 373 }
        ],
        'SanDiego': [
            { city: 'LosAngeles', distance: 120 },
            { city: 'Phoenix', distance: 355 }
        ],
        'SanJose': [
            { city: 'SanFrancisco', distance: 48 },
            { city: 'LosAngeles', distance: 340 },
            { city: 'Sacramento', distance: 121 },
            { city: 'Fresno', distance: 152 }
        ],
        'Chicago': [
            { city: 'Indianapolis', distance: 185 },
            { city: 'Columbus', distance: 355 },
            { city: 'Milwaukee', distance: 92 },
            { city: 'Detroit', distance: 282 }
        ],
        'Indianapolis': [
            { city: 'Chicago', distance: 185 },
            { city: 'Columbus', distance: 176 },
            { city: 'Louisville', distance: 115 }
        ],
        'Milwaukee': [
            { city: 'Chicago', distance: 92 }
        ],
        'Detroit': [
            { city: 'Chicago', distance: 282 },
            { city: 'Columbus', distance: 204 },
            { city: 'Cleveland', distance: 170 }
        ],
        'Columbus': [
            { city: 'Chicago', distance: 355 },
            { city: 'Indianapolis', distance: 176 },
            { city: 'Detroit', distance: 204 },
            { city: 'Cleveland', distance: 142 },
            { city: 'WashingtonDC', distance: 410 }
        ],
        'Houston': [
            { city: 'SanAntonio', distance: 197 },
            { city: 'Dallas', distance: 239 },
            { city: 'NewOrleans', distance: 348 }
        ],
        'SanAntonio': [
            { city: 'Houston', distance: 197 },
            { city: 'Dallas', distance: 274 },
            { city: 'ElPaso', distance: 552 }
        ],
        'Dallas': [
            { city: 'Houston', distance: 239 },
            { city: 'SanAntonio', distance: 274 }
        ],
        'Phoenix': [
            { city: 'SanDiego', distance: 355 },
            { city: 'LasVegas', distance: 297 },
            { city: 'Albuquerque', distance: 419 }
        ],
        'ElPaso': [
            { city: 'SanAntonio', distance: 552 },
            { city: 'Phoenix', distance: 430 },
            { city: 'Albuquerque', distance: 266 }
        ],
        'Albuquerque': [
            { city: 'Phoenix', distance: 419 },
            { city: 'ElPaso', distance: 266 },
            { city: 'Denver', distance: 449 }
        ],
        'Denver': [
            { city: 'KansasCity', distance: 605 },
            { city: 'SaltLakeCity', distance: 520 },
            { city: 'Boise', distance: 836 }
        ],
        'WashingtonDC': [
            { city: 'Philadelphia', distance: 140 },
            { city: 'Raleigh', distance: 140 },
            { city: 'Columbus', distance: 410 }
        ],
        'Seattle': [
            { city: 'Portland', distance: 174 },
            { city: 'Spokane', distance: 280 },
            { city: 'Boise', distance: 496 }
        ],
        'Boise': [
            { city: 'Helena', distance: 346 },
            { city: 'SaltLakeCity', distance: 344 },
            { city: 'Seattle', distance: 496 }
        ],
        'SaltLakeCity': [
            { city: 'Boise', distance: 344 },
            { city: 'Denver', distance: 520 }
        ],
        'Spokane': [
            { city: 'Helena', distance: 333 },
            { city: 'Seattle', distance: 280 }
        ],
        'Billings': [
            { city: 'Denver', distance: 554 },
            { city: 'Helena', distance: 240 },
            { city: 'Minneapolis', distance: 824 }
        ],
        'Jacksonville': [
            { city: 'Charlotte', distance: 370 },
            { city: 'Atlanta', distance: 346 },
            { city: 'Miami', distance: 347 }
        ],
        'Charlotte': [
            { city: 'Jacksonville', distance: 370 },
            { city: 'Atlanta', distance: 244 },
            { city: 'Raleigh', distance: 130 },
            { city: 'Nashville', distance: 410 }
        ],
        'Atlanta': [
            { city: 'Charlotte', distance: 244 },
            { city: 'Jacksonville', distance: 346 },
            { city: 'NewOrleans', distance: 470 },
            { city: 'Memphis', distance: 384 }
        ],
        'Nashville': [
            { city: 'Memphis', distance: 210 },
            { city: 'Louisville', distance: 175 },
            { city: 'Charlotte', distance: 410 }
        ],
        'Memphis': [
            { city: 'Nashville', distance: 210 },
            { city: 'NewOrleans', distance: 395 },
            { city: 'Atlanta', distance: 384 }
        ],
        'Portland': [
            { city: 'Seattle', distance: 174 },
            { city: 'SanFrancisco', distance: 634 },
            { city: 'Boise', distance: 430 }
        ],
        'SanFrancisco': [
            { city: 'SanJose', distance: 48 },
            { city: 'Sacramento', distance: 87 },
            { city: 'Portland', distance: 634 }
        ],
        'Fresno': [
            { city: 'SanJose', distance: 152 },
            { city: 'LosAngeles', distance: 221 }
        ],
        'Sacramento': [
            { city: 'SanFrancisco', distance: 87 },
            { city: 'SanJose', distance: 121 },
            { city: 'Fresno', distance: 172 },
            { city: 'LasVegas', distance: 562 }
        ],
        'LasVegas': [
            { city: 'LosAngeles', distance: 270 },
            { city: 'Phoenix', distance: 297 },
            { city: 'SaltLakeCity', distance: 421 },
            { city: 'Sacramento', distance: 562 }
        ],
        'KansasCity': [
            { city: 'Denver', distance: 605 },
            { city: 'Wichita', distance: 198 },
            { city: 'Tulsa', distance: 275 },
            { city: 'Louisville', distance: 508 },
            { city: 'Nashville', distance: 553 },
            { city: 'Omaha', distance: 185 }
        ],
        'Wichita': [
            { city: 'Albuquerque', distance: 543 },
            { city: 'Tulsa', distance: 180 },
            { city: 'KansasCity', distance: 198 }
        ],
        'Tulsa': [
            { city: 'Dallas', distance: 240 },
            { city: 'Memphis', distance: 390 },
            { city: 'NewOrleans', distance: 635 },
            { city: 'Wichita', distance: 180 }
        ],
        'Omaha': [
            { city: 'Chicago', distance: 470 },
            { city: 'Minneapolis', distance: 382 },
            { city: 'Denver', distance: 540 }
        ],
        'Minneapolis': [
            { city: 'Milwaukee', distance: 337 },
            { city: 'Billings', distance: 824 },
            { city: 'Omaha', distance: 382 }
        ],
        'NewOrleans': [
            { city: 'Atlanta', distance: 470 },
            { city: 'Houston', distance: 348 },
            { city: 'Memphis', distance: 395 }
        ]
    }

};



function initMap() {
    fetch('map_styling.json')
    .then(response => response.json())
    .then(data => {
        var mapOptions = {
            center: { lat: 37.7749, lng: -95.4194 },
            zoom: 5,
            styles: data,
            disableDefaultUI: true,
            draggable: false
        };
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        
    
        locData.locations.forEach(function(location) {
            var marker = new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: map,
                icon: {
                    url: "./circle-solid-24.png", // Adjust the path if needed
                    scaledSize: new google.maps.Size(12, 12) // Set the size here
                },
                title: location.name
            });

            var infowindow = new google.maps.InfoWindow({
                content: "<div style='color: black; font-weight: bold; background-color:#00000000'>" + location.name + "</div>"
            });
        
            marker.addListener("mouseover", function() {

                infowindow.open(map, marker);
            });
        
            marker.addListener("mouseout", function() {
                infowindow.close();
            });

        });

    /*
    polylines = [];

    Object.keys(locData.adjacencies).forEach(function(city) {
        var cityLocation = locData.locations.find(loc => loc.name === city);
    
        if (!cityLocation) {
            console.error("City location not found:", city);
            return; // Skip processing this city
        }
    
        var adjacentCities = locData.adjacencies[city];
        adjacentCities.forEach(function(adjacentCity) {
            var adjacentCityLocation = locData.locations.find(loc => loc.name === adjacentCity.city);
            if (!adjacentCityLocation) {
                console.error("Adjacent city location not found:", adjacentCity);
                return; // Skip processing this adjacent city
            }
    
            var pathCoordinates = [
                { lat: cityLocation.lat, lng: cityLocation.lng },
                { lat: adjacentCityLocation.lat, lng: adjacentCityLocation.lng }
            ];


            var path = new google.maps.Polyline({
                path: pathCoordinates,
                geodesic: true,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 2,
            });
    
            polylines.push(path)
        });

    });

    polylines.forEach(function(polyline) {
        polyline.setMap(map);
    });

    window.initMap = initMap
    */
})};

initMap();

