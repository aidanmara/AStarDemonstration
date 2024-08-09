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
        { name: 'New York', lat: 40.712776, lng: -74.005974 },
        { name: 'Los Angeles', lat: 34.052235, lng: -118.243683 },
        { name: 'Chicago', lat: 41.878113, lng: -87.629799 },
        { name: 'Houston', lat: 29.760427, lng: -95.369804 },
        { name: 'Phoenix', lat: 33.448376, lng: -112.074036 },
        { name: 'Philadelphia', lat: 39.952583, lng: -75.165222 },
        { name: 'San Antonio', lat: 29.424122, lng: -98.493629 },
        { name: 'San Diego', lat: 32.715736, lng: -117.161087 },
        { name: 'Dallas', lat: 32.776665, lng: -96.796989 },
        { name: 'San Jose', lat: 37.338207, lng: -121.886330 },
        { name: 'Jacksonville', lat: 30.332184, lng: -81.655647 },
        { name: 'Columbus', lat: 39.961178, lng: -82.998795 },
        { name: 'Charlotte', lat: 35.227085, lng: -80.843124 },
        { name: 'San Francisco', lat: 37.774929, lng: -122.419418 },
        { name: 'Indianapolis', lat: 39.768403, lng: -86.158068 },
        { name: 'Seattle', lat: 47.606209, lng: -122.332069 },
        { name: 'Denver', lat: 39.739236, lng: -104.990251 },
        { name: 'Washington DC', lat: 38.907192, lng: -77.036871 },
        { name: 'Boston', lat: 42.360082, lng: -71.058880 },
        { name: 'El Paso', lat: 31.761878, lng: -106.485022 },
        { name: 'Nashville', lat: 36.162663, lng: -86.781601 },
        { name: 'Detroit', lat: 42.331427, lng: -83.045754 },
        { name: 'Memphis', lat: 35.149534, lng: -90.048980 },
        { name: 'Portland', lat: 45.512794, lng: -122.679565 },
        { name: 'Las Vegas', lat: 36.169941, lng: -115.139830 },
        { name: 'Louisville', lat: 38.252665, lng: -85.758456 },
        { name: 'Milwaukee', lat: 43.038902, lng: -87.906474 },
        { name: 'Albuquerque', lat: 35.084386, lng: -106.650422 },
        { name: 'Fresno', lat: 36.737798, lng: -119.787125 },
        { name: 'Sacramento', lat: 38.581572, lng: -121.494400 },
        { name: 'Atlanta', lat: 33.748995, lng: -84.387982 },
        { name: 'Kansas City', lat: 39.099727, lng: -94.578567 },
        { name: 'Miami', lat: 25.761680, lng: -80.191790 },
        { name: 'Raleigh', lat: 35.779590, lng: -78.638179 },
        { name: 'Omaha', lat: 41.256538, lng: -95.934502 },
        { name: 'Minneapolis', lat: 44.977753, lng: -93.265011 },
        { name: 'Tulsa', lat: 36.153981, lng: -95.992775 },
        { name: 'Wichita', lat: 37.687176, lng: -97.330053 },
        { name: 'New Orleans', lat: 29.951065, lng: -90.071533 },
        { name: 'Cleveland', lat: 41.499320, lng: -81.694360 },
        { name: 'Boise', lat: 43.615021, lng: -116.202316 },
        { name: 'Spokane', lat: 47.658779, lng: -117.426048 },
        { name: 'Salt Lake City', lat: 40.760780, lng: -111.891045 },
        { name: 'Helena', lat: 46.589145, lng: -112.039105 },
        { name: 'Billings', lat: 45.783285, lng: -108.500690 },

    ],
    adjacencies: {
        'New York': [
            { name: 'Philadelphia', distance: 97.2 },
            { name: 'Boston', distance: 215 },
            { name: 'Cleveland', distance: 460 }
        ],
        'Philadelphia': [
            { name: 'New York', distance: 97.2 },
            { name: 'Washington DC', distance: 140 }
        ],
        'Boston': [
            { name: 'New York', distance: 215 }
        ],
        'Cleveland': [
            { name: 'New York', distance: 460 },
            { name: 'Detroit', distance: 170 },
            { name: 'Columbus', distance: 142 }
        ],
        'Los Angeles': [
            { name: 'San Diego', distance: 120 },
            { name: 'San Jose', distance: 340 },
            { name: 'Las Vegas', distance: 270 },
            { name: 'Fresno', distance: 221 },
            { name: 'Phoenix', distance: 373 }
        ],
        'San Diego': [
            { name: 'Los Angeles', distance: 120 },
            { name: 'Phoenix', distance: 355 }
        ],
        'San Jose': [
            { name: 'San Francisco', distance: 48 },
            { name: 'Los Angeles', distance: 340 },
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
            { name: 'Kansas City', distance: 508 },
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
            { name: 'Washington DC', distance: 410 }
        ],
        'Houston': [
            { name: 'San Antonio', distance: 197 },
            { name: 'Dallas', distance: 239 },
            { name: 'New Orleans', distance: 348 }
        ],
        'San Antonio': [
            { name: 'Houston', distance: 197 },
            { name: 'Dallas', distance: 274 },
            { name: 'El Paso', distance: 552 }
        ],
        'Dallas': [
            { name: 'Houston', distance: 239 },
            { name: 'San Antonio', distance: 274 },
            { name: 'Tulsa', distance: 240 },
        ],
        'Phoenix': [
            { name: 'San Diego', distance: 355 },
            { name: 'Las Vegas', distance: 297 },
            { name: 'Albuquerque', distance: 419 },
            { name: 'Los Angeles', distance: 373 },
            {name: 'El Paso', distance: 430 },
        ],
        'El Paso': [
            { name: 'San Antonio', distance: 552 },
            { name: 'Phoenix', distance: 430 },
            { name: 'Albuquerque', distance: 266 }
        ],
        'Albuquerque': [
            { name: 'Phoenix', distance: 419 },
            { name: 'El Paso', distance: 266 },
            { name: 'Denver', distance: 449 },
            { name : 'Wichita', distance: 595.5}
        ],
        'Denver': [
            { name: 'Kansas City', distance: 605 },
            { name: 'Salt Lake City', distance: 520 },
            { name: 'Albuquerque', distance: 449 },
            { name: 'Omaha', distance: 540 },
            { name: 'Boise', distance: 836 },
            { name: 'Billings', distance: 554 },
        ],
        'Washington DC': [
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
            { name: 'Salt Lake City', distance: 344 },
            { name: 'Seattle', distance: 496 },
            { name: 'Denver', distance: 836 },
            { name: 'Portland', distance: 430 },
        ],
        'Salt Lake City': [
            { name: 'Boise', distance: 344 },
            { name: 'Las Vegas', distance: 421 },
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
            { name: 'Washington DC', distance: 278 },
            { name: 'Charlotte', distance: 130 },
        ],
        'Atlanta': [
            { name: 'Charlotte', distance: 244 },
            { name: 'Jacksonville', distance: 346 },
            { name: 'New Orleans', distance: 470 },
            { name: 'Memphis', distance: 384 }
        ],
        'Nashville': [
            { name: 'Memphis', distance: 210 },
            { name: 'Louisville', distance: 175 },
            { name: 'Kansas City', distance: 553 },
            { name: 'Charlotte', distance: 410 }
        ],
        'Memphis': [
            { name: 'Nashville', distance: 210 },
            { name: 'New Orleans', distance: 395 },
            { name: 'Atlanta', distance: 384 },
            { name: 'Tulsa', distance: 390 },
        ],
        'Portland': [
            { name: 'Seattle', distance: 174 },
            { name: 'San Francisco', distance: 634 },
            { name: 'Boise', distance: 430 }
        ],
        'San Francisco': [
            { name: 'San Jose', distance: 48 },
            { name: 'Sacramento', distance: 87 },
            { name: 'Portland', distance: 634 }
        ],
        'Fresno': [
            { name: 'San Jose', distance: 152 },
            { name: 'Los Angeles', distance: 221 },
            { name: 'Sacramento', distance: 172 },
        ],
        'Sacramento': [
            { name: 'San Francisco', distance: 87 },
            { name: 'San Jose', distance: 121 },
            { name: 'Fresno', distance: 172 },
            { name: 'Las Vegas', distance: 562 }
        ],
        'Las Vegas': [
            { name: 'Los Angeles', distance: 270 },
            { name: 'Phoenix', distance: 297 },
            { name: 'Salt Lake City', distance: 421 },
            { name: 'Sacramento', distance: 562 }
        ],
        'Kansas City': [
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
            { name: 'Kansas City', distance: 198 },
            { name : 'Albuquerque', distance: 595.5}
        ],
        'Tulsa': [
            { name: 'Dallas', distance: 240 },
            { name: 'Memphis', distance: 390 },
            { name: 'New Orleans', distance: 635 },
            { name: 'Kansas City', distance: 275 },
            { name: 'Wichita', distance: 180 }
        ],
        'Omaha': [
            { name: 'Chicago', distance: 470 },
            { name: 'Minneapolis', distance: 382 },
            { name: 'Kansas City', distance: 185 },
            { name: 'Denver', distance: 540 }
        ],
        'Minneapolis': [
            { name: 'Milwaukee', distance: 337 },
            { name: 'Billings', distance: 824 },
            { name: 'Omaha', distance: 382 }
        ],
        'New Orleans': [
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

    setTimeout(() => {
    
    var bestPath = currentpaths[0];

    setTimeout(() => {
        bestPath.setMap(map);
    }, speed*1000); // Set your desired timeout in milliseconds

    }, speed*1000);

}

var markerList = new Array();
var markerMap = new Map();

function set_markers(){
    markerList.forEach(mark =>{
        mark.setMap(null);
    });

    markerMap = new Map();
    markerMap.clear();

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
                    scaledSize: new google.maps.Size(14, 14)
                },
                title: location.name
            });
        }
            

        var infowindow = new google.maps.InfoWindow({
            content: `
                <div class="info-window">
                    <h1>${location.name}</h1>
                    <button onClick="handle_marker_click(start='${location.name}', dest='${currentDestination}')">Set As Start</button>
                    <button onClick="handle_marker_click(start='${currentStart}',  dest='${location.name}')">Set As Destination</button>
                </div>
            `
            ,
            pixelOffset: new google.maps.Size(0, -15) // Adjust the vertical offset here
        });
    
        marker.addListener("click", function() {
            infowindow.open(map, marker);

        });

        marker.addListener('mouseover', function() {
            glow_hover_mouse(location.name, marker);
        });

        markerMap.set(location.name, marker);
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

var currentStart = "Los Angeles"
var currentDestination = "New York"

var currentAlgo = "A*";

var timeoutID = ""

async function run_reconstruct() {
    await clear_lines(); 
    await set_pid();
    await show_events(); 
}

function set_pid() {
    return new Promise(resolve => {
        pid++;
        resolve();
    });
}

function clear_path(path){
    path.forEach(line => {
        line.setMap(null);
    });
}

function clear_lines() {
    return new Promise(resolve => {
        clear_path(activePath);
        clear_path(activeBest);
        resolve();
    });
}

function clear_map() {
    return new Promise(resolve => {

        clear_path(activePath);
        activePath = [];
        eventHandle = [];

        clear_path(activeBest);
        activeBest = [];
        bestpath = new Map();
        
        resolve();
    });
}
    

function set_current_and_end(startname, endname){
    currentStart = startname
    currentDestination = endname

    startText = document.getElementById("searchInputFrom");
    destText = document.getElementById("searchInputTo");

    startText.placeholder = currentStart;
    destText.placeholder = currentDestination;

    let title = document.getElementById("title");
    title.innerHTML = `<h1>${currentAlgo} Pathfinding from ${startname} to ${endname}</h1>`;

    set_markers();
}

function a_star(startname, endname){
        startname = locData.locations.find(loc => loc.name === startname);        
        endname = locData.locations.find(loc => loc.name === endname);

        let openQueue = new PriorityQueue();
        let visitedSet = new Set();
        let cameFrom = new Map();

        let gScore = new Map();
        const startTime = performance.now();
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
                iterationData['visitedCity'] = current;

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


                bestpath = reconstruct_path(cameFrom, current);
                display_best_path(bestpath, gScore.get(current));

                let astarTime = quiet_astar(startname.name, endname.name);
                let dijkstraTime = quiet_dijkstra(startname.name, endname.name);

                let performanceText = document.getElementById("performance");
                performanceText.innerHTML = `<h1>Time to converge: ${astarTime.toFixed(8)}ms</h1>`;
                
                let efficiencyText = document.getElementById("efficiency");
                efficiencyText.style.color = "#32a852";
                let eff = (dijkstraTime - astarTime)
                efficiencyText.innerHTML = `<h1> ${eff.toFixed(3)}ms faster than Dijkstra's </h1>`;



                return reconstruct_path(cameFrom, current);
            }

            var neighbors = locData.adjacencies[current];
            iterationData['visitedCities'] = new Array;

            neighbors.forEach(neighbor => {
                let gScoreTemp = gScore.get(current) + neighbor.distance;
    
                if (gScoreTemp < gScore.get(neighbor.name)) {
                    cameFrom.set(neighbor.name, current);
                    gScore.set(neighbor.name, gScoreTemp);

                    let neighborCoords = locData.locations.find(loc => loc.name === neighbor.name);
                    fScore.set(neighbor.name, gScoreTemp + calculate_estimated_distances(neighborCoords, endname));
                    iterationData['visitedCities'].push([neighbor.name, gScore.get(neighbor.name)]);
    
                    if (!visitedSet.has(neighbor.name)) {
                        openQueue.enqueue(neighbor.name, fScore.get(neighbor.name));
                    }


                    
                }
                
               
            });
            iterationData['edges'] = prediscoverPath;
            eventHandle.push(iterationData);
        }


        return null; 
}



function dijkstra(startname, endname) {

    startname = locData.locations.find(loc => loc.name === startname);        
    endname = locData.locations.find(loc => loc.name === endname);

    let openQueue = new PriorityQueue();
    let visitedSet = new Set();
    let cameFrom = new Map();

    const startTime = performance.now();

    let gScore = new Map();
    locData.locations.forEach(node => gScore.set(node.name, Infinity));
    gScore.set(startname.name, 0);

    openQueue.enqueue(startname.name, gScore.get(startname.name));

    while (!openQueue.isEmpty()) {
        let iterationData = new Object();
        let prediscoverPath = [];
        let current = openQueue.extractMin().element;
        visitedSet.add(current);
        iterationData['visitedCity'] = current;

        if (current != startname.name){    
            let currentCoords = locData.locations.find(loc => loc.name === current);
            let lastCoords = locData.locations.find(loc => loc.name === cameFrom.get(current));

            let pathCoords = [
                {lat: currentCoords.lat, lng: currentCoords.lng},
                {lat: lastCoords.lat, lng: lastCoords.lng},
            ];

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
            ];

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

            bestpath = reconstruct_path(cameFrom, current);

            display_best_path(bestpath,gScore.get(current));

            let endTime = performance.now();
            let dijkstraTime = (endTime - startTime);
            let astarTime = quiet_astar(startname.name,endname.name);

            let performanceText = document.getElementById("performance");
            performanceText.innerHTML = `<h1>Time to converge: ${(endTime - startTime).toFixed(8)}ms</h1>`;

            let efficiencyText = document.getElementById("efficiency");
            efficiencyText.style.color = "#944941"; 
            let eff = (dijkstraTime - astarTime);
            efficiencyText.innerHTML = `<h1> ${eff.toFixed(3)}ms slower than A* </h1>`;

            return reconstruct_path(cameFrom, current);
        }

        var neighbors = locData.adjacencies[current];
        iterationData['visitedCities'] = new Array;
        
        neighbors.forEach(neighbor => {
            let gScoreTemp = gScore.get(current) + neighbor.distance;

            if (gScoreTemp < gScore.get(neighbor.name)) {
                cameFrom.set(neighbor.name, current);
                gScore.set(neighbor.name, gScoreTemp);
                iterationData['visitedCities'].push([neighbor.name, gScore.get(neighbor.name)]);

                openQueue.enqueue(neighbor.name, gScore.get(neighbor.name));
            }
        });

        iterationData['edges'] = prediscoverPath;
        eventHandle.push(iterationData);
    }

    return null;
}

function display_best_path(bestPath,gScore){
    let bestPathDiv = document.getElementById("best-path-li");

    bestPathDiv.innerHTML = "";

    bestPath.forEach(stop => {
        let listItem = document.createElement("h3");
        listItem.textContent = stop;
        bestPathDiv.appendChild(listItem);
    });

    let totalScoreItem = document.createElement("h3");
    totalScoreItem.textContent = `Total distance: ${gScore.toFixed(2)}mi`;
    bestPathDiv.appendChild(totalScoreItem);
}

function quiet_astar(startname, endname){
    startname = locData.locations.find(loc => loc.name === startname);        
    endname = locData.locations.find(loc => loc.name === endname);

    let openQueue = new PriorityQueue();
    let visitedSet = new Set();
    let cameFrom = new Map();

    let gScore = new Map();
    const startTime = performance.now();
    locData.locations.forEach(node => gScore.set(node.name, Infinity));
    gScore.set(startname.name, 0);

    let fScore = new Map();
    locData.locations.forEach(node => fScore.set(node.name, Infinity));
    fScore.set(startname.name, calculate_estimated_distances(startname, endname));

    openQueue.enqueue(startname.name, fScore.get(startname.name));

    while (!openQueue.isEmpty()) {
        let current = openQueue.extractMin().element;
        visitedSet.add(current);

        if (current === endname.name) {
            let endTime = performance.now();
            return endTime - startTime;
        }

        var neighbors = locData.adjacencies[current];

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
    }
    return null;
}

function quiet_dijkstra(startname, endname) {
    
    startname = locData.locations.find(loc => loc.name === startname);        
    endname = locData.locations.find(loc => loc.name === endname);

    let openQueue = new PriorityQueue();
    let visitedSet = new Set();
    let cameFrom = new Map();

    const startTime = performance.now();

    let gScore = new Map();
    locData.locations.forEach(node => gScore.set(node.name, Infinity));
    gScore.set(startname.name, 0);

    openQueue.enqueue(startname.name, gScore.get(startname.name));

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
            ];

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
            ];

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

            bestpath = reconstruct_path(cameFrom, current);

            let endTime = performance.now();
            return (endTime - startTime);
        }

        var neighbors = locData.adjacencies[current];

        neighbors.forEach(neighbor => {
            let gScoreTemp = gScore.get(current) + neighbor.distance;

            if (gScoreTemp < gScore.get(neighbor.name)) {
                cameFrom.set(neighbor.name, current);
                gScore.set(neighbor.name, gScoreTemp);

                if (!visitedSet.has(neighbor.name)) {
                    openQueue.enqueue(neighbor.name, gScore.get(neighbor.name));
                }
            }
        });

        //iterationData['edges'] = prediscoverPath;
        //eventHandle.push(iterationData);
    }

    return null;
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
var pid = 0; // Process ID tracker

function show_events() {
    return new Promise(resolve => {
        const check = ++pid; // Increment and use a new unique ID for each execution
        let index = 0;
        reset_adj_mat();
        let table = document.getElementById("adjacency-table");
        let bigTable = document.getElementById("adjacency-table-max");

        function process_next_event() {
            if (index < eventHandle.length && pid === check) {
                let speed = document.getElementById("speed-range").value;

                unhighlight_city(); 

                let event = eventHandle[index];

                // Display the edges on the map
                if (event['edges']) {
                    event['edges'].forEach(edge => {
                        edge.setMap(map);
                        activePath.push(edge);
                    });
                }

                // Highlight the current city and its neighbors
                if (event['visitedCity']) {
                    highlight_city(event['visitedCity'], event['visitedCities']);
                }

                // Update the adjacency matrix with the current city's values
                if (event['visitedCities']) {
                    updateAdjacencyMatrix(event['visitedCity'], event['visitedCities']);
                }

                bigTable.innerHTML = table.innerHTML;

                index++;
                setTimeout(process_next_event, speed * 1000);
            } else {
                if (pid === check) {
                    setTimeout(display_path, 1); 
                    resolve(); 
                }
                resolve(); 
            }
        }

        process_next_event();
    });
}

function highlight_city(city, neighbors) {
    let table = document.getElementById("adjacency-table");
    
    let headerCell = table.querySelector(`th[data-city="${city}"]`);
    if (headerCell) {
        headerCell.classList.add("highlight");
    }
    let row = table.querySelector(`tr[data-city="${city}"]`);

    if (row) {
        row.classList.add("highlight");
        Array.from(row.children).forEach(cell => cell.classList.add("highlight"));
    }

    let columnIndex = Array.from(table.querySelectorAll("tr")[0].children)
                           .findIndex(cell => cell.textContent === city);
    if (columnIndex !== -1) {
        table.querySelectorAll(`tr:not(:first-child) td:nth-child(${columnIndex + 1})`)
             .forEach(cell => cell.classList.add("highlight"));
    }


    if (neighbors && neighbors.length != 0){
        neighbors.forEach(neighbor => {
            let neighborRow = table.querySelector(`tr[data-city="${neighbor[0]}"]`);
            if (neighborRow) {
                // Highlight the cell in the row of the neighbor
                let neighborCell = neighborRow.children[columnIndex];
                if (neighborCell) {
                    neighborCell.classList.add("highlight-update");
                }
            }

            let neighborColumnIndex = Array.from(table.querySelectorAll("tr:first-child th"))
                                        .findIndex(cell => cell.getAttribute("data-city") === neighbor[0]);
            if (neighborColumnIndex !== -1) {
                table.querySelectorAll(`tr:not(:first-child) td:nth-child(${neighborColumnIndex + 1})`)
                    .forEach(cell => cell.classList.add("highlight-update"));
            }
        });
    }
}

function unhighlight_city() {
    let highlightedElements = document.querySelectorAll('.highlight, .highlight-update');

    highlightedElements.forEach(element => {
        element.classList.remove('highlight');
        element.classList.remove('highlight-update');
    });
}

function updateAdjacencyMatrix(currentCity, visitedCities) {
    let table = document.getElementById("adjacency-table");
    
    // Update the row for the current city
    let currentRow = table.querySelector(`tr[data-city="${currentCity}"]`);
    let currentColIndex = Array.from(table.querySelectorAll("tr")[0].children)
                               .findIndex(cell => cell.textContent === currentCity);
    
    visitedCities.forEach(([neighborCity, distance]) => {
        let neighborRow = table.querySelector(`tr[data-city="${neighborCity}"]`);
        let neighborColIndex = Array.from(table.querySelectorAll("tr")[0].children)
                                    .findIndex(cell => cell.textContent === neighborCity);
        
        if (currentRow && neighborRow) {
            // Update cell at currentRow and neighborColIndex with distance
            currentRow.children[neighborColIndex].textContent = distance.toFixed(2);
            // Update cell at neighborRow and currentColIndex with distance
            neighborRow.children[currentColIndex].textContent = distance.toFixed(2);
        }
    });
}

function display_path(){

    function draw_best_path(){
        let index = 0;

        while(index < bestpath.length-1){
            let currentCoords = locData.locations.find(loc => loc.name === bestpath[index]);
            let lastCoords = locData.locations.find(loc => loc.name === bestpath[index+1]);
        
            let pathCoords = [
                {lat: currentCoords.lat, lng: currentCoords.lng},
                {lat: lastCoords.lat, lng: lastCoords.lng},
            ];
        
            let explore = new google.maps.Polyline({
                path: pathCoords,
                geodesic: true,
                strokeColor: "#618152",
                strokeOpacity: 1.0,
                strokeWeight: 4,
                zIndex: 52
            });
        
            explore.setMap(map);
            activeBest.push(explore);
            index++; 
        }
           
    }

    setTimeout(draw_best_path, 100);
}

function set_start_dest_lists(){
    const startContent = document.getElementById('start-cont');
    const destContent = document.getElementById('dest-cont');
    const start = currentStart;
    const destination = currentDestination;

    startContent.innerHTML = '';
    destContent.innerHTML = '';

    locData.locations.forEach(city => {
        const startAnchor = document.createElement('a');
        startAnchor.textContent = city.name;
        startAnchor.setAttribute('onclick', `handle_astar_click('start-cont', '${city.name}', '${destination}')`);
        startAnchor.addEventListener('mouseover', () => glow_hover(city.name, startAnchor));
        startContent.appendChild(startAnchor);
    });

    locData.locations.forEach(city => {
        const destAnchor = document.createElement('a');
        destAnchor.textContent = city.name;
        destAnchor.setAttribute('onclick', `handle_astar_click('dest-cont', '${start}', '${city.name}')`);
        destAnchor.addEventListener('mouseover', () => glow_hover(city.name, destAnchor));
        destContent.appendChild(destAnchor);
    });
}


function handle_astar_click(id,start,dest){
    hide_dropdown(id)
    set_current_and_end(start, dest);
    clear_map();
    set_start_dest_lists();
}

function handle_marker_click(start,dest){
    set_current_and_end(start, dest);
    clear_map();
    set_start_dest_lists();
}


function filterFunction(form, container) {
    var input, filter, div, a, i;
    input = document.getElementById(form);
    filter = input.value.toUpperCase();
    div = document.getElementById(container);
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

function show_dropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.style.display = "block";
    }
}

function hide_dropdown(dropdownId, inputField) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.style.display = "None";
    }
    
    if (inputField) {
        var inputElement = document.getElementById(inputField);
        if (inputElement) {
            inputElement.blur();
        }
    }
}

function glow_hover(city, div) {
    let citycoords = locData.locations.find(loc => loc.name === city);
    let marker = markerMap.get(city);

    if (citycoords && marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);

        function removeMarker() {
            marker.setAnimation(null);
            div.removeEventListener('mouseout', removeMarker); 
        }

        div.addEventListener('mouseout', removeMarker);
    }
}

function glow_hover_mouse(city, marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);

    marker.addListener('mouseout', function removeMarkerAnimation() {
        marker.setAnimation(null);
    });
}

var slider = document.getElementById("speed-range");
var output = document.getElementById("speed-text");
output.innerHTML = `Speed: ${slider.value} s`;

slider.oninput = function() {
  output.innerHTML = `Speed: ${this.value} s`;
}

var switchButton = document.getElementById("switch-button");

switchButton.addEventListener("click", function() {
    if (currentAlgo == "A*"){
        currentAlgo = "Dijkstra's";
        switchButton.innerHTML = "Switch to A*";
        clear_map();
        set_current_and_end(currentStart, currentDestination);
        reset_adj_mat()
    }
    else if(currentAlgo == "Dijkstra's"){
        currentAlgo = "A*";
        switchButton.innerHTML = "Switch to Dijkstra's";
        clear_map();
        set_current_and_end(currentStart, currentDestination);
    }
})

function reset_adj_mat() {
    let table = document.getElementById("adjacency-table");
    let locations = locData.locations;
    let cities = locations.map(loc => loc.name);

    // Reset all cells to "∞"
    for (let i = 1; i < table.rows.length; i++) {
        let row = table.rows[i];

        for (let j = 1; j < row.cells.length; j++) {
            row.cells[j].textContent = "∞";
        }
    }

    // Update the cell at the current destination column to "0"
    let destColumnIndex = cities.indexOf(currentDestination);
    for (let i = 1; i < table.rows.length; i++) {
        let row = table.rows[i];
        if (row.getAttribute("data-city") === currentDestination) {
            row.cells[destColumnIndex + 1].textContent = "0";
        }
    }
}

function create_adj_mat_a() {
    let table = document.getElementById("adjacency-table");
    let locations = locData.locations;
    let cities = locations.map(loc => loc.name);

    let n = cities.length;
    let adjacencyMatrix = Array.from({ length: n }, () => Array(n).fill(Infinity));

    cities.forEach((city, i) => {
        let neighbors = locData.adjacencies[city] || [];
        neighbors.forEach(neighbor => {
            let j = cities.indexOf(neighbor.name);
            if (j !== -1) {
                adjacencyMatrix[i][j] = neighbor.distance;
            }
        });
    });

    // Create header row
    let headerRow = table.insertRow();
    headerRow.insertCell().appendChild(document.createTextNode(" "));
    cities.forEach(city => {
        let headerCell = headerRow.insertCell();
        headerCell.appendChild(document.createTextNode(city));
        headerCell.setAttribute("data-city", city);
    });

    // Find the column index for the current destination
    let destColumnIndex = cities.indexOf(currentDestination);

    // Create rows for the matrix
    cities.forEach((city, i) => {
        let row = table.insertRow();
        row.insertCell().appendChild(document.createTextNode(city));
        row.setAttribute("data-city", city);

        adjacencyMatrix[i].forEach((distance, j) => {
            let cell = row.insertCell();
            // Set the cell at the current destination column to "0"
            if (city === currentDestination && j === destColumnIndex) {
                cell.appendChild(document.createTextNode("0"));
            } else {
                cell.appendChild(document.createTextNode("∞"));
            }
        });
    });
    
    let bigTable = document.getElementById("adjacency-table-max");
    bigTable.innerHTML = table.innerHTML;
}

// Run the function to create the matrix
create_adj_mat_a();

document.getElementById("expand-table").addEventListener("click", function() {
    var table = document.getElementById("adjacency-table-cont");
    table.classList.toggle("expanded");

    tableMax = document.getElementById("max-table-cont");
    tableMax.classList.toggle("expanded");
});

let collapseButton = document.getElementById("max-collapse");

    collapseButton.addEventListener("click", function() {
        var table = document.getElementById("adjacency-table-cont");
        table.classList.toggle("expanded");
        table = document.getElementById("max-table-cont");
        table.classList.toggle("expanded");
});


function call_and_display(){
    
    if (currentAlgo == "A*"){
        clear_map();
        a_star(currentStart, currentDestination);
    }
    else if (currentAlgo == "Dijkstra's"){
        clear_map();
        dijkstra(currentStart, currentDestination);
    }

    run_reconstruct();
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
//dijkstra('LosAngeles', 'NewYork');
//quiet_dijkstra('LosAngeles', 'NewYork');
build_map();
set_start_dest_lists();