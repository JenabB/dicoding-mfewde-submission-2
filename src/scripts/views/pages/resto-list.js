import RestoSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const RestoList = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Resto List</h2>
        <div id="restos" class="restos">
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
