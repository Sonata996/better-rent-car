import { useSelector } from 'react-redux';

export default function FavoritesPage() {
  const favoritId = useSelector(state => state.favorites);
  const carsList = useSelector(state => state.cars.items);

  console.log(favoritId);
  // const favoritList = carsList.filter(
  //   elem => elem.id !== favoritId)
  // );
  return (
    <div>
      <ul></ul>
    </div>
  );
}
