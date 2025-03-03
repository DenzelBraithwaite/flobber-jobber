// Svelte Hooks
import { writable } from 'svelte/store';

// Types
import type { GamePlayer } from '.';

export const enemyPlayer = writable<GamePlayer>({
  id: 'e1',
  title: 'Enemy',
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

export const enemyPlayerReset = writable<GamePlayer>({
  id: undefined,
  title: 'Enemy',
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