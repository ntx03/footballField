import image from '../../assets/images/progectPage/stadionImage.png';

export const useStateProgect = () => {
  return useState('progect', () => [
    {
      image: image,
    },
  ]);
};
