import { Program, NavItem } from './types';

export const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Central Flash',
    artist: 'Central DJ',
    edition: 'Edição 2776',
    date: '21/11/2025 11:02',
    image: 'https://picsum.photos/seed/dj1/400/400',
    link: 'https://soundcloud.com/discover',
  },
  {
    id: '2',
    title: 'Central Flash Semanal',
    artist: 'Fabrício Lopes',
    edition: 'Edição 55',
    date: '17/11/2025 06:00',
    image: 'https://picsum.photos/seed/dj2/400/400',
    link: 'https://soundcloud.com/discover',
  },
  {
    id: '3',
    title: 'Circuito Mix',
    artist: 'Wanderson Siqueira',
    edition: 'Edição 14',
    date: '21/11/2025 22:00',
    image: 'https://picsum.photos/seed/dj3/400/400',
    link: 'https://soundcloud.com/discover',
  },
  {
    id: '4',
    title: 'Club Connection',
    artist: 'Célio Souza',
    edition: 'Edição 68',
    date: '21/11/2025 08:00',
    image: 'https://picsum.photos/seed/dj4/400/400',
    link: 'https://soundcloud.com/discover',
  },
  {
    id: '5',
    title: 'Club Stars',
    artist: '7ooxic & Tech',
    edition: 'Edição 27',
    date: '22/11/2025 12:00',
    image: 'https://picsum.photos/seed/dj5/400/400',
    link: 'https://soundcloud.com/discover',
  },
  {
    id: '6',
    title: 'Dance Express',
    artist: 'Frank Soares',
    edition: 'Edição 41',
    date: '24/10/2025 15:30',
    image: 'https://picsum.photos/seed/dj6/400/400',
    link: 'https://soundcloud.com/discover',
  },
  {
    id: '7',
    title: 'Eletro Vibe',
    artist: 'DJ Marky',
    edition: 'Edição 12',
    date: '20/11/2025 20:00',
    image: 'https://picsum.photos/seed/dj7/400/400',
    link: 'https://soundcloud.com/discover',
  },
  {
    id: '8',
    title: 'House Nation',
    artist: 'DJ Alok',
    edition: 'Edição 99',
    date: '19/11/2025 18:00',
    image: 'https://picsum.photos/seed/dj8/400/400',
    link: 'https://soundcloud.com/discover',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Programas', href: '#programs' },
  { label: 'Top 20', href: '#top20' },
  { label: 'Contato', href: '#contact' },
];

export const RADIOS = [
  { id: '1', name: 'Rádio Pop', image: 'https://picsum.photos/seed/radio1/200/200', listeners: '12k' },
  { id: '2', name: 'Rádio Rock', image: 'https://picsum.photos/seed/radio2/200/200', listeners: '8k' },
  { id: '3', name: 'Rádio Dance', image: 'https://picsum.photos/seed/radio3/200/200', listeners: '25k' },
  { id: '4', name: 'Rádio Jazz', image: 'https://picsum.photos/seed/radio4/200/200', listeners: '3k' },
  { id: '5', name: 'Rádio News', image: 'https://picsum.photos/seed/radio5/200/200', listeners: '15k' },
  { id: '6', name: 'Rádio Hits', image: 'https://picsum.photos/seed/radio6/200/200', listeners: '18k' },
];

export const TOP20 = [
  { pos: 1, title: "Midnight City", artist: "M83", image: "https://picsum.photos/seed/m83/100/100" },
  { pos: 2, title: "One More Time", artist: "Daft Punk", image: "https://picsum.photos/seed/daft/100/100" },
  { pos: 3, title: "Levels", artist: "Avicii", image: "https://picsum.photos/seed/avicii/100/100" },
  { pos: 4, title: "Titanium", artist: "David Guetta", image: "https://picsum.photos/seed/guetta/100/100" },
  { pos: 5, title: "Don't You Worry Child", artist: "Swedish House Mafia", image: "https://picsum.photos/seed/shm/100/100" },
];