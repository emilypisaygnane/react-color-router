import {
  Outlet,
} from 'react-router';
import {
  NavLink,
} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

export default function Layout() {
  return <>
    <header>
      <NavBar />

    </header>
    <Outlet />
  </>;
}