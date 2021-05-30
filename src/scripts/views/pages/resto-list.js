import RestoSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const RestoList = {
  async render() {
    return `
    <div>
    <div class="hero" style="background-image: url('/images/heros/hero-image_4.jpg');">
    <div class="container">
      <h1 class="hero__title">Ziva Restaurant</h1>
        <p class="hero__tagline">various kinds of restaurant catalogs from various places</p>
        <a href="#mainContent" class="btn" tabindex="6">Let's Check!</a>
     </div>
  </div>
      <div class="content">
        <h2 class="content__heading">Catalogue</h2>
        <div id="restos" class="restos">
        </div>
      </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await RestoSource.restoList();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default RestoList;
