function initMap() {
    fetch('map_styling.json')
    .then(response => response.json())
    .then(data => {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: { lat: 0, lng: -180 },
            styles: data,
            disableDefaultUI: true,
            draggable: false,
            styles: data, // assuming `data` contains the map styles
        });

        const flightPlanCoordinates = [
            { lat: 37.772, lng: -122.214 },
            { lat: 21.291, lng: -157.821 },
            { lat: -18.142, lng: 178.431 },
            { lat: -27.467, lng: 153.027 },
        ];

        const flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
        });


        const flightPlanCoordinates2 = [
            { lat: 37.772, lng: -122.214 },
            { lat: -21.291, lng: -157.821 },
            { lat: -18.142, lng: 178.431 },
            { lat: -27.467, lng: 153.027 },
        ];

        const flightPath2 = new google.maps.Polyline({
            path: flightPlanCoordinates2,
            geodesic: true,
            strokeColor: "#00FF00",
            strokeOpacity: 1.0,
            strokeWeight: 2,
        });


        flightPath.setMap(map);
        flightPath2.setMap(map);

        window.initMap = initMap;
    });
}

initMap()


