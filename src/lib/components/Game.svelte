<script lang="ts">
  // Hooks
  import { onMount } from 'svelte';

  // Transitions
  import { fade } from 'svelte/transition';

  // Stores
  import { player1, player2, masterDeck } from '../stores';

  // Dialogues
  import { tutorialDialogue } from '../dialogues';

  // Custom components
  import { Card, Spinner } from './index';

  // Websocket
  // import { io } from 'socket.io-client';

  // let socket = io('http://192.168.2.10:6912'); // Thanos
  // let socket = io('http://192.168.2.21:6912'); // MacBook
  let showSpinner = false;
  let rows = 4;
  let cols = 7;
  let pointsVisible = false;
  let dialogueTextString = 'CLICK NEXT TO START THE GAME.';
  let playerCards = [$masterDeck.xenoDeck['xenoGuard'], $masterDeck.dwarfDeck['blacksmith'], $masterDeck.goblinDeck['bokoblin'], $masterDeck.elfDeck['darkElf'], $masterDeck.beastDeck['fox'], $masterDeck.botDeck['incuBot'], $masterDeck.humanDeck['soldier']];

  $: totalSquares = rows * cols;

  onMount(() => {
    // Handles connects
    // socket.on('connect', () => console.log(`User ID: ${socket.id} connected!`));

    // Handles connection errors
    // socket.on('connect_error', error => console.error('Connection error:', error));

    // Sets users (Beware that p1 might be titled player 2 and vice versa due to server.js)
    // socket.on('set-users', users => {
    //   Object.entries(users).forEach(([username, userId]) => {
    //     player1.update($player1 => {
    //       $player1.id = users['p1'];
    //       return $player1;
    //     });

    //     player2.update($player2 => {
    //       $player2.id = users['p2'];
    //       return $player2;
    //     });

    //     // TODO: Handle guests.
    //   }); 
    // });

    // Resets game and updates player hands
    // socket.on('game-started', data => {});
  });

  // Ends current round
  function endGame(): void {
  }

  // Resets values to restart the game.
  function resetGame(): void {
  }
  
  // Initiaties a new round
  function startGame(): void {
    // Send data to websocket server
    // socket.emit('start-game', {player1: $player1, player2: $player2});
  }

  // Determine if it is the player's turn or not
  function isPlayerTurn(): boolean {
    // if ($player1.id === socket.id && $player1.turn) return true;
    // if ($player2.id === socket.id && $player2.turn) return true;
    return false;
  }

  // Determine's if the player is p1, p2 or guest
  function playingAs(): string {
    // if ($player1.id === socket.id) return 'p1';
    // if ($player2.id === socket.id) return 'p2';
    return 'guest';
  }

  function playerCardClicked(): void {
    console.log('player card clicked!');
  }

  function gameBoardSquareClicked(): void {
    console.log('Square clicked!');
  }

</script>

<main>
  {#if showSpinner}
    <Spinner />
  {/if}

  <div class="game-area">
    <div class="game-dialogue">
      <div class="game-dialogue-text-wrapper">
        <p>{dialogueTextString}</p>
      </div>
      <button class="dialogue-next-btn">NEXT</button>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="game-board">
      <div class="game-field">
        {#each playerCards as card, i (i)}
          <div on:click={playerCardClicked} class="board-square r4c{i + 1}">
            <Card displayTitle={card.displayTitle} img={card.image} race={card.race} bgColor={card.bgColor} points={card.points} {pointsVisible}/>
          </div>
        {/each}
        {#each Array(totalSquares - playerCards.length) as square, i (i)}
          <div on:click={gameBoardSquareClicked} class="board-square"></div> 
        {/each}
      </div>
    </div>

  </div>
</main>


<style lang="scss">
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
    
  ::-webkit-scrollbar-thumb {
    background-color: #c5ac5942;
    border-radius: 100px;
  }

  main {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: visible;
  }
  
  .game-area {
    overflow: inherit;
    padding: 12px 0 8px;
    height: 100%;
    min-height: 500px;
    max-height: 1500px;
    width: 90%;
    max-width: 1500px;
    min-width: 350px;
    margin-left: auto;
    margin-right: auto;

    display: grid;
    grid-template: minmax(0, 20%) minmax(0, 80%) / minmax(0, 1fr);
    align-items: center;
    justify-items: center;
    gap: 18px;
  }

  .game-dialogue {
    position: relative;
    background-color: rgba(7, 20, 37, 0.835);
    color: #fff3cb;
    box-shadow: 0 4px 20px #000000, inset 0 0 12px 10px #00000046;
    border: 6px double #c5ac5991;
    border-radius: 10px;
    padding: 10px;
    height: 100%;
    width: 100%;
  }

  .game-dialogue-text-wrapper {
    width: 90%;
    height: 100%;
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
      width: 0;
    }
    
    p {
      font-size: 1.75rem;
    }
  }

  .dialogue-next-btn {
    cursor: pointer;
    font-size: 1.125rem;
    padding: 6px 10px;
    border-radius: 4px 50% 50% 4px;
    letter-spacing: 1px;
    background-color: #c5ac59;
    color: #eee;
    box-shadow: 0 4px #6e5f2b;
    border: none;
    transition: 0.1s all ease-in-out;
    
    position: absolute;
    bottom: 12px;
    right: 8px;
    
    &:hover {
      background-color: #b89e4c;
      box-shadow: 0 2px #6e5f2b;
      transform: translateY(2px); 
    }

    &:active {
      background-color: #b89e4c;
      box-shadow: 0 1px #6e5f2b;
      transform: translateY(4px);
    }
  }

  .game-board {
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background-color: rgba(7, 20, 37, 0.835);
    box-shadow: 0 4px 20px #000000, inset 0 0 12px 10px #0000008e;
    border: 6px double #c5ac5991;
    overflow: scroll;
  }
  
  .game-field {
    min-width: 750px;
    min-height: 400px;
    height: 100%;
    width: 100%;
    padding: 12px;

    display: grid;
    grid-template: 2fr repeat(2, 1fr) 2fr / repeat(7, 1fr);
    gap: 6px;
  }

  .board-square {
    position: relative;
    background-color: #c5ac5942;
    border: 2px solid rgba(0, 0, 0, 0.664);
    box-shadow: inset 0 0 8px 0 #0000009f;
    border-radius: 20px;
    overflow: hidden;
    transition: scale 0.2s ease-out;

    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
      background-color: #b69e5142;
      border: 4px solid #968652;
    }
  }

  /* Utility */
  .color-red {
    color: #d32929;
  }

  .color-blue {
    color: #40559a;
  }

  .color-green {
    color: #327738;
  }

  .color-brown {
    color: #55431e;
  }

  .color-grey {
    color: #424242;
  }

  .color-maroon {
    color: #c07369;
  }

  .color-purple {
    color: #593b71;
  }

  .color-silver {
    color: #ddceee;
  }

  .color-yellow {
    color: #8e7419;
  }

  // First row, cols 1-7
  .r1c1 {
    grid-area: 1 / 1;
  }

  .r1c2 {
    grid-area: 1 / 2;
  }

  .r1c3 {
    grid-area: 1 / 3;
  }

  .r1c4 {
    grid-area: 1 / 4;
  }

  .r1c5 {
    grid-area: 1 / 5;
  }

  .r1c6 {
    grid-area: 1 / 6;
  }

  .r1c7 {
    grid-area: 1 / 7;
  }

  // Second row, cols 1-7
  .r2c1 {
    grid-area: 2 / 1;
  }

  .r2c2 {
    grid-area: 2 / 2;
  }

  .r2c3 {
    grid-area: 2 / 3;
  }

  .r2c4 {
    grid-area: 2 / 4;
  }

  .r2c5 {
    grid-area: 2 / 5;
  }

  .r2c6 {
    grid-area: 2 / 6;
  }

  .r2c7 {
    grid-area: 2 / 7;
  }

  // Third row, cols 1-7
  .r3c1 {
    grid-area: 3 / 1;
  }

  .r3c2 {
    grid-area: 3 / 2;
  }

  .r3c3 {
    grid-area: 3 / 3;
  }

  .r3c4 {
    grid-area: 3 / 4;
  }

  .r3c5 {
    grid-area: 3 / 5;
  }

  .r3c6 {
    grid-area: 3 / 6;
  }

  .r3c7 {
    grid-area: 3 / 7;
  }

  .r4c1 {
    grid-area: 4 / 1;
  }

  .r4c2 {
    grid-area: 4 / 2;
  }

  .r4c3 {
    grid-area: 4 / 3;
  }

  .r4c4 {
    grid-area: 4 / 4;
  }

  .r4c5 {
    grid-area: 4 / 5;
  }

  .r4c6 {
    grid-area: 4 / 6;
  }

  .r4c7 {
    grid-area: 4 / 7;
  }
</style>