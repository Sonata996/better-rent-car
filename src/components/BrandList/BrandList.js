import { DataList, Input, Option } from './BandList.styled';

export const BrandList = () => {
  return (
    <div>
      <label>
        <span>Car brand</span>
        <Input list="brand" placeholder="Enter the text" />
        <DataList id="brand">
          <Option value="Текст1" />
          <Option value="Текст2" />
        </DataList>
      </label>
    </div>
  );
};
