import { DataList, Input, Option } from './PriseList.styled';
import data from 'vault/prices.json';

export const PriseList = () => {
  return (
    <div>
      <span>Price/ 1 hour</span>
      <Input
        name="rentalPrice"
        className="price"
        list="price"
        placeholder="To $"
      />
      <DataList id="price">
        {data.map(elem => (
          <Option key={data.indexOf(elem)} value={elem} />
        ))}
      </DataList>
    </div>
  );
};
