import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<div>
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" />
     <div class="resto__info">
          <h3>Information</h3>
          <h4>Categories</h4>
          <p>${resto.categories[0].name}</p>
          <p>${resto.categories[1].name}</p>
          <h4>Rating</h4>
          <p>${resto.rating}</p>
          <h4>City</h4>
          <p>${resto.city}</p>
          <h4>Address</h4>
          <p>${resto.address}</p>
      <div>

    <h4>Menus</h4>
        <div class="table-menus">
            <table>
            <tr>
            <th>Foods</th>
            </tr>
            ${resto.menus.foods.map((menu) => `
            <tr>
            <td>${menu.name}</td>
            </tr>
            `).join('')}
            </table>

            <table>
            <tr>
            <th>Drinks</th>
            </tr>
            ${resto.menus.drinks.map((menu) => `
            <tr>
            <td>${menu.name}</td>
            </tr>
            `).join('')}
            </table>
        </div>
    </div>

    
  </div>

  <div class="resto__overview">
    <h3>Description</h3>
    <p>${resto.description}</p>
  </div>

  <h1 class="review-title">Reviews</h1>
  <div class="resto-reviews">
  ${resto.customerReviews.map((review, index) => `
  <div class="card" key=${index}>
  <h1>${review.name}</h1>
  <h2>${review.date}</h2>
  <p>${review.review}</p>
  </div>
  `).join('')}
  </div>
</div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${resto.name}"
            src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}">
    </div>
    <div class="resto-item__content">
        <h1><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h1>
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
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

const createPageLoaderTemplate = {
  show() {
    return `
      <div class="page-loader">
      <h1>Loading...</h1></div>
    `;
  },
  remove() {
    document.querySelector('.page-loader').remove();
  },
};

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createPageLoaderTemplate,
};
