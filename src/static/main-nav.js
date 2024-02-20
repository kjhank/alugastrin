export const mainNav = [
  {
    subItems: [
      {
        text: 'Leki dostępne bez recepty',
        to: '/produkty-leki-dostepne-bez-recepty',
      },
      {
        text: 'Suplementy diety',
        to: '/produkty-suplementy-diety',
      },
      {
        text: 'Wyroby medyczne',
        to: '/produkty-wyroby-medyczne',
      },
    ],
    text: 'Produkty',
    type: 'parent',
  },
  {
    text: 'Baza wiedzy',
    to: '/baza-wiedzy/',
    type: 'link',
  },
  {
    text: 'Dla profesjonalistów',
    to: '/dla-profesjonalistow/',
    type: 'link',
  },
  {
    target: 'contact',
    text: 'Kontakt',
    type: 'scroll',
  },
];
