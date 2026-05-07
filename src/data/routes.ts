export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Evgenij Zabolotskih',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
