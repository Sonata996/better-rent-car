import { List, Link } from './NavigateHeader.styled.js';

export const NavigateHeader = () => {
  return (
    <div>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </List>
    </div>
  );
};
