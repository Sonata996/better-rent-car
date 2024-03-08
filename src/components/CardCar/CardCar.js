import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  ConteinerImg,
  ConteinerModal,
  Conteinerinfo,
  Img,
  LIstTags,
  Paragraf,
  Span,
  Title,
  UlElem,
  Checkbox,
  Heart,
} from './CardCar.styled';
import { addFavorite } from 'reduxReact/favoritSlise';

export const CardCar = ({ infoCard }) => {
  const cardList = useSelector(state => state.cars.items);
  const disPatch = useDispatch();

  const tegsArr = [
    infoCard.address.split(' ')[3],
    infoCard.address.split(' ')[4],
    infoCard.rentalCompany,
    infoCard.type[0],
    infoCard.model,
    infoCard.id,
    infoCard.functionalities[0],
  ];

  const handlerChenge = event => {
    const result = cardList.filter(elem => elem.id === event);
    console.log(result);
    console.log(event);
    if (result) {
      disPatch(addFavorite(result));
    }
  };

  return (
    <Card>
      <ConteinerImg>
        <Img src={infoCard.img} />
        <Checkbox
          type="checkbox"
          id={infoCard.id}
          onChange={event => {
            handlerChenge(event.target.id);
          }}
        />
        <label htmlFor={infoCard.id}>
          <Heart />
        </label>
      </ConteinerImg>

      <Conteinerinfo>
        <ConteinerModal>
          <Title>
            {infoCard.make} <Span>{infoCard.model}</Span>, {infoCard.year}
          </Title>
        </ConteinerModal>
        <Paragraf>${infoCard.rentalPrice}</Paragraf>
      </Conteinerinfo>

      <LIstTags>
        {tegsArr.map(elem => (
          <UlElem key={tegsArr.indexOf(elem)}>{elem}</UlElem>
        ))}
      </LIstTags>
      <button>Learn more</button>
    </Card>
  );
};
