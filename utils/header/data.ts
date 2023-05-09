import { mainNews1, mainNews2, mainNews3 } from '../importPhoto';

export const phoneNumber = [
  { text: '+7 (495) 888-32-11', link: '+74958883211' },
  { text: '+7 (495) 032-25-18', link: '+74950322518' },
];

/**
 * данные для меню сайта
 */
export const menuItem = [
  {
    name: 'Подогрев полей',
    link: '/fieldsheating',
  },
  {
    name: 'Проектирование',
    link: '/designing',
  },
  {
    name: 'О компании',
    link: '/about',
  },
  {
    name: 'Статьи',
    link: '/articles',
  },
  {
    name: 'Контакты',
    link: '/contacts',
  },
];

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

/**
 * Замеряем ширину скрола
 */
export function getScrollWidth() {
  var inner = document.createElement('p');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.width = '200px';
  outer.style.height = '150px';
  outer.style.overflow = 'hidden';
  outer.appendChild(inner);
  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;

  if (w1 == w2) {
    w2 = outer.clientWidth;
  }

  document.body.removeChild(outer);

  return w1 - w2;
}
