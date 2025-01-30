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
        imageUrl: 'https://picsum.photos/id/24/200/200',
        name: 'Emily Johnson',
      },
      rating: 4.7,
      text: 'Beautiful location and top-notch services.',
      date: '2023-02-14',
    },
    {
      id: 3,
      placeId: 1,
      user: {
        imageUrl: 'https://picsum.photos/id/25/200/200',
        name: 'James Brown',
      },
      rating: 5.0,
      text: 'Absolutely loved the outdoor Nordic baths.',
      date: '2023-03-20',
    },
  ],
  2: [
    {
      id: 4,
      placeId: 2,
      user: {
        imageUrl: 'https://picsum.photos/id/26/200/200',
        name: 'Sophia Wilson',
      },
      rating: 4.9,
      text: 'Luxurious experience with excellent cuisine.',
      date: '2023-04-05',
    },
    {
      id: 5,
      placeId: 2,
      user: {
        imageUrl: 'https://picsum.photos/id/27/200/200',
        name: 'Liam Miller',
      },
      rating: 4.8,
      text: 'The Nordic baths were so relaxing!',
      date: '2023-05-12',
    },
    {
      id: 6,
      placeId: 2,
      user: {
        imageUrl: 'https://picsum.photos/id/28/200/200',
        name: 'Olivia Davis',
      },
      rating: 4.7,
      text: 'Highly recommend for a weekend getaway.',
      date: '2023-06-18',
    },
  ],
  3: [
    {
      id: 7,
      placeId: 3,
      user: {
        imageUrl: 'https://picsum.photos/id/29/200/200',
        name: 'Noah Moore',
      },
      rating: 4.6,
      text: 'The rooftop views are stunning!',
      date: '2023-07-25',
    },
    {
      id: 8,
      placeId: 3,
      user: {
        imageUrl: 'https://picsum.photos/id/30/200/200',
        name: 'Ava Taylor',
      },
      rating: 4.5,
      text: 'Great spa with excellent massage services.',
      date: '2023-08-30',
    },
    {
      id: 9,
      placeId: 3,
      user: {
        imageUrl: 'https://picsum.photos/id/31/200/200',
        name: 'William Anderson',
      },
      rating: 4.6,
      text: 'A relaxing escape in the middle of the city.',
      date: '2023-09-14',
    },
  ],
  4: [
    {
      id: 10,
      placeId: 4,
      user: {
        imageUrl: 'https://picsum.photos/id/32/200/200',
        name: 'Mia Thomas',
      },
      rating: 4.9,
      text: 'A perfect retreat for relaxation and peace.',
      date: '2023-10-01',
    },
    {
      id: 11,
      placeId: 4,
      user: {
        imageUrl: 'https://picsum.photos/id/33/200/200',
        name: 'Benjamin Jackson',
      },
      rating: 5.0,
      text: 'Wonderful atmosphere and excellent services.',
      date: '2023-11-10',
    },
    {
      id: 12,
      placeId: 4,
      user: {
        imageUrl: 'https://picsum.photos/id/34/200/200',
        name: 'Charlotte Martin',
      },
      rating: 4.8,
      text: 'Loved the holistic health services here.',
      date: '2023-12-05',
    },
  ],
  5: [
    {
      id: 13,
      placeId: 5,
      user: {
        imageUrl: 'https://picsum.photos/id/35/200/200',
        name: 'Amelia White',
      },
      rating: 4.6,
      text: 'A serene riverside location with great massages.',
      date: '2023-11-12',
    },
    {
      id: 14,
      placeId: 5,
      user: {
        imageUrl: 'https://picsum.photos/id/36/200/200',
        name: 'Elijah Harris',
      },
      rating: 4.7,
      text: 'The outdoor baths were very relaxing.',
      date: '2023-12-18',
    },
    {
      id: 15,
      placeId: 5,
      user: {
        imageUrl: 'https://picsum.photos/id/37/200/200',
        name: 'Isabella Clark',
      },
      rating: 4.5,
      text: 'A cozy place to unwind on weekends.',
      date: '2024-01-03',
    },
  ],
  6: [
    {
      id: 16,
      placeId: 6,
      user: {
        imageUrl: 'https://picsum.photos/id/19/200/200',
        name: 'Sophia Davis',
      },
      rating: 4.7,
      text: 'The Scandinavian-inspired setup was simply breathtaking!',
      date: '2023-07-04',
    },
    {
      id: 17,
      placeId: 6,
      user: {
        imageUrl: 'https://picsum.photos/id/38/200/200',
        name: 'Ethan Lewis',
      },
      rating: 4.8,
      text: 'The hot baths were heavenly.',
      date: '2023-08-21',
    },
    {
      id: 18,
      placeId: 6,
      user: {
        imageUrl: 'https://picsum.photos/id/39/200/200',
        name: 'Grace Young',
      },
      rating: 4.6,
      text: 'A truly luxurious experience.',
      date: '2023-09-05',
    },
  ],
  7: [
    {
      id: 19,
      placeId: 7,
      user: {
        imageUrl: 'https://picsum.photos/id/20/200/200',
        name: 'Luke Martin',
      },
      rating: 4.8,
      text: 'Loved the unique floating spa experience on the boat!',
      date: '2023-08-15',
    },
    {
      id: 20,
      placeId: 7,
      user: {
        imageUrl: 'https://picsum.photos/id/40/200/200',
        name: 'Hannah Robinson',
      },
      rating: 4.9,
      text: 'A one-of-a-kind spa with panoramic views.',
      date: '2023-09-30',
    },
    {
      id: 21,
      placeId: 7,
      user: {
        imageUrl: 'https://picsum.photos/id/41/200/200',
        name: 'Alexander Martinez',
      },
      rating: 4.7,
      text: 'The water circuit was very relaxing.',
      date: '2023-10-22',
    },
  ],
  8: [
    {
      id: 22,
      placeId: 8,
      user: {
        imageUrl: 'https://picsum.photos/id/21/200/200',
        name: 'Mia Thompson',
      },
      rating: 4.6,
      text: 'Beautiful spa with wonderful nature walks and great facilities.',
      date: '2023-09-08',
    },
    {
      id: 23,
      placeId: 8,
      user: {
        imageUrl: 'https://picsum.photos/id/42/200/200',
        name: 'Samuel Perez',
      },
      rating: 4.7,
      text: 'Loved the hot and cold baths.',
      date: '2023-10-14',
    },
    {
      id: 24,
      placeId: 8,
      user: {
        imageUrl: 'https://picsum.photos/id/43/200/200',
        name: 'Harper Adams',
      },
      rating: 4.8,
      text: 'The facilities were immaculate.',
      date: '2023-11-02',
    },
  ],
  9: [
    {
      id: 25,
      placeId: 9,
      user: {
        imageUrl: 'https://picsum.photos/id/22/200/200',
        name: 'Oliver Clark',
      },
      rating: 4.7,
      text: 'A peaceful retreat in the heart of the city.',
      date: '2023-10-02',
    },
    {
      id: 26,
      placeId: 9,
      user: {
        imageUrl: 'https://picsum.photos/id/44/200/200',
        name: 'Ella Evans',
      },
      rating: 4.6,
      text: 'Wonderful ambiance and great views.',
      date: '2023-11-16',
    },
    {
      id: 27,
      placeId: 9,
      user: {
        imageUrl: 'https://picsum.photos/id/45/200/200',
        name: 'Michael Scott',
      },
      rating: 4.8,
      text: 'Highly recommend for relaxation.',
      date: '2023-12-01',
    },
  ],
  10: [
    {
      id: 28,
      placeId: 10,
      user: {
        imageUrl: 'https://picsum.photos/id/23/200/200',
        name: 'Emma Lewis',
      },
      rating: 4.5,
      text: 'Luxurious spa with a relaxing hydrotherapy circuit.',
      date: '2023-11-25',
    },
    {
      id: 29,
      placeId: 10,
      user: {
        imageUrl: 'https://picsum.photos/id/46/200/200',
        name: 'Liam Parker',
      },
      rating: 4.6,
      text: 'An amazing spa experience.',
      date: '2023-12-12',
    },
    {
      id: 30,
      placeId: 10,
      user: {
        imageUrl: 'https://picsum.photos/id/47/200/200',
        name: 'Avery King',
      },
      rating: 4.7,
      text: 'The peaceful ambiance was perfect.',
      date: '2024-01-05',
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
