import {Category, IReview} from '@/models/default';

import HairdresserIcon from '@/assets/images/icons/categories/hair.svg';
import ManicureIcon from '@/assets/images/icons/categories/manicure.svg';
import SpaIcon from '@/assets/images/icons/categories/spa.svg';
import MassageIcon from '@/assets/images/icons/categories/massage.svg';

export const categories = [
  {
    id: Category.Hairdressers,
    label: 'Hairdresser',
    icon: HairdresserIcon,
  },
  {
    id: Category.Manicure,
    label: 'Manicure',
    icon: ManicureIcon,
  },
  {
    id: Category.Spa,
    label: 'Spa salons',
    icon: SpaIcon,
  },
  {
    id: Category.Massage,
    label: 'Massage',
    icon: MassageIcon,
  },
];

export const Reviews: Record<number, IReview[]> = {
  1: [
    {
      id: 1,
      placeId: 1,
      user: {
        imageUrl: 'https://picsum.photos/id/10/200/200',
        name: 'John Doe',
      },
      rating: 4.8,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      date: '2023-01-01',
    },
    {
      id: 2,
      placeId: 1,
      user: {
        imageUrl: 'https://picsum.photos/id/10/200/200',
        name: 'John Doe',
      },
      rating: 4.8,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      date: '2023-01-01',
    },
    {
      id: 3,
      placeId: 1,
      user: {
        imageUrl: 'https://picsum.photos/id/10/200/200',
        name: 'John Doe',
      },
      rating: 4.8,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      date: '2023-01-01',
    },
  ],
};

export const spaServices = [
  {label: 'Massage Therapy', value: 1},
  {label: 'Facial Treatments', value: 2},
  {label: 'Manicure & Pedicure', value: 3},
  {label: 'Body Scrubs & Wraps', value: 4},
  {label: 'Hydrotherapy', value: 5},
  {label: 'Hot Stone Massage', value: 6},
  {label: 'Aromatherapy', value: 7},
  {label: 'Couples Massage', value: 8},
  {label: 'Hair Removal', value: 9},
  {label: 'Skin Care Consultation', value: 10},
  {label: 'Wellness Packages', value: 11},
  {label: 'Prenatal Massage', value: 12},
  {label: 'Sauna & Steam Room', value: 13},
  {label: 'Reflexology', value: 14},
  {label: 'Acupuncture', value: 15},
];
