import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

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

  static async reviewResto(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify({
        id: data.id,
        name: data.name,
        review: data.review,
      }),
    });
    return response.json();
  }
}

export default RestoSource;
