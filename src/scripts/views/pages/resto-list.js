import RestoSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const RestoList = {
  async render() {
    const html = `
    <div>
   
    <div class="hero" style="background-image: url('/images/heros/hero-image_4.jpg');">
    <div class="container">
      <h1 class="hero__title">Ziva Restaurant</h1>
        <p class="hero__tagline">various kinds of restaurant catalogs from various places</p>
        <a href="#mainContent" class="btn">Let's Check!</a>
     </div>
  </div>
      <div class="content">
        <h2 class="content__heading">Catalogue</h2>
       <div class="loader"></div>
        <div id="restos" class="restos">
        </div>
      </div>
      </div>
    `;
    return html;
  },

  async afterRender() {
    const restos = await RestoSource.restoList();
    const restosContainer = document.querySelector('#restos');
    const loader = document.querySelector('.loader');
    if (restos.length !== 0) {
      loader.remove();
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
    }
  },
};

export default RestoList;
