import {
  Card,
  ConteinerImg,
  ConteinerModal,
  Conteinerinfo,
  Heart,
  Img,
  LIstTags,
  Paragraf,
  Span,
  Title,
  UlElem,
} from './CardCar.styled';

export const CardCar = ({ infoCard }) => {
  const tegsArr = [
    infoCard.address.split(' ')[3],
    infoCard.address.split(' ')[4],
    infoCard.rentalCompany,
    infoCard.type[0],
    infoCard.model,
    infoCard.id,
    infoCard.functionalities[0],
  ];

  return (
    <Card>
      <ConteinerImg>
        <Img src={infoCard.img} />
        <Heart />
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
