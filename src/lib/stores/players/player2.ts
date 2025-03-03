// Svelte Hooks
import { writable } from 'svelte/store';

// Types
import type { GamePlayer } from '.';

export const player2 = writable<GamePlayer>({
  id: 'p2',
  title: 'Player 2',
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

export const player2Reset = writable<GamePlayer>({
  id: undefined,
  title: 'Player 2',
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