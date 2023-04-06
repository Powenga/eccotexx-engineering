export const products = [
  {
    id: 1,
    title: [
      'Композитная арматура ',
      {
        type: 'span',
        props: { className: 'accept' },
        childrens: [
          'Eccotexx ',
          { type: 'script', props: null, childrens: ['alert("!")'] },
          '',
        ],
      },
    ],
    advantages: [
      'Hевосприимчивость к коррозии',
      'Высокая механическая прочность',
      'Простота проведения работ',
      'Hизкий удельный вес',
    ],
  },
  {
    id: 2,
    title: [
      'Композитная макрофибра ',
      {
        type: 'span',
        props: { className: 'accept' },
        childs: ['FibraMax'],
      },
    ],
    advantages: [
      'Равномерное распределение в бетоне',
      'Легкость обработки готовых конструкций',
      'Hизкий удельный вес',
      'Отсутствие износа рукавов бетононасоса',
    ],
  },
  {
    id: 3,
    title: [],
  },
];
