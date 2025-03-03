// Types
import type { ColorsDeckCard } from '../decks';

// Stores
import { player1, player1Reset} from './player1';
import { player2, player2Reset} from './player2';
import { enemyPlayer, enemyPlayerReset } from './enemyPlayer';

type GamePlayer = {
  id: string,
  title: string,
  wins: number;
  losses: number;
  draws: number;
  playedFirst: boolean;
  playingTwice: boolean;
  turn: boolean;
  hand: ColorsDeckCard[];
  startingHand: [];
  cardsDrawn: [];
  discards: [];
}

export {
  player1,
  player1Reset,
  player2,
  player2Reset,
  enemyPlayer,
  enemyPlayerReset
}

export type {
  GamePlayer
}