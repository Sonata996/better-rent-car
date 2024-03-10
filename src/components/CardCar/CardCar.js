import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  ConteinerImg,
  ConteinerModel,
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
  const favoritList = useSelector(state => state.favorites);
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
    const [choiceElem] = cardList.filter(elem => elem.id === Number(event));
    const checkIsFavorit = favoritList.filter(elem => elem !== choiceElem);
    if (choiceElem.length) {
      disPatch(addFavorite(choiceElem));
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
        <ConteinerModel>
          <Title>
            {infoCard.make} <Span>{infoCard.model}</Span>, {infoCard.year}
          </Title>
        </ConteinerModel>
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
