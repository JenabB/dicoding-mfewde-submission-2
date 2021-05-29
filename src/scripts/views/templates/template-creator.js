import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" />
  <div class="resto__info">
  <h3>Information</h3>
    <h4>Categories</h4>
    <p>${resto.categories[0].name}</p>
    <p>${resto.categories[1].name}</p>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>Duration</h4>
    <p>${resto.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${resto.rating}</p>
  </div>

  <div class="menus">
  <h1>Menus</h1>
  
  </div>

  <div class="resto__overview">
    <h3>Description</h3>
    <p>${resto.description}</p>
  </div>
  <div class="">
  </div>
</div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${resto.name}"
            src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h1><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h1>
        <h2>${resto.city}</h2>
        <p>${resto.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
