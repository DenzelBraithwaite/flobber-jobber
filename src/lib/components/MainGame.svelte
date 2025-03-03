<script lang="ts">
  // Hooks
  import { onMount } from 'svelte';

  // Transitions
  import { fade } from 'svelte/transition';

  // Stores
  import { mainDeck } from '../stores';
  import { player1, player2, enemyPlayer } from '../stores/players';

  // Dialogues
  import { tutorialDialogue } from '../dialogues';

  // GameBoards
  import { NoGame, ColorsGame} from '../components/games';

  // Components
  import { Card, Spinner } from './';

  // Websocket
  // import { io } from 'socket.io-client';

  // let socket = io('http://192.168.2.10:6912'); // Thanos
  // let socket = io('http://192.168.2.21:6912'); // MacBook
  let showSpinner = false;
  let gameInSession = false;
  let currentRound = 1;
  let currentGame = '';
  let pointsVisible = false;
  let dialogueTextString = 'CLICK NEXT TO START THE GAME.';
  let listOfGames = {
    1: ['colors'],
    2: []
  };

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

  // Decides which game will be played next, removing game so no duplicates per round.
  function chooseGame(): string {
    let randomNumber = Math.floor(Math.random() * listOfGames[currentRound].length);
    const gameChosen = listOfGames[currentRound][randomNumber];
    listOfGames[currentRound].splice(randomNumber, 1);

    return gameChosen; 
  }
  
  // Initiaties a new round
  function startGame(): void {
    // Send data to websocket server
    // socket.emit('start-game', {player1: $player1, player2: $player2});

    handleGameSelection(chooseGame());
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

  function handleNextButtonClick(): void {
    if (!gameInSession) startGame();
  }

  // Router for game selection
  function handleGameSelection(chosenGame: string): void {
    loadGame(chosenGame);
  }

  // Sets everything for current game, will make this comment more detailed later.TODO:
  function loadGame(gameToLoad: string): void {
    switch (gameToLoad) {
      case 'colors':
        loadColorsGame();
        break;
    }
  }

  function loadColorsGame(): void {
    // TODO: in future maybe change bg

    // Change game board
    currentGame = 'colors';
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
      <button on:click={handleNextButtonClick} class="dialogue-next-btn">NEXT</button>
    </div>

    <!-- TODO: Here is where game boards will be swapped out. -->
    {#if currentGame === ''}
      <div class="game-board-wrapper">
        <NoGame />
      </div> 
    {:else if currentGame === 'colors'}
      <div class="game-board-wrapper">
        <ColorsGame />
      </div>
    {/if}

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

  .game-board-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background-color: rgba(7, 20, 37, 0.835);
    box-shadow: 0 4px 20px #000000, inset 0 0 12px 10px #0000008e;
    border: 6px double #c5ac5991;
    overflow: scroll;
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
</style>