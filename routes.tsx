import type { JSX } from 'react';
import cardinfo from './pages/cardinfo';

interface Route {
  element: JSX.element;
  path: string;
  menuLabel?: string;
}

const routes: Route[] = [
  { element: <cardinfo />, path: '/cardinfo', menuLabel: 'More information about this card' }
];

export default routes;