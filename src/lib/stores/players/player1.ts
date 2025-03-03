// Svelte Hooks
import { writable } from 'svelte/store';

// Types
import type { GamePlayer } from '.';
import type { ColorsDeckCard } from '../decks';

export const player1 = writable<GamePlayer>({
  id: 'p1',
  title: 'Player 1',
  wins: 0,
  losses: 0,
  draws: 0,
  playedFirst: false,
  playingTwice: false,
  turn: false,
  hand: [],
  startingHand: [],
  cardsDrawn: [],
  discards: [],
});

export const player1Reset = writable<GamePlayer>({
  id: undefined,
  title: 'Player 1',
  wins: 0,
  losses: 0,
  draws: 0,
  playedFirst: false,
  playingTwice: false,
  turn: false,
  hand: [],
  startingHand: [],
  cardsDrawn: [],
  discards: [],
});