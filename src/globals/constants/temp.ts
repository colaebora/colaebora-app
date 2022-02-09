import { Action } from '@ts/entities/Action';
import { User } from '@ts/entities/User';
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
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan nunc ut sagittis pellentesque. Sed faucibus id metus sed posuere. In est dolor, accumsan sit amet sapien vel, pellentesque lobortis ligula. Nullam consequat mauris eu mauris suscipit suscipit. Phasellus in arcu vitae leo finibus venenatis. ',
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
      city: 'Recife',
      state: 'PE',
    },
    organization: {
      name: 'Saber Viver',
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
      city: 'Recife',
      state: 'PE',
    },
    organization: {
      name: 'Saber Viver',
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
      city: 'Recife',
      state: 'PE',
    },
    organization: {
      name: 'Saber Viver',
    },
  },
];

export const sampleUsers: Partial<User & { actionName: string }>[] = [
  {
    name: 'Marlon Santos',
    photo:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    actionName: 'Aalkfjaskdfas',
  },
  {
    name: 'Catarina Maida',
    photo:
      'https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    actionName: 'Aalkfjaskdfas',
  },
  {
    name: 'Juliana Melo',
    photo:
      'https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    actionName: 'Aalkfjaskdfas',
  },
  {
    name: 'Fabrício Tavares',
    photo:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    actionName: 'Aalkfjaskdfas',
  },
];
