import { CardCar } from 'components/CardCar/CardCar';
import { useSelector } from 'react-redux';
import { List } from './ListCardsCar.styled';

export const ListCardsCar = () => {
  const stateCar = useSelector(state => state.cars.items);

  return (
    <List>
      {stateCar.map(elem => (
        <CardCar key={elem.id} infoCard={elem} />
      ))}
    </List>
  );
};
