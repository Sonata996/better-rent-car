import { BrandList } from 'components/BrandList/BrandList';
import { ListCardsCar } from 'components/ListCardsCar/ListCardsCar';
import { MileageForm } from 'components/MileageForm/MileageForm';
import { PriseList } from 'components/PriseList/PriseList';
import { useDispatch } from 'react-redux';
import { serviceGetAllCar } from 'serviceAPI/serviceAPI';

export default function CatalogPage() {
  const dispatch = useDispatch();
  dispatch(serviceGetAllCar());

  return (
    <div>
      <div>
        <BrandList />
        <PriseList />
        <MileageForm />
        <div>
          <button>Search</button>
        </div>
      </div>

      <div>
        <ListCardsCar />
      </div>
    </div>
  );
}
