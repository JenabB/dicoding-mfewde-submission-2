import RestoList from '../views/pages/resto-list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': RestoList, // default page
  '/resto-list': RestoList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
