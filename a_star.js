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
  }
  

  