class PriorityQueue {
    constructor() {
      this.heap = [];
    }
  
    // Method to swap elements in the heap
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return min;
    }
  
    // Method to bubble up an element to its correct position
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
          let parentIndex = Math.floor((index - 1) / 2);
          if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
          this.swap(parentIndex, index);
          index = parentIndex;
        }
      }
      
      sinkDown(index) {
          const length = this.heap.length;
          const element = this.heap[index];
          while (true) {
              const leftChildIndex = 2 * index + 1;
              const rightChildIndex = 2 * index + 2;
              let leftChild, rightChild;
              let swap = null;
      
              if (leftChildIndex < length) {
                  leftChild = this.heap[leftChildIndex];
                  if (leftChild.priority < element.priority) {
                      swap = leftChildIndex;
                  }
              }
      
              if (rightChildIndex < length) {
                  rightChild = this.heap[rightChildIndex];
                  if (
                      (swap === null && rightChild.priority < element.priority) ||
                      (swap !== null && rightChild.priority < leftChild.priority)
                  ) {
                      swap = rightChildIndex;
                  }
              }
      
              if (swap === null) break;
              this.heap[index] = this.heap[swap];
              index = swap;
          }
          this.heap[index] = element;
      }
    // Method to insert an element with a given priority
    enqueue(element, priority) {
      this.heap.push({ element, priority });
      this.bubbleUp();
    }
  
    // Method to remove and return the element with the highest priority
    dequeue() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop().element;
  
      const root = this.heap[0].element;
      this.heap[0] = this.heap.pop();
      this.sinkDown(0);
      return root;
    }
  
    // Method to check if the priority queue is empty
    isEmpty() {
      return this.heap.length === 0;
    }
  
    // Method to get the size of the priority queue
    size() {
      return this.heap.length;
    }
  }


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
        { name: 'Boise', lat: 43.615021, lng: -116.202316 },
        { name: 'Spokane', lat: 47.658779, lng: -117.426048 },
        { name: 'SaltLakeCity', lat: 40.760780, lng: -111.891045 },
        { name: 'Helena', lat: 46.589145, lng: -112.039105 },
        { name: 'Billings', lat: 45.783285, lng: -108.500690 },

    ],
    adjacencies: {
        'NewYork': [
            { name: 'Philadelphia', distance: 97.2 },
            { name: 'Boston', distance: 215 },
            { name: 'Cleveland', distance: 460 }
        ],
        'Philadelphia': [
            { name: 'NewYork', distance: 97.2 },
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
            { name: 'Fresno', distance: 221 },
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
            { name: 'Detroit', distance: 282 },
            { name: 'Omaha', distance: 470 },
        ],
        'Indianapolis': [
            { name: 'Chicago', distance: 185 },
            { name: 'Columbus', distance: 176 },
            { name: 'Louisville', distance: 115 }
        ],
        'Louisville': [
            { name: 'Indianapolis', distance: 115 },
            { name: 'KansasCity', distance: 508 },
            { name: 'Nashville', distance: 175 },
        ],
        'Milwaukee': [
            { name: 'Chicago', distance: 92 },
            { name: 'Minneapolis', distance: 337 },
        ],
        'Miami': [
            { name: 'Jacksonville', distance: 347 }
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
            { name: 'SanAntonio', distance: 274 },
            { name: 'Tulsa', distance: 240 },
        ],
        'Phoenix': [
            { name: 'SanDiego', distance: 355 },
            { name: 'LasVegas', distance: 297 },
            { name: 'Albuquerque', distance: 419 },
            { name: 'LosAngeles', distance: 373 },
            {name: 'ElPaso', distance: 430 },
        ],
        'ElPaso': [
            { name: 'SanAntonio', distance: 552 },
            { name: 'Phoenix', distance: 430 },
            { name: 'Albuquerque', distance: 266 }
        ],
        'Albuquerque': [
            { name: 'Phoenix', distance: 419 },
            { name: 'ElPaso', distance: 266 },
            { name: 'Denver', distance: 449 },
            { name : 'Wichita', distance: 595.5}
        ],
        'Denver': [
            { name: 'KansasCity', distance: 605 },
            { name: 'SaltLakeCity', distance: 520 },
            { name: 'Albuquerque', distance: 449 },
            { name: 'Omaha', distance: 540 },
            { name: 'Boise', distance: 836 },
            { name: 'Billings', distance: 554 },
        ],
        'WashingtonDC': [
            { name: 'Philadelphia', distance: 140 },
            { name: 'Raleigh', distance: 278 },
            { name: 'Columbus', distance: 410 }
        ],
        'Seattle': [
            { name: 'Portland', distance: 174 },
            { name: 'Spokane', distance: 280 },
            { name: 'Boise', distance: 496 }
        ],
        'Boise': [
            { name: 'Helena', distance: 346 },
            { name: 'SaltLakeCity', distance: 344 },
            { name: 'Seattle', distance: 496 },
            { name: 'Denver', distance: 836 },
            { name: 'Portland', distance: 430 },
        ],
        'SaltLakeCity': [
            { name: 'Boise', distance: 344 },
            { name: 'LasVegas', distance: 421 },
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
        'Raleigh': [
            { name: 'WashingtonDC', distance: 278 },
            { name: 'Charlotte', distance: 130 },
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
            { name: 'KansasCity', distance: 553 },
            { name: 'Charlotte', distance: 410 }
        ],
        'Memphis': [
            { name: 'Nashville', distance: 210 },
            { name: 'NewOrleans', distance: 395 },
            { name: 'Atlanta', distance: 384 },
            { name: 'Tulsa', distance: 390 },
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
            { name: 'LosAngeles', distance: 221 },
            { name: 'Sacramento', distance: 172 },
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
            { name: 'SaltLakeCity', distance: 421 },
            { name: 'Sacramento', distance: 562 }
        ],
        'KansasCity': [
            { name: 'Denver', distance: 605 },
            { name: 'Wichita', distance: 198 },
            { name: 'Tulsa', distance: 275 },
            { name: 'Louisville', distance: 508 },
            { name: 'Nashville', distance: 553 },
            { name: 'Omaha', distance: 185 }
        ],
        'Wichita': [
            { name : 'Wichita', distance: 595.5},
            { name: 'Tulsa', distance: 180 },
            { name: 'KansasCity', distance: 198 },
            { name : 'Albuquerque', distance: 595.5}
        ],
        'Tulsa': [
            { name: 'Dallas', distance: 240 },
            { name: 'Memphis', distance: 390 },
            { name: 'NewOrleans', distance: 635 },
            { name: 'KansasCity', distance: 275 },
            { name: 'Wichita', distance: 180 }
        ],
        'Omaha': [
            { name: 'Chicago', distance: 470 },
            { name: 'Minneapolis', distance: 382 },
            { name: 'KansasCity', distance: 185 },
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
            { name: 'Memphis', distance: 395 },
            { name: 'Tulsa', distance: 635 },
        ],
        'Helena': [
            { name: 'Billings', distance: 240 },
            { name: 'Spokane', distance: 333 },
            { name: 'Boise', distance: 346 }
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
  

function calculate_estimated_distances(current, endname){
    let heuristicScore = Infinity;
    //calculate the heuristic function for each name 

    heuristicScore = haversine(current.lat, current.lng, endname.lat, endname.lng);

    return heuristicScore;
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

    setTimeout(() => {
        bestPath.setMap(map);
    }, speed*1000); // Set your desired timeout in milliseconds

    }, speed*1000);

}

var markerList = new Array();

function set_markers(){
    markerList.forEach(mark =>{
        mark.setMap(null);
    });
    
    markerList = new Array();

    locData.locations.forEach(function(location) {
        if (location.name == currentStart){
            var marker = new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: map,
                icon: {
                    url: "./flag-alt-solid-24 (1).png",
                },
                title: location.name
            });
        }
        else if(location.name == currentDestination){
            var marker = new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: map,
                icon: {
                    url: "./flag-alt-solid-24.png",
                },
                title: location.name
            });
        }
        else{
            var marker = new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: map,
                icon: {
                    url: "./circle-solid-24.png",
                    scaledSize: new google.maps.Size(12, 12)
                },
                title: location.name
            });
        }
            

        var infowindow = new google.maps.InfoWindow({
            content: "<div style='color: black; font-weight: bold; background-color:#00000000; display:flex; flex-direction: column;'>" 
                     + location.name 
                     + "<button onClick=\"a_star('" + location.name + "', '" + currentDestination + "')\">Set As Start</button>"
                     + "<button onClick=\"a_star('" + currentStart + "', '" + location.name + "')\">Set As Destination</button></div>"
        });
    
        marker.addListener("click", function() {
            infowindow.open(map, marker);

        });
    

        markerList.push(marker)
    });    
}

function build_map(){
    fetch('map_styling.json')
    .then(response => response.json())
    .then(data => {
        
        var mapOptions = {
            center: { lat: 37.7749, lng: -95.4194 },
            zoom: 5,
            styles: data,
            disableDefaultUI: true,
        }

        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        set_markers();

        Object.keys(locData.adjacencies).forEach(function(city) {
            var cityLocation = locData.locations.find(loc => loc.name === city);
        
            if (!cityLocation) {
                console.error("City location not found:", city);
                return; // Skip processing this city
            }
        
            var adjacentCities = locData.adjacencies[city];
            adjacentCities.forEach(function(adjacentCity) {
                var adjacentCityLocation = locData.locations.find(loc => loc.name === adjacentCity.name);
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
                    strokeColor: "#000000",
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                });
        
                path.setMap(map);
            });
    
        });
        return map
});
}

var eventHandle = new Array();
var activePath = new Array();
var activeBest = new Array();
var bestpath = new Map();

var currentStart = "LosAngeles"
var currentDestination = "NewYork"

function clear_path(path){
    path.forEach(line => {
        line.setMap(null);
    });
}

function clear_map(){
        clear_path(activePath);
        activePath = new Array();
        eventHandle = new Array();

        clear_path(activeBest);
        activeBest = new Array();
        bestpath = new Map();
}

function setCurrentAndEnd(startname, endname){
    currentStart = startname
    currentDestination = endname

    startText = document.getElementById("searchInput-start");
    destText = document.getElementById("searchInput-dest");

    startText.placeholder = currentStart;
    destText.placeholder = currentDestination;

    set_markers();
}

function a_star(startname, endname){
        clear_map();
        setCurrentAndEnd(startname, endname);
    
        startname = locData.locations.find(loc => loc.name === startname);        
        endname = locData.locations.find(loc => loc.name === endname);

        let openQueue = new PriorityQueue();
        console.log(openQueue);
        let visitedSet = new Set();
        let cameFrom = new Map();

        let gScore = new Map();
        locData.locations.forEach(node => gScore.set(node.name, Infinity));
        gScore.set(startname.name, 0);

        let fScore = new Map();
        locData.locations.forEach(node => fScore.set(node.name, Infinity));
        fScore.set(startname.name, calculate_estimated_distances(startname, endname));

        openQueue.enqueue(startname.name, fScore.get(startname.name));

        while (!openQueue.isEmpty()) {
                let iterationData = new Object();
                let prediscoverPath = [];
                let current = openQueue.extractMin().element;
                visitedSet.add(current);



                if (current != startname.name){    
                    
                    let currentCoords = locData.locations.find(loc => loc.name === current);
                    let lastCoords = locData.locations.find(loc => loc.name === cameFrom.get(current));

                    let pathCoords = [
                        {lat: currentCoords.lat, lng: currentCoords.lng},
                        {lat: lastCoords.lat, lng: lastCoords.lng},
                    ]

                    let explore = new google.maps.Polyline({
                        path: pathCoords,
                        geodesic: true,
                        strokeColor: "#D3D8C4",
                        strokeOpacity: 1.0,
                        strokeWeight: 3,
                        zIndex: 50
                    });
            
                    prediscoverPath.push(explore);
                }


            if (current === endname.name) {
                let currentCoords = locData.locations.find(loc => loc.name === current);
                let lastCoords = locData.locations.find(loc => loc.name === endname.name);

                let pathCoords = [
                    {lat: currentCoords.lat, lng: currentCoords.lng},
                    {lat: lastCoords.lat, lng: lastCoords.lng},
                ]

                let explore = new google.maps.Polyline({
                    path: pathCoords,
                    geodesic: true,
                    strokeColor: "#D3D8C4",
                    strokeOpacity: 1.0,
                    strokeWeight: 3,
                    zIndex: 50
                });
        
                prediscoverPath.push(explore);
                iterationData['edges'] = prediscoverPath;
                eventHandle.push(iterationData);



                console.log(reconstruct_path(cameFrom, current));

                bestpath = reconstruct_path(cameFrom, current);

                return reconstruct_path(cameFrom, current);
            }

            var neighbors = locData.adjacencies[current];
            console.log(current);

            neighbors.forEach(neighbor => {
                let gScoreTemp = gScore.get(current) + neighbor.distance;
    
                if (gScoreTemp < gScore.get(neighbor.name)) {
                    cameFrom.set(neighbor.name, current);
                    gScore.set(neighbor.name, gScoreTemp);

                    let neighborCoords = locData.locations.find(loc => loc.name === neighbor.name);
                    fScore.set(neighbor.name, gScoreTemp + calculate_estimated_distances(neighborCoords, endname));
    
                    if (!visitedSet.has(neighbor.name)) {
                        openQueue.enqueue(neighbor.name, fScore.get(neighbor.name));
                    }


                    
                }
                
               
            });
            iterationData['edges'] = prediscoverPath;
            eventHandle.push(iterationData);
        }

        //build_iteration(startname, 1);

        return null; // Failure, no path found
}

function dijkstra(startname, endname) {
    startText = startname;
    endText = endname;

    startname = locData.locations.find(loc => loc.name === startname);        
    endname = locData.locations.find(loc => loc.name === endname);

    let queue = new Queue();
    let cameFrom = new Map();
    let score = new Map();

    locData.locations.forEach(node => score.set(node.name, Infinity));

    score.set(startname.name, 0);

    queue.enqueue(startname, score.get(startText));

    while (!queue.isEmpty()) {

        current = queue.dequeue();
        let neighbors = locData.adjacencies[current];

        neighbors.forEach(neighbor =>{
            if ((neighbor.distance+score.get(current)) < score.get(neighbor.name)){
                score.set(neighbor.name, neighbor.distance+score.get());
                cameFrom.set(neighbor.name, current);
            }
        });
    }
    console.log(reconstruct_path(cameFrom, endname));
    return reconstruct_path(cameFrom, endname);
}

function reconstruct_path(cameFrom, current) {
    let totalPath = [current];
    while (cameFrom.has(current)) {
        current = cameFrom.get(current);
        totalPath.unshift(current);
    }
    return totalPath;
}


function check_heuristics(){ 
    let nonAdmis = [];
    locData.locations.forEach(location => {
        locData.adjacencies[location.name].forEach( adjacentCity => {
            let neighborCoords = locData.locations.find(loc => loc.name === adjacentCity.name);
            if (adjacentCity.distance <= calculate_estimated_distances(location, neighborCoords)){
            nonAdmis.push({neighbor: adjacentCity.name, n: location.name});
            }
        })
    })


    console.log(nonAdmis);
}

function check_symmetry(){ 
    let nonAdmis = [];
    locData.locations.forEach(location => {
        locData.adjacencies[location.name].forEach( adjacentCity => {

            let city = locData.adjacencies[adjacentCity.name].find(loc => loc.name === location.name);

            if (city == null){
            nonAdmis.push({neighbor: adjacentCity.name, n: location.name});
            }
        })
    })


    console.log(nonAdmis);
}

function show_events(speed){
    let index = 0;

    function processs_next_event() {
        if (index < eventHandle.length) {
            eventHandle[index]['edges'].forEach( edge => {
                edge.setMap(map);
                activePath.push(edge);
            });
            index++;
            setTimeout(processs_next_event, speed*1000); // Set timeout for 1 second (1000 milliseconds)
        }
    }

    processs_next_event();
}


function display_path(){

    function delete_temp_path(){
        activePath.forEach( edge => {
            edge.setMap(null);
        })
        setTimeout(draw_best_path, 100);
    }

    function draw_best_path(){
        let index = 0;

        while(index < bestpath.length-1){
            let currentCoords = locData.locations.find(loc => loc.name === bestpath[index]);
            let lastCoords = locData.locations.find(loc => loc.name === bestpath[index+1]);

            console.log(currentCoords)
        
            let pathCoords = [
                {lat: currentCoords.lat, lng: currentCoords.lng},
                {lat: lastCoords.lat, lng: lastCoords.lng},
            ];
        
            let explore = new google.maps.Polyline({
                path: pathCoords,
                geodesic: true,
                strokeColor: "#00FF00",
                strokeOpacity: 1.0,
                strokeWeight: 4,
                zIndex: 51
            });
        
            explore.setMap(map);
            activeBest.push(explore);
            index++; 
        }
           
    }

    delete_temp_path();

    

}

function set_start_dest_lists(){
    const startContent = document.getElementById('start-cont');
    const destContent = document.getElementById('dest-cont');
    const start = currentStart;
    const destination = currentDestination;

    locData.locations.forEach(city => {
        const anchor = document.createElement('a');
        anchor.textContent = city.name;
        anchor.setAttribute('onclick', `a_star('${city.name}', '${destination}')`);
        startContent.appendChild(anchor);
    });

    locData.locations.forEach(city => {
        const anchor = document.createElement('a');
        anchor.textContent = city.name;
        anchor.setAttribute('onclick', `a_star('${start}', '${city.name}')`);
        destContent.appendChild(anchor);
    });

}

function filterFunction() {
    var input, filter, div, a, i;
    input = document.getElementById("searchInput");
    console.log(input);
    filter = input.value.toUpperCase();
    div = document.getElementById("dropdown-content");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}



//IT IS VERY IMPORTANT THAT WE VALIDATE EVERY HUERISTIC IS SMALLER THAN ACTUAL DISTANCES
//SO IF ANY LOCATIONS ARE ADDED, PLEASE RUN THIS OR ELSE IT MAY NOT WORK AS INTENDED.
//V V V V V V V
//check_heuristics();


//ALSO VERY IMPORTANT THAT WE HAVE A BIDIRECTIONAL GRAPH UNLESS YOU ARE CERTAIN
//YOU WILL ONLY RUN IT ONE DIRECTION.     |
//SO RUN THIS IF ANY LOCATIONS ARE ADDED. V
//check_symmetry();


//a_star('LosAngeles', 'NewYork');
dijkstra('LosAngeles', 'NewYork');
//build_map();
set_start_dest_lists();