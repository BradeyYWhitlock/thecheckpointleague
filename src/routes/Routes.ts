import { FC } from 'react';
import Home from '../components/home/Home';
import Schedule from '../components/schedule/Schedule';
import Standings from '../components/standings/Standings';
import Archive from '../components/archive/Archive';
import Levels from '../components/levels/Levels';

export interface AppRoute {
  component: FC;
  path: string;
  exact?: boolean;
}
export default [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: Schedule,
    path: '/schedule',
    exact: true
  },
  {
    component: Standings,
    path: '/standings',
    exact: true
  },
  {
    component: Archive,
    path: '/archive',
    exact: true
  },
  {
    component: Levels,
    path: '/levels',
    exact: true
  }
] as AppRoute[];
