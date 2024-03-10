import { useSelector } from 'react-redux';
import { CardCar } from 'components/CardCar/CardCar';

export default function FavoritesPage() {
  const favoritList = useSelector(state => state.favorites);

  return (
    <div>
      <ul>
        {favoritList.length
          ? favoritList.map(elem => <CardCar key={elem.id} infoCard={elem} />)
          : `You don't have any favorites yet`}
      </ul>
    </div>
  );
}
