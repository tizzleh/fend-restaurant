/* eslint-disable no-unused-vars*/
/**
 * Common database helper functions.
 */
class DBHelper {
  /**
   * Database URL.
   * Change this to restaurants.json file location on your server.
   */
  static get DATABASE_URL() {
    return `http://localhost:3000/data/restaurants.json`;
  }

  /* eslint-enable no-unused-vars*/
  /**
   * Fetch restaurants.
   * @param {event} callback The first number.
   */
  static fetchRestaurants(callback) {
    /* eslint-disable no-undef */
    let xhr = new XMLHttpRequest();
    xhr.open('GET', DBHelper.DATABASE_URL);
    xhr.onload = () => {
      if (xhr.status === 200) { // Got a success response from server!
        const json = JSON.parse(xhr.responseText);
        const restaurants = json.restaurants;
        callback(null, restaurants);
      } else { // Oops!. Got an error from server.
        const error = (`Request failed. Returned status of ${xhr.status}`);
        callback(error, null);
      }
    };
    xhr.send();
  }

  /**
   * Adds two numbers together.
   * @param {int} id The ID of the restaurant.
   * @param {event} callback The second number.
   */
  static fetchRestaurantById(id, callback) {
    // fetch all restaurants with proper error handling.
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        const restaurant = restaurants.find((r) => r.id == id);
        if (restaurant) { // Got the restaurant
          callback(null, restaurant);
        } else { // Restaurant does not exist in the database
          callback('Restaurant does not exist', null);
        }
      }
    });
  }

  /**
   * Fetch restaurants by selected cuisine.
   * @param {object} cuisine The first number.
   * @param {event} callback The second number.
   */
  static fetchRestaurantByCuisine(cuisine, callback) {
    // Fetch all restaurants  with proper error handling
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given cuisine type
        const results = restaurants.filter((r) => r.cuisine_type == cuisine);
        callback(null, results);
      }
    });
  }

  /**
   * Fetch restaurants by selected cuisine.
   * @param {object} neighborhood The first number.
   * @param {event} callback The second number.
   */
  static fetchRestaurantByNeighborhood(neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given neighborhood
        const results = restaurants.filter(
          (r) => r.neighborhood == neighborhood);
        callback(null, results);
      }
    });
  }

  /**
   * Fetch restaurants by selected cuisine.
   * @param {object} cuisine The first number.
   * @param {object} neighborhood The first number.
   * @param {event} callback The second number.
   */
  static fetchRestaurantByCuisineAndNeighborhood(
    cuisine, neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        let results = restaurants;
        if (cuisine != 'all') { // filter by cuisine
          results = results.filter((r) => r.cuisine_type == cuisine);
        }
        if (neighborhood != 'all') { // filter by neighborhood
          results = results.filter((r) => r.neighborhood == neighborhood);
        }
        callback(null, results);
      }
    });
  }

  /**
   * Fetch restaurants by selected cuisine.
   * @param {event} callback The second number.
   */
  static fetchNeighborhoods(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all neighborhoods from all restaurants
        const neighborhoods = restaurants.map(
          (v, i) => restaurants[i].neighborhood);
        // Remove duplicates from neighborhoods
        const uniqueNeighborhoods = neighborhoods.filter(
          (v, i) => neighborhoods.indexOf(v) == i);
        callback(null, uniqueNeighborhoods);
      }
    });
  }

  /**
   * Fetch restaurants by selected cuisine.
   * @param {event} callback The second number.
   */
  static fetchCuisines(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all cuisines from all restaurants
        const cuisines = restaurants.map(
          (v, i) => restaurants[i].cuisine_type);
        // Remove duplicates from cuisines
        const uniqueCuisines = cuisines.filter(
          (v, i) => cuisines.indexOf(v) == i);
        callback(null, uniqueCuisines);
      }
    });
  }
  /**
   * Adds two numbers together.
   * @param {object} restaurant The restaurant object.
   * @return {string} URLs of image with varying widths.
   */
  static imgUrlSrcSet(restaurant) {
    let pic = restaurant.photograph.split('.')[0];
    let srcWidth =
      `images/400-${pic}.jpg 400w,
      images/600-${pic}.jpg 600w,
      images/800-${pic}.jpg 800w`;
    return (decodeURI(srcWidth));
  }

  /**
   * Add dynamic copyright to footer
   */
  // function copyRight() {
  //   let date = new Date().getFullYear();
  //   document.getElementById('year').innerHTML = date;
  // }
  // copyRight();
  /**
   * Adds two numbers together.
   * @param {object}  restaurant The restaurant object.
   * @return {string} The url of restaurant.
   */
  static urlForRestaurant(restaurant) {
    return (`./restaurant.html?id=${restaurant.id}`);
  }

  /**
   * Adds two numbers together.
   * @param {object}  restaurant The restaurant object.
   * @return {int} The sum of the two numbers.
   */
  static imageUrlForRestaurant(restaurant) {
    return (`images/800-${restaurant.photograph}`);
  }

  /**
   * Adds markers to map.
   * @param {object} restaurant The restaurant object.
   * @param {object} map The google map object.
   * @return {object} The marker object.
   */
  static mapMarkerForRestaurant(restaurant, map) {
    const marker = new google.maps.Marker({
      position: restaurant.latlng,
      title: restaurant.name,
      url: DBHelper.urlForRestaurant(restaurant),
      map: map,
      animation: google.maps.Animation.DROP,
    });
    return marker;
  }
}
/* eslint-disable eol-last */