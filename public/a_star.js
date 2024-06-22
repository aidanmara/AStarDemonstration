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
        { name: 'Kansasname', lat: 39.099727, lng: -94.578567 },
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
        { name: 'SaltLakename', lat: 40.760780, lng: -111.891045 },
        { name: 'Helena', lat: 46.589145, lng: -112.039105 },
        { name: 'Billings', lat: 45.783285, lng: -108.500690 },

    ],
    adjacencies: {
        'NewYork': [
            { name: 'Philadelphia', distance: 94 },
            { name: 'Boston', distance: 215 },
            { name: 'Cleveland', distance: 460 }
        ],
        'Philadelphia': [
            { name: 'NewYork', distance: 94 },
            { name: 'WashingtonDC', distance: 140 }
        ],
        'Boston': [
            { name: 'NewYork', distance: 215 }
        ],
        'Cleveland': [
            { name: 'NewYork', distance: 460 },
            { name: 'Detroit', distance: 170 },
            { name: 'Columbus', distance: 142 }
        ],
        'LosAngeles': [
            { name: 'SanDiego', distance: 120 },
            { name: 'SanJose', distance: 340 },
            { name: 'LasVegas', distance: 270 },
            { name: 'Phoenix', distance: 373 }
        ],
        'SanDiego': [
            { name: 'LosAngeles', distance: 120 },
            { name: 'Phoenix', distance: 355 }
        ],
        'SanJose': [
            { name: 'SanFrancisco', distance: 48 },
            { name: 'LosAngeles', distance: 340 },
            { name: 'Sacramento', distance: 121 },
            { name: 'Fresno', distance: 152 }
        ],
        'Chicago': [
            { name: 'Indianapolis', distance: 185 },
            { name: 'Columbus', distance: 355 },
            { name: 'Milwaukee', distance: 92 },
            { name: 'Detroit', distance: 282 }
        ],
        'Indianapolis': [
            { name: 'Chicago', distance: 185 },
            { name: 'Columbus', distance: 176 },
            { name: 'Louisville', distance: 115 }
        ],
        'Milwaukee': [
            { name: 'Chicago', distance: 92 }
        ],
        'Detroit': [
            { name: 'Chicago', distance: 282 },
            { name: 'Columbus', distance: 204 },
            { name: 'Cleveland', distance: 170 }
        ],
        'Columbus': [
            { name: 'Chicago', distance: 355 },
            { name: 'Indianapolis', distance: 176 },
            { name: 'Detroit', distance: 204 },
            { name: 'Cleveland', distance: 142 },
            { name: 'WashingtonDC', distance: 410 }
        ],
        'Houston': [
            { name: 'SanAntonio', distance: 197 },
            { name: 'Dallas', distance: 239 },
            { name: 'NewOrleans', distance: 348 }
        ],
        'SanAntonio': [
            { name: 'Houston', distance: 197 },
            { name: 'Dallas', distance: 274 },
            { name: 'ElPaso', distance: 552 }
        ],
        'Dallas': [
            { name: 'Houston', distance: 239 },
            { name: 'SanAntonio', distance: 274 }
        ],
        'Phoenix': [
            { name: 'SanDiego', distance: 355 },
            { name: 'LasVegas', distance: 297 },
            { name: 'Albuquerque', distance: 419 }
        ],
        'ElPaso': [
            { name: 'SanAntonio', distance: 552 },
            { name: 'Phoenix', distance: 430 },
            { name: 'Albuquerque', distance: 266 }
        ],
        'Albuquerque': [
            { name: 'Phoenix', distance: 419 },
            { name: 'ElPaso', distance: 266 },
            { name: 'Denver', distance: 449 }
        ],
        'Denver': [
            { name: 'Kansasname', distance: 605 },
            { name: 'SaltLakename', distance: 520 },
            { name: 'Boise', distance: 836 }
        ],
        'WashingtonDC': [
            { name: 'Philadelphia', distance: 140 },
            { name: 'Raleigh', distance: 140 },
            { name: 'Columbus', distance: 410 }
        ],
        'Seattle': [
            { name: 'Portland', distance: 174 },
            { name: 'Spokane', distance: 280 },
            { name: 'Boise', distance: 496 }
        ],
        'Boise': [
            { name: 'Helena', distance: 346 },
            { name: 'SaltLakename', distance: 344 },
            { name: 'Seattle', distance: 496 }
        ],
        'SaltLakename': [
            { name: 'Boise', distance: 344 },
            { name: 'Denver', distance: 520 }
        ],
        'Spokane': [
            { name: 'Helena', distance: 333 },
            { name: 'Seattle', distance: 280 }
        ],
        'Billings': [
            { name: 'Denver', distance: 554 },
            { name: 'Helena', distance: 240 },
            { name: 'Minneapolis', distance: 824 }
        ],
        'Jacksonville': [
            { name: 'Charlotte', distance: 370 },
            { name: 'Atlanta', distance: 346 },
            { name: 'Miami', distance: 347 }
        ],
        'Charlotte': [
            { name: 'Jacksonville', distance: 370 },
            { name: 'Atlanta', distance: 244 },
            { name: 'Raleigh', distance: 130 },
            { name: 'Nashville', distance: 410 }
        ],
        'Atlanta': [
            { name: 'Charlotte', distance: 244 },
            { name: 'Jacksonville', distance: 346 },
            { name: 'NewOrleans', distance: 470 },
            { name: 'Memphis', distance: 384 }
        ],
        'Nashville': [
            { name: 'Memphis', distance: 210 },
            { name: 'Louisville', distance: 175 },
            { name: 'Charlotte', distance: 410 }
        ],
        'Memphis': [
            { name: 'Nashville', distance: 210 },
            { name: 'NewOrleans', distance: 395 },
            { name: 'Atlanta', distance: 384 }
        ],
        'Portland': [
            { name: 'Seattle', distance: 174 },
            { name: 'SanFrancisco', distance: 634 },
            { name: 'Boise', distance: 430 }
        ],
        'SanFrancisco': [
            { name: 'SanJose', distance: 48 },
            { name: 'Sacramento', distance: 87 },
            { name: 'Portland', distance: 634 }
        ],
        'Fresno': [
            { name: 'SanJose', distance: 152 },
            { name: 'LosAngeles', distance: 221 }
        ],
        'Sacramento': [
            { name: 'SanFrancisco', distance: 87 },
            { name: 'SanJose', distance: 121 },
            { name: 'Fresno', distance: 172 },
            { name: 'LasVegas', distance: 562 }
        ],
        'LasVegas': [
            { name: 'LosAngeles', distance: 270 },
            { name: 'Phoenix', distance: 297 },
            { name: 'SaltLakename', distance: 421 },
            { name: 'Sacramento', distance: 562 }
        ],
        'Kansasname': [
            { name: 'Denver', distance: 605 },
            { name: 'Wichita', distance: 198 },
            { name: 'Tulsa', distance: 275 },
            { name: 'Louisville', distance: 508 },
            { name: 'Nashville', distance: 553 },
            { name: 'Omaha', distance: 185 }
        ],
        'Wichita': [
            { name: 'Albuquerque', distance: 543 },
            { name: 'Tulsa', distance: 180 },
            { name: 'Kansasname', distance: 198 }
        ],
        'Tulsa': [
            { name: 'Dallas', distance: 240 },
            { name: 'Memphis', distance: 390 },
            { name: 'NewOrleans', distance: 635 },
            { name: 'Wichita', distance: 180 }
        ],
        'Omaha': [
            { name: 'Chicago', distance: 470 },
            { name: 'Minneapolis', distance: 382 },
            { name: 'Denver', distance: 540 }
        ],
        'Minneapolis': [
            { name: 'Milwaukee', distance: 337 },
            { name: 'Billings', distance: 824 },
            { name: 'Omaha', distance: 382 }
        ],
        'NewOrleans': [
            { name: 'Atlanta', distance: 470 },
            { name: 'Houston', distance: 348 },
            { name: 'Memphis', distance: 395 }
        ]
    }

};


function haversine(lat1, lon1, lat2, lon2) {
    const toRadian = Math.PI / 180; // Convert degrees to radians
    const radius = 3958.8; // Radius of Earth in miles
  
    // Convert coordinates to radians
    lat1 = lat1 * toRadian;
    lon1 = lon1 * toRadian;
    lat2 = lat2 * toRadian;
    lon2 = lon2 * toRadian;
  
    // Apply Haversine's formula for the given points
    const innerFormula = Math.sin((lat2 - lat1) / 2) ** 2 + 
                         Math.cos(lat1) * Math.cos(lat2) * 
                         Math.sin((lon2 - lon1) / 2) ** 2;

  
    return 2 * radius * Math.asin(Math.sqrt(innerFormula));
  };
  

function calculate_estimated_distances(endname){
    let heuristicArray = new Array();
    //calculate the heuristic function for each name 
    locData.locations.forEach(name => {
        heuristicArray.push({name: name.name, hVal: haversine(name.lat, name.lng, endname.lat, endname.lng)});
    });

    return heuristicArray;
}


async function drawlines(currentCity, speed){
    
    var currnameAdj = locData.adjacencies[currentCity.name];    
    var currPaths = [];

    await Promise.all(currnameAdj.map(async (city, index) => {
        await new Promise(resolve => setTimeout(resolve, index * (speed * 1000)));

        var adjacentnameLocation = locData.locations.find(loc => loc.name === city.name);

        console.log(adjacentnameLocation);
        
        var pathCoordinates = [
            { lat: currentCity.lat, lng: currentCity.lng },
            { lat: adjacentnameLocation.lat, lng: adjacentnameLocation.lng }
        ];

        var path = new google.maps.Polyline({
            path: pathCoordinates,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
        });

        path.setMap(map);
        currPaths.push(path);

        if (index === currnameAdj.length - 1) {
            return currPaths;
        }
    }));

    return currPaths;
}

async function build_iteration(startname, speed) {
    var currentpaths = await drawlines(startname, speed);

    console.log(currentpaths);

    setTimeout(() => {
    

    var bestPath = currentpaths[0];

    currentpaths.forEach(path => {
        path.setMap(null);
    });

    setTimeout(() => {
        bestPath.setMap(map);
    }, speed*1000); // Set your desired timeout in milliseconds

    }, speed*1000);

}


function a_star(startname, endname){
 fetch('map_styling.json')
    .then(response => response.json())
    .then(data => {
        var mapOptions = {
            center: { lat: 37.7749, lng: -95.4194 },
            zoom: 5,
            styles: data,
            disableDefaultUI: true,
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

    
        build_iteration(startname, 1)


});
}


a_star({ name: 'LosAngeles', lat: 34.052235, lng: -118.243683 },{ name: 'NewYork', lat: 40.712776, lng: -74.005974 });
