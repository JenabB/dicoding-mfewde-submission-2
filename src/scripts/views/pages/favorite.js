import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorites Restaurant</h2>
        <h1 id="empty-favorite">No Favorite Restaurant Yet, <a href="#mainContent">Check Catalogue</a></h1>
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');
    const emptyFavorite = document.querySelector('#empty-favorite');
    if (restos.length !== 0) {
      emptyFavorite.remove();
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
    }
  },
};

export default Favorite;
