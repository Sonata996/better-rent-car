import { DataList, Input, Option } from './BandList.styled';
import data from 'vault/brands.json';

export const BrandList = () => {
  return (
    <div>
      <span>Car brand</span>
      <Input
        name="make"
        className="brand"
        list="brand"
        placeholder="Enter the text"
      />
      <DataList id="brand">
        {data.map(elem => (
          <Option key={data.indexOf(elem)} value={elem} />
        ))}
      </DataList>
    </div>
  );
};
