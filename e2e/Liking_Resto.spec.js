const assert = require('assert');

Feature('Liking Resto');

Before((I) => {
  I.amOnPage('/#/favorite');
});

const initialCondition = 'No Favorite Restaurant Yet, Catalogue';

Scenario('showing empty liked Resto', (I) => {
  I.seeElement('#empty-favorite');
  I.see(initialCondition, '#empty-favorite');
});

Scenario('liking one restaurant', async (I) => {
  I.see(initialCondition, '#empty-favorite');

  I.amOnPage('/#/resto-list');

  I.seeElement('.resto-item');

  const firstCard = locate('.resto-item__content a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedCardTitle = await I.grabTextFrom('.resto-item__content a');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async (I) => {
  I.see(initialCondition, '#empty-favorite');

  I.amOnPage('/');

  // melihat card restaurant pertama dan mengkliknya ke detail
  I.seeElement('.resto-item');
  const firstCard = locate('.resto-item__content a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  // melike restaurant di detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav dan membandingakan dg restaurant yg diklik
  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedCardTitle = await I.grabTextFrom('.resto-item__content a');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  // mengklik card restaurant yg ada di fav
  I.click(likedCardTitle);

  // mengunlike restaurant yang ada di fav
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav
  I.amOnPage('/#/favorite');
  I.seeElement('#empty-favorite');
  const noFavRestaurant = await I.grabTextFrom('#empty-favorite');

  // mencek halaman fav dan berhasil menghapus (unlike)
  assert.strictEqual(noFavRestaurant, initialCondition);
});
