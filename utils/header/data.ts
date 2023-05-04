import { mainNews1, mainNews2, mainNews3 } from '../importPhoto';
//import { useActiveFootbalPage } from '~/composables/header/useActiveFootbalPage';
//import { useActiveMainPage } from '~/composables/header/useActiveMainPage';

export const phoneNumber = [
  { text: '+7 (495) 888-32-11', link: '+74958883211' },
  { text: '+7 (495) 032-25-18', link: '+74950322518' },
];

// const footbal = useActiveFootbalPage();
// const main = useActiveMainPage();

// const route = useRoute();

export const menuItem = ref([
  {
    name: 'Подогрев полей',
    link: '/fieldsheating',
    acvive: false,
  },
  {
    name: 'Проектирование',
    link: '/designing',
    acvive: false,
  },
  {
    name: 'О компании',
    link: '/',
    active: false,
  },
  {
    name: 'Статьи',
    link: '/',
    active: false,
  },
  {
    name: 'Контакты',
    link: '/',
    active: false,
  },
]);

export const headerDataText = [
  {
    title:
      'ФЕСПО — российская продукция, разработанная для систем подогрева плоскостных сооружений',
    text: 'Cпроектирована для российских условий со сроком эксплуатации от 40 до 55 лет без непредвиденных затрат',
  },
  {
    title: 'Подогрев футбольных полей',
    text: 'ФЕСПО — российская продукция, разработанная для систем подогрева плоскостных сооружений',
  },
  {
    title: 'Наша продукция более 15 лет на многих стадионах России',
    text: 'Система подогрева успешно функционирует начиная от небольших тренировочных полей и заканчивая центральными стадионами',
  },
];

export const email = 'fespo@gmail.com';

export const adress =
  'г. Москва, ул 3-я Тверская-Ямская,пер. Александра Невского д. 32';

export const newsData = [
  {
    imageLink: mainNews1,
    descriptionNews:
      'Первая в России система для стандартного футбольного поля размерами 110 х72 метра',
    date: '4 февраля 2023',
    alt: 'мальчик с мячом',
  },
  {
    imageLink: mainNews2,
    descriptionNews:
      'Первая в России система для стандартного футбольного поля размерами 110 х72 метра',
    date: '4 февраля 2023',
    alt: 'мальчик с мячом',
  },
  {
    imageLink: mainNews3,
    descriptionNews:
      'Первая в России система для стандартного футбольного поля размерами 110 х72 метра',
    date: '4 февраля 2023',
    alt: 'мальчик с мячом',
  },
];
