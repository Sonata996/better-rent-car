import { BrandList } from 'components/BrandList/BrandList';
import { ListCardsCar } from 'components/ListCardsCar/ListCardsCar';
import { MileageForm } from 'components/MileageForm/MileageForm';
import { PriseList } from 'components/PriseList/PriseList';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addfilter } from 'reduxReact/filtersSlice';
import { serviceGetAllCar } from 'serviceAPI/serviceAPI';
import { ConteinetCatalog, FormFilters, ConteinerForm } from './Catalog.styled';

export default function CatalogPage() {
  const dispatch = useDispatch();
  dispatch(serviceGetAllCar());

  return (
    <ConteinetCatalog>
      <ConteinerForm>
        <Formik
          initialValues={{
            make: '',
            rentalPrice: '',
            mileageFrom: '',
            mileageTo: '',
          }}
          onSubmit={values => {
            dispatch(addfilter(values));
          }}
        >
          <FormFilters>
            <BrandList />
            <PriseList />
            <MileageForm />
            <button type="submit">Search</button>
          </FormFilters>
        </Formik>
      </ConteinerForm>

      <div>
        <ListCardsCar />
      </div>
    </ConteinetCatalog>
  );
}
