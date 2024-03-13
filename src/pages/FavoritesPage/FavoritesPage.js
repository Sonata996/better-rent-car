import { useSelector } from 'react-redux';
import { CardCar } from 'components/CardCar/CardCar';
import { ListFavorite, ConteinerListFavorite } from './Favorites.styled';

export default function FavoritesPage() {
  const favoritList = useSelector(state => state.favorites.items);
  console.log(favoritList);

  return (
    <ConteinerListFavorite>
      <ListFavorite>
        {favoritList.length
          ? favoritList.map(elem => <CardCar key={elem.id} infoCard={elem} />)
          : `You don't have any favorites yet`}
      </ListFavorite>
    </ConteinerListFavorite>
  );
}
