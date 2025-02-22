<script>
  // Hooks
  import { onMount } from 'svelte';

  // Transitions
  import { fade } from 'svelte/transition';

  // Stores
  import { player1, player2, cardDetails, beastDeck, boostDeck, botDeck, dwarfDeck, elfDeck, goblinDeck, humanDeck, neutralDeck, trapDeck, xenoDeck } from '../stores';

  // Custom components
  import { Card, Spinner } from './index';

  // Websocket
  // import { io } from 'socket.io-client';

  // let socket = io('http://10.3.144.164:6912'); // HO
  // let socket = io('http://192.168.2.10:6912'); // Thanos
  // let socket = io('http://192.168.2.21:6912'); // MacBook
  // let socket = io('http://192.168.2.51:6912'); // Mat's place
  let showSpinner = false;
  let rows = 4;
  let cols = 7;
  let pointsVisible = false;
  let playerCards = [$cardDetails['xenoGuard'], $cardDetails['blacksmith'], $cardDetails['bokoblin'], $cardDetails['darkElf'], $cardDetails['fox'], $cardDetails['incuBot'], $cardDetails['soldier']];

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
  function endGame() {
  }

  // Resets values to restart the game.
  function resetGame() {
  }
  
  // Initiaties a new round
  function startGame() {
    // Send data to websocket server
    // socket.emit('start-game', {player1: $player1, player2: $player2});
  }

  // Determine if it is the player's turn or not
  function isPlayerTurn() {
    // if ($player1.id === socket.id && $player1.turn) return true;
    // if ($player2.id === socket.id && $player2.turn) return true;
    return false;
  }

  // Determine's if the player is p1, p2 or guest
  function playingAs() {
    // if ($player1.id === socket.id) return 'p1';
    // if ($player2.id === socket.id) return 'p2';
    return 'guest';
  }

</script>

<main class="main-content">
  {#if showSpinner}
    <Spinner />
  {/if}

  <div class="game-area">
    <div class="game-dialogue">
      <p>Hey, text will go here</p>
    </div>

    <div class="game-board">
      <div class="game-field">
        {#each playerCards as card, i (i)}
          <div class="board-square r5c{i + 1}">
            <Card displayTitle={card.displayTitle} img={card.image} race={card.race} points={card.points} {pointsVisible}/>
          </div>
        {/each}
        {#each Array(totalSquares - playerCards.length) as square, i (i)}
          <div class="board-square"></div> 
        {/each}
      </div>
    </div>

  </div>
</main>


<style lang="scss">
  .main-content {
    position: relative;
    width: 100dvw;
    height: 100dvh;
    overflow: hidden;
    padding: 6px 0 ;
  }
  
  .game-area {
    height: 100%;
    min-height: 500px;
    max-height: 1000px;
    max-width: 1500px;
    min-width: 350px;
    padding: 12px;
    overflow: inherit;
    margin-left: auto;
    margin-right: auto;


    display: grid;
    grid-template: minmax(0, 20%) minmax(0, 80%) / minmax(0, 1fr);
    align-items: center;
    justify-items: center;
    gap: 18px;
  }

  .game-dialogue {
    color: #fff3cb;
    background-color: rgba(7, 20, 37, 0.835);
    box-shadow: 0 4px 20px #000000;
    box-shadow: 0 4px 20px #000000, inset 0 0 12px 10px #00000046;
    border: 6px double #c5ac5991;
    border-radius: 10px;
    padding: 10px;
    width: 90%;
    height: 90%;

    p {
      font-size: 1.75rem;
    }
  }

  .game-board {
    position: relative;
    padding: 10px;
    height: 90%;
    width: 90%;
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

    display: grid;
    grid-template: 2fr repeat(2, 1fr) 2fr / repeat(7, 1fr);
    gap: 6px;
  }

  .game-board::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .game-board::-webkit-scrollbar-track {
    background-color: transparent;
  }
    
  .game-board::-webkit-scrollbar-thumb {
    background-color: #c5ac5942;
    border-radius: 100px;
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
      scale: 1.1;
      border: 2px solid black;
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

  // order
  .center-grid {
    grid-area: 3/3;
  }

  .r5c1 {
    grid-area: 4 / 1;
  }

  .r5c2 {
    grid-area: 4 / 2;
  }

  .r5c3 {
    grid-area: 4 / 3;
  }

  .r5c4 {
    grid-area: 4 / 4;
  }

  .r5c5 {
    grid-area: 4 / 5;
  }

  .r5c6 {
    grid-area: 4 / 6;
  }

  .r5c7 {
    grid-area: 4 / 7;
  }
</style>