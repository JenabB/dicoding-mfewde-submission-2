import API_ENDPOINT from '../globals/api-endpoint';

class RestoSource {
  static async restoList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    console.log('list', responseJson.restaurants);
    return responseJson.restaurants;
  }

  static async searchResto(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    console.log('search', responseJson);
    return responseJson;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log('detail', responseJson);
    return responseJson.restaurant;
  }
}

export default RestoSource;
