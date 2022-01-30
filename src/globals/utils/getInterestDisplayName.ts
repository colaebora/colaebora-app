import { Interest } from '@ts/enums/Interest';

export function getInterestDisplayName(interest: Interest): string {
  const INTEREST_DISPLAY_NAMES: Record<Interest, string> = {
    animals: 'Animais',
    children: 'Crianças',
    ecology: 'Ecologia',
    education: 'Educação',
    elderly: 'Idosos',
    homeless: 'Moradores de Rua',
    sports: 'Esportes',
  };

  return INTEREST_DISPLAY_NAMES[interest];
}
