import { Action } from '@ts/entities/Action';
import { User } from '@ts/entities/User';
import { ActionFrequency } from '@ts/enums/ActionFrequency';
import { Interest } from '@ts/enums/Interest';

export const sampleActions: Action[] = [
  {
    id: '1',
    imgUrl:
      'data:image/jpeg;base64,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',
    name: 'Higiene pessoal e alimentos para moradores de rua',
    categories: [Interest.homeless, Interest.elderly],
    volunteersAssignedCount: 12,
    volunteersNeededCount: 20,
    distanceInMeters: 2000,
    about:
      'Cortes de cabelo e barba, materiais de higiene pessoal: absorventes, sabonete, desodorante, água e alimentos! Vem com a gente fazer a diferença na vida de quem precisa.',
    date: {
      date: '2022-02-14T15:00:00.000Z',
      frequency: ActionFrequency.once,
    },
    location: {
      latLng: {
        latitude: -8.06109,
        longitude: -34.87192,
      },
      number: 'S/N',
      street: 'R. Barão Rodrigues Mendes',
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
    volunteersNeededCount: 20,
    distanceInMeters: 2000,
    about:
      'Nós, da Saber Viver, vamos dar à crianças de baixa renda da comunidade Irmã Dorothy, no bairo de Boa Viagem, uma tarde cheia de brincadeiras: pintura, artesanato, pula pula e outras brincadeiras. Vem com a gente!',
    date: {
      date: '2022-02-14T15:00:00.000Z',
      frequency: ActionFrequency.once,
    },
    location: {
      latLng: {
        latitude: -8.10574,
        longitude: -34.90619,
      },
      number: '334',
      street: 'R. Manoel Didier',
      city: 'Recife',
      state: 'PE',
    },
    organization: {
      name: 'Saber Viver',
    },
  },
  {
    id: '4',
    imgUrl:
      'https://nova-acropole.org.br/wp-content/uploads/2019/03/Limpeza-de-Pra%C3%A7a-4.jpg',
    name: 'Mutirão de limpeza na Praça do Derby',
    categories: [Interest.ecology],
    volunteersAssignedCount: 12,
    volunteersNeededCount: 20,
    distanceInMeters: 2000,
    about:
      'Vamos limpar tudo! Levaremos sacos de lixo, vassouras, luvas, pás e panos para 25 pessoas. Ponto de concentração: Subway, à partir das 8hs.',
    date: {
      date: '2022-02-14T15:00:00.000Z',
      frequency: ActionFrequency.thirtyDays,
    },
    location: {
      latLng: {
        latitude: -8.05703,
        longitude: -34.89898,
      },
      number: 'S/N',
      street: 'R. Barão Rodrigues Mendes',
      city: 'Recife',
      state: 'PE',
    },
    organization: {
      name: 'Saber Viver',
    },
  },
  {
    id: '3',
    imgUrl:
      'https://judonyc.com/wp-content/uploads/2014/09/Uchikomi-Kbi-Judo-jake.jpg',
    name: 'Aula de judô aberta ao público',
    categories: [Interest.sports, Interest.education, Interest.children],
    volunteersAssignedCount: 17,
    volunteersNeededCount: 20,
    distanceInMeters: 20000,
    phone: '(81) 9 9792 3312',
    about:
      'Aula de judô para quem nunca fez isso antes! Com o Sensei Kaio para até 20 pessoas no parque da Jaqueira.',
    date: {
      date: '2022-02-14T15:00:00.000Z',
      frequency: ActionFrequency.once,
    },
    location: {
      latLng: {
        latitude: -8.03681,
        longitude: -34.90495,
      },
      number: 'S/N',
      street: 'Parque da Jaqueira',
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
    actionName: 'Higiene pessoal e alimentos para moradores de rua',
  },
  {
    name: 'Catarina Maida',
    photo:
      'https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    actionName: 'Mutirão de limpeza na Praça do Derby',
  },
  {
    name: 'Juliana Melo',
    photo:
      'https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    actionName: 'Mutirão de limpeza na Praça do Derby',
  },
  {
    name: 'Fabrício Tavares',
    photo:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    actionName: 'Higiene pessoal e alimentos para moradores de rua',
  },
];
