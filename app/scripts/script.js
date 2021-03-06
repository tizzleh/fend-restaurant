/* eslint-disable no-unused-vars*/
let restaurants;
let neighborhoods;
let cuisines;
let map;
let markers = [];
/* eslint-enable no-unused-vars*/

/**
 * Fetch neighborhoods and cuisines as soon as the page is loaded.
 */
/* eslint-disable no-undef*/
document.addEventListener('DOMContentLoaded', (event) => {
  fetchNeighborhoods();
  fetchCuisines();
  focus();
});

/**
 *  Set focus on neighborhood select.
 */
function focus() {
  document.getElementById('neighborhoods-select').focus();
}

/**
 *  Fetch all neighborhoods and set their HTML.
 */
fetchNeighborhoods = () => {
  DBHelper.fetchNeighborhoods((error, neighborhoods) => {
    if (error) { // Got an error
    } else {
      self.neighborhoods = neighborhoods;
      fillNeighborhoodsHTML();
    }
  });
};

/**
 * Set neighborhoods HTML.
 */

fillNeighborhoodsHTML = (neighborhoods = self.neighborhoods) => {
  const select = document.getElementById('neighborhoods-select');
  neighborhoods.forEach((neighborhood) => {
    const option = document.createElement('option');
    option.innerHTML = neighborhood;
    option.value = neighborhood;
    select.append(option);
  });
};

/**
 * Fetch all cuisines and set their HTML.
 */
fetchCuisines = () => {
  DBHelper.fetchCuisines((error, cuisines) => {
    if (error) { // Got an error!
    } else {
      self.cuisines = cuisines;
      fillCuisinesHTML();
    }
  });
};

/**
 * Set cuisines HTML.
 */

fillCuisinesHTML = (cuisines = self.cuisines) => {
  const select = document.getElementById('cuisines-select');

  cuisines.forEach((cuisine) => {
    const option = document.createElement('option');
    option.innerHTML = cuisine;
    option.value = cuisine;
    select.append(option);
  });
};

window.initMap = () => {
  let loc = {
    lat: 40.722216,
    lng: -73.987501,
  };
  self.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: loc,
    scrollwheel: false,
  });
  updateRestaurants();
};

/**
 * Update page and map for current restaurants.
 */

updateRestaurants = () => {
  const cSelect = document.getElementById('cuisines-select');
  const nSelect = document.getElementById('neighborhoods-select');

  const cIndex = cSelect.selectedIndex;
  const nIndex = nSelect.selectedIndex;

  const cuisine = cSelect[cIndex].value;
  const neighborhood = nSelect[nIndex].value;

  DBHelper.fetchRestaurantByCuisineAndNeighborhood(
    cuisine, neighborhood, (error, restaurants) => {
      if (error) { // Got an error!
      } else {
        resetRestaurants(restaurants);
        fillRestaurantsHTML();
      }
    });
};

/**
 * Adds markers to map.
 * @param {array} map Markers of restaurants.
 */
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.

/**
 * Adds markers to map.
 * @param {array} map Markers of restaurants.
 */
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
/**
 * Adds markers to map.
 * @param {array} map Markers of restaurants.
 */
function showMarkers() {
  setMapOnAll(map);
}

/**
 * Deletes all markers in the array by removing references to them.
 * @param {array} map Markers of restaurants.
 */
function deleteMarkers() {
  clearMarkers();
  self.markers = [];
}
/**
 * Clear current restaurants, their HTML and remove their map markers.
 */

resetRestaurants = (restaurants) => {
  // Remove all restaurants
  self.restaurants = [];
  const ul = document.getElementById('restaurants-list');
  ul.innerHTML = '';
  self.markers = [];
  self.markers.forEach((m) => m.setMap(null));
  deleteMarkers();
  showMarkers();
  self.restaurants = restaurants;
};

/**
 * Create all restaurants HTML and add them to the webpage.
 */

fillRestaurantsHTML = (restaurants = self.restaurants) => {
  const ul = document.getElementById('restaurants-list');
  restaurants.forEach((restaurant) => {
    ul.append(createRestaurantHTML(restaurant));
  });
  addMarkersToMap();
};

/**
 * Create restaurant HTML.
 */

createRestaurantHTML = (restaurant) => {
  const li = document.createElement('li');
  const pic = document.createElement('picture');
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  const figCaption = document.createElement('figcaption');
  const source = document.createElement('source');
  image.className = 'restaurant-img';
  image.src = DBHelper.imageUrlForRestaurant(restaurant);
  figCaption.className = 'figcaption';
  image.srcset = DBHelper.imgUrlSrcSet(restaurant);
  image.alt = `Photo of ${restaurant.name}`;
  li.append(figure);
  figure.append(pic);
  figure.append(figCaption);
  figCaption.append(image.alt);
  pic.append(image);
  pic.append(source);

  const name = document.createElement('h2');
  name.innerHTML = restaurant.name;
  li.append(name);

  const neighborhood = document.createElement('p');
  neighborhood.innerHTML = restaurant.neighborhood;
  li.append(neighborhood);

  const address = document.createElement('p');
  address.innerHTML = restaurant.address;
  li.append(address);

  const more = document.createElement('a');
  more.innerHTML = 'View Details';
  more.href = DBHelper.urlForRestaurant(restaurant);
  li.append(more);

  return li;
};

/**
 * Add markers for current restaurants to the map.
 */

addMarkersToMap = (restaurants = self.restaurants) => {
  restaurants.forEach((restaurant) => {
    // Add marker to the map
    const marker = DBHelper.mapMarkerForRestaurant(restaurant, self.map);
    google.maps.event.addListener(marker, 'click', () => {
      window.location.href = marker.url;
    });
    markers.push(marker);
  });
};
/* eslint-disable no-unused-vars*/
/* eslint-disable eol-last*/