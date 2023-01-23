import { useParams } from 'react-router-dom';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const { r, g, b } = useParams();
  const currentColor = `rgb(${r},${g},${b})`;

  return (
    <div className='navbar' style={{ '--currentColor': currentColor }}>
      <NavLink to="/rgb/242/194/203" className="navlink">
        Orchid Pink
      </NavLink>

      <NavLink to="/rgb/217/132/155" className="navlink">
        Shimmering Blush
      </NavLink>

      <NavLink to="/rgb/191/122/160" className="navlink">
        Opera Mauve
      </NavLink>
    </div>
  );
}