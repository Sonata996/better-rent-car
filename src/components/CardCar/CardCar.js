import { Heart, Img } from './CardCar.styled';

export const CardCar = ({ infoCard }) => {
  console.log(infoCard);
  return (
    <li>
      <div>
        <Img src={infoCard.img} />
        <Heart />
      </div>
      <div>
        <h3>{infoCard.make}</h3>
        <p>{infoCard.rentalPrice}</p>
      </div>
      <ul>
        <li></li>
      </ul>
      <button>Learn more</button>
    </li>
  );
};
