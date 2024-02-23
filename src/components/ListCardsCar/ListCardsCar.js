import { CardCar } from 'components/CardCar/CardCar';
import { useSelector } from 'react-redux';

export const ListCardsCar = () => {
  const stateCar = useSelector(state => state.cars.items);

  return (
    <ul>
      {stateCar.map(elem => (
        <CardCar key={elem.id} infoCard={elem} />
      ))}
    </ul>
  );
};
