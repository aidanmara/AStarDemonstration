var map;

var locData = {
    locations: [
        { name: 'SanJose', lat: 37.38305013, lng: -121.8734782 },
        { name: 'SantaCruz', lat: 36.97166614, lng: -121.991551 },
        { name: 'NewportBeach', lat: 33.65007216, lng: -117.9251851 },
        { name: 'Napa', lat: 38.31414354, lng: -122.285035 },
        { name: 'SantaMonica', lat: 34.02435426, lng: -118.488305 },
        { name: 'LongBeach', lat: 33.77162218, lng: -118.1838742 },
        { name: 'Fresno', lat: 36.74785392, lng: -119.7860817 },
        { name: 'Monterey', lat: 36.6031124, lng: -121.8903941 },
        { name: 'SantaBarbara', lat: 34.41997097, lng: -119.7064646 },
        { name: 'PalmSprings', lat: 33.86149944, lng: -116.5404464 },
        { name: 'Sacramento', lat: 38.60639903, lng: -121.485935 },
        { name: 'Anaheim', lat: 33.84672434, lng: -117.911662 },
        { name: 'SanDiego', lat: 32.72922525, lng: -117.1595282 },
        { name: 'LosAngeles', lat: 34.05565325, lng: -118.2406421 },
        { name: 'SanFrancisco', lat: 37.77274227, lng: -122.4224028 },
        { name: 'Eureka', lat: 40.80347708, lng: -124.1635777 },
        { name: 'SouthLakeTahoe', lat: 38.93659253, lng: -119.9760937 },
        { name: 'Yosemite', lat: 37.81744769, lng: -119.5524652 }
    ],
    adjacencies: {
        'SanJose': ['SanFrancisco'],
        'SantaCruz': ['SanJose', 'Monterey'],
        'NewportBeach': ['LongBeach', 'Anaheim', 'SanDiego'],
        'Napa': ['SanFrancisco', 'Sacramento'],
        'SantaMonica': ['LosAngeles', 'Anaheim', 'SanDiego'],
        'LongBeach': ['LosAngeles', 'SantaMonica', 'Anaheim', 'NewportBeach'],
        'Fresno': ['SanJose', 'LosAngeles', 'Yosemite'],
        'Monterey': ['SanJose', 'SantaBarbara', 'SantaCruz'],
        'SantaBarbara': ['SantaMonica', 'Monterey'],
        'PalmSprings': ['SanDiego', 'LosAngeles'],
        'Sacramento': ['Napa', 'SanFrancisco', 'SouthLakeTahoe', 'Yosemite', 'Eureka'],
        'Anaheim': ['LosAngeles', 'LongBeach', 'NewportBeach', 'SanDiego'],
        'SanDiego': ['Anaheim', 'NewportBeach', 'PalmSprings'],
        'LosAngeles': ['Fresno', 'LongBeach', 'SantaMonica', 'Anaheim', 'PalmSprings'],
        'SanFrancisco': ['SanJose', 'Napa', 'Sacramento', 'Eureka'],
        'Eureka': ['SanFrancisco', 'Sacramento'],
        'SouthLakeTahoe': ['Sacramento', 'Yosemite'],
        'Yosemite': ['SouthLakeTahoe', 'Fresno', 'Sacramento']
    }
};


function initMap() {
    fetch('map_styling.json')
    .then(response => response.json())
    .then(data => {
        var mapOptions = {
            center: { lat: 37.7749, lng: -120.4194 },
            zoom: 6,
            styles: data,
            disableDefaultUI: true,
            draggable: true
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

    });


    polylines = [];

    Object.keys(locData.adjacencies).forEach(function(city) {
        var cityLocation = locData.locations.find(loc => loc.name === city);
    
        if (!cityLocation) {
            console.error("City location not found:", city);
            return; // Skip processing this city
        }
    
        var adjacentCities = locData.adjacencies[city];
        adjacentCities.forEach(function(adjacentCity) {
            var adjacentCityLocation = locData.locations.find(loc => loc.name === adjacentCity);
            if (!adjacentCityLocation) {
                console.error("Adjacent city location not found:", adjacentCity);
                return; // Skip processing this adjacent city
            }
    
            var pathCoordinates = [
                { lat: cityLocation.lat, lng: cityLocation.lng },
                { lat: adjacentCityLocation.lat, lng: adjacentCityLocation.lng }
            ];

            console.log("Drawing path from", pathCoordinates[0], "to", pathCoordinates[1]);

    
            var path = new google.maps.Polyline({
                path: pathCoordinates,
                geodesic: true,
                strokeColor: "#FFFFFF",
                strokeOpacity: 1.0,
                strokeWeight: 2,
                zIndex: 50 
            });
    
            polylines.push(path)
        });

    });

    polylines.forEach(function(polyline) {
        polyline.setMap(map);
    });
    
}

initMap();

