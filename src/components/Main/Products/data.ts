import rebarImg from './rebar.jpg';
import fibraImg from './fibra.jpg';

export const products = [
  {
    id: 1,
    title: [
      'Композитная арматура ',
      {
        type: 'span',
        props: { className: 'accept' },
        childrens: ['Eccotexx '],
      },
    ],
    content: [
      'Предназначена для ',
      {
        type: 'span',
        props: { className: 'product-accent' },
        childrens: ['линейного '],
      },
      'армирования бетонных конструкций',
    ],
    advantages: [
      'Hевосприимчивость к коррозии',
      'Высокая механическая прочность',
      'Простота проведения работ',
      'Hизкий удельный вес',
    ],
    img: {
      src: rebarImg,
      alt: 'Композитная арматура',
    },
  },
  {
    id: 2,
    title: [
      'Композитная макрофибра ',
      {
        type: 'span',
        props: { className: 'accept' },
        childrens: ['FibraMax'],
      },
    ],
    content: [
      'Предназначена для ',
      {
        type: 'span',
        props: { className: 'product-accent' },
        childrens: ['дисперсного'],
      },
      ' армирования бетонных конструкций',
    ],
    advantages: [
      'Равномерное распределение в бетоне',
      'Легкость обработки готовых конструкций',
      'Hизкий удельный вес',
      'Отсутствие износа рукавов бетононасоса',
    ],
    img: {
      src: fibraImg,
      alt: 'Композитная макрофибра',
    },
  },
];
