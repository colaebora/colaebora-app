import { Action } from '@ts/entities/Action';
import { ActionFrequency } from '@ts/enums/ActionFrequency';
import { Interest } from '@ts/enums/Interest';

export const sampleActions: Action[] = [
  {
    id: '3',
    imgUrl:
      'https://judonyc.com/wp-content/uploads/2014/09/Uchikomi-Kbi-Judo-jake.jpg',
    name: 'Aula de judô aberta ao público',
    categories: [Interest.sports, Interest.education, Interest.children],
    volunteersAssignedCount: 15,
    volunteersNeededCount: 5,
    distanceInMeters: 2000,
    about: 'Descrição descrição descrição',
    date: {
      date: '2022-02-14T15:00:00.000Z',
      frequency: ActionFrequency.once,
    },
    location: {
      latLng: {
        latitude: -8.05,
        longitude: -34.88001,
      },
      number: '2142',
      street: 'Rua do Apolo',
    },
  },
  {
    id: '2',
    imgUrl:
      'https://somos.lojaiplace.com.br/wp-content/uploads/2019/07/iStock-966783104.jpg',
    name: 'Recreação voluntária para crianças',
    categories: [Interest.education, Interest.children],
    volunteersAssignedCount: 15,
    volunteersNeededCount: 5,
    distanceInMeters: 2000,
    about: 'Descrição descrição descrição',
    date: {
      date: '2022-02-14T15:00:00.000Z',
      frequency: ActionFrequency.once,
    },
    location: {
      latLng: {
        latitude: -8.04,
        longitude: -34.92952,
      },
      number: '2142',
      street: 'Rua do Apolo',
    },
  },
  {
    id: '1',
    imgUrl: 'https://www.katolik.pl/min_mid_big/mid/35479.jpg',
    name: 'Ajuda a moradores de rua no Recife Antigo',
    categories: [Interest.homeless],
    volunteersAssignedCount: 15,
    volunteersNeededCount: 5,
    distanceInMeters: 2000,
    about: 'Descrição descrição descrição',
    date: {
      date: '2022-02-14T15:00:00.000Z',
      frequency: ActionFrequency.once,
    },
    location: {
      latLng: {
        latitude: -8.1,
        longitude: -34.90882,
      },
      number: '2142',
      street: 'Rua do Apolo',
    },
  },
];
