import {
  Outlet,
} from 'react-router';
import {
  NavLink,
} from 'react-router-dom';

export default function Layout() {
  return <>
    <header>
      <ul>
        <NavLink className="Orchid Pink" to="/rgb/242/194/203">
        Orchid Pink
        </NavLink>
        <NavLink className="Shimmering Blush" to="/rgb/217/132/155">
        Shimmering Blush
        </NavLink>
        <NavLink className="Opera Mauve" to="/rgb/191/122/160">
        Opera Mauve
        </NavLink>
      </ul>
    </header>
    <Outlet />
  </>;
}