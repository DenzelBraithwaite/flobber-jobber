// @ts-ignore
import { writable } from 'svelte/store';

type CardColor = 'blue' | 'light blue' | 'green' | 'maroon' | 'grey' | 'silver' | 'black' | 'purple' | 'yellow' | 'brown';
type RareCardColor = 'rare blue' | 'rare light blue' | 'rare green' | 'rare maroon' | 'rare grey' | 'rare silver' | 'rare black' | 'rare purple' | 'rare yellow' | 'rare brown';
const cardColors :CardColor[] = ['blue', 'light blue', 'green', 'maroon', 'grey', 'silver', 'black', 'purple', 'yellow', 'brown'];
const rareCardColors :RareCardColor[] = ['rare blue', 'rare light blue', 'rare green', 'rare maroon', 'rare grey', 'rare silver', 'rare black', 'rare purple', 'rare yellow', 'rare brown'];

export type ColorsDeckCard = {
    isRare: boolean;
    bgColor: CardColor | RareCardColor;
    temperature: 'cool' | 'warm' | 'hot';
}

type ColorsDeck = {
  [raceName: string]: ColorsDeckCard; // { [key(can be any valid identifier): KeyType(js converts to string automatically)]: ValueType }
}

export const deckDescription = writable<ColorsDeck>({
  'rare blue': {
    isRare: true,
    bgColor: 'rare blue',
    temperature: 'cool'
  },
  blue: {
    isRare: false,
    bgColor: 'blue',
    temperature: 'cool'
  },
  'rare green': {
    isRare: true,
    bgColor: 'rare green',
    temperature: 'warm'
  },
  green: {
    isRare: false,
    bgColor: 'green',
    temperature: 'warm'
  },
  'rare silver': {
    isRare: true,
    bgColor: 'rare silver',
    temperature: 'warm'
  },
  silver: {
    isRare: false,
    bgColor: 'silver',
    temperature: 'warm'
  },
  'rare maroon': {
    isRare: true,
    bgColor: 'rare maroon',
    temperature: 'hot'
  },
  maroon: {
    isRare: false,
    bgColor: 'maroon',
    temperature: 'hot'
  },
  'rare grey': {
    isRare: true,
    bgColor: 'rare grey',
    temperature: 'warm'
  },
  grey: {
    isRare: false,
    bgColor: 'grey',
    temperature: 'warm'
  },
  'rare brown': {
    isRare: true,
    bgColor: 'rare brown',
    temperature: 'warm'
  },
  brown: {
    isRare: false,
    bgColor: 'brown',
    temperature: 'warm'
  },
  'rare yellow': {
    isRare: true,
    bgColor: 'rare yellow',
    temperature: 'hot'
  },
  yellow: {
    isRare: false,
    bgColor: 'yellow',
    temperature: 'hot'
  },
  'rare light blue': {
    isRare: true,
    bgColor: 'rare light blue',
    temperature: 'cool'
  },
  'light blue': {
    isRare: false,
    bgColor: 'light blue',
    temperature: 'cool'
  },
  'rare black': {
    isRare: true,
    bgColor: 'rare black',
    temperature: 'warm'
  },
  black: {
    isRare: false,
    bgColor: 'black',
    temperature: 'warm'
  },
  'rare purple': {
    isRare: true,
    bgColor: 'rare purple',
    temperature: 'cool'
  },
  purple: {
    isRare: false,
    bgColor: 'purple',
    temperature: 'cool'
  }
});

export const deck = [];
for (let mainIndex = 0; mainIndex < 10; mainIndex++) {
  for (let i = 0; i < 5; i++) {
    deck.push(cardColors[mainIndex]);
    // deck.push(rareCardColors[mainIndex]);

  };
  // deck.push(cardColors[mainIndex]);
  deck.push(rareCardColors[mainIndex]);
};