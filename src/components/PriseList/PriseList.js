import { DataList, Input, Option } from './PriseList.styled';

export const PriseList = () => {
  return (
    <div>
      <label>
        <span>Price/ 1 hour</span>
        <Input list="price" placeholder="To $" />
        <DataList id="price">
          <Option value="Текст1" />
          <Option value="Текст2" />
        </DataList>
      </label>
    </div>
  );
};
