import { ActionCardData } from '@ts/Components/ActionCardData';

export const sampleActions: ActionCardData[] = [
  {
    id: '1',
    imgUrl: 'https://www.katolik.pl/min_mid_big/mid/35479.jpg',
    name: 'Ajuda a moradores de rua no Recife Antigo',
    distanceInKm: 2,
    volunteersNeeded: 15,
    volunteersAssigned: 5,
    categories: [
      { id: 1, name: 'Causas sociais' },
      { id: 2, name: 'Vestimenta' },
      { id: 3, name: 'Higiene' },
      { id: 4, name: 'Alimentação' },
    ],
  },
  {
    id: '2',
    imgUrl:
      'https://somos.lojaiplace.com.br/wp-content/uploads/2019/07/iStock-966783104.jpg',
    name: 'Recreação infantil no parque',
    distanceInKm: 2,
    volunteersNeeded: 15,
    volunteersAssigned: 20,
    categories: [
      { id: 1, name: 'Causas sociais' },
      { id: 2, name: 'Crianças' },
      { id: 3, name: 'Recreação' },
    ],
  },
  {
    id: '3',
    imgUrl:
      'https://judonyc.com/wp-content/uploads/2014/09/Uchikomi-Kbi-Judo-jake.jpg',
    name: 'Aula de judô aberta ao público',
    distanceInKm: 2,
    volunteersNeeded: 35,
    volunteersAssigned: 2,
    categories: [
      { id: 1, name: 'Esportes' },
      { id: 2, name: 'Educação' },
      { id: 3, name: 'Recreação' },
    ],
  },
];
