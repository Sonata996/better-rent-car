import { ConteinerImg, Heart, Img } from './CardCar.styled';

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
    <li>
      <ConteinerImg>
        <Img src={infoCard.img} />
        <Heart />
      </ConteinerImg>
      <div>
        <div>
          <h3>{infoCard.make}</h3>
          <span>{infoCard.model}</span>
          <span>{infoCard.year}</span>
        </div>

        <p>{infoCard.rentalPrice}</p>
      </div>
      <ul>
        {tegsArr.map(elem => (
          <li key={tegsArr.indexOf(elem)}>{elem}</li>
        ))}
      </ul>
      <button>Learn more</button>
    </li>
  );
};
