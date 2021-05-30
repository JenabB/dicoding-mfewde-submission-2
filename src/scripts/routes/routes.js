import RestoList from '../views/pages/resto-list';
import SearchResto from '../views/pages/search-resto';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': RestoList, // default page
  '/resto-list': RestoList,
  '/search-resto': SearchResto,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
