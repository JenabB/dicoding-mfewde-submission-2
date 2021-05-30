import RestoList from '../views/pages/resto-list';
import SearchResto from '../views/pages/search-resto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': RestoList, // default page
  '/resto-list': RestoList,
  '/search-resto': SearchResto,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
