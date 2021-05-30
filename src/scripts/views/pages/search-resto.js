import RestoSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const SearchResto = {
  async render() {
    return `
    <div>
    <div class="hero">
    <h1>Ini Search</h1>
    </div>
    <input type="text" placeholder="search restaurant" id="search-input" />
      <div class="content">
        <h2 class="content__heading">Resto List</h2>
        <div id="restos" class="restos">
        </div>
      </div>
      </div>
    `;
  },

  async afterRender() {
    // eslint-disable-next-line no-var
    var input = document.getElementById('search-input').value;
    console.log('ini input', input);
    const restos = await RestoSource.searchResto();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default SearchResto;
