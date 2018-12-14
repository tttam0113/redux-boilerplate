import DashboardView from 'views/DashboardView';
// import requireAuth from '../hoc/requireAuth';

const indexRoutes = [
  {
    name: 'DashboardView',
    path: '/',
    component: DashboardView,
    exact: true,
  },
];

export default indexRoutes;
