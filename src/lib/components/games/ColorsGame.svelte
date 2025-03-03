<script lang="ts">
  // Hooks
  import { onMount } from 'svelte';

  // Transitions
  import { fade } from 'svelte/transition';

  // Stores
  import { player1, player2, enemyPlayer } from '../../stores/players';
  import { colorsDeck, deckDescription } from '../../stores/decks';

  // Dialogues
  import { tutorialDialogue } from '../../dialogues';

  // Components
  import { BlankCard } from '../gameCards';
  import Card from '../Card.svelte';

  let showSpinner = false;
  let gameInSession = false;
  let currentRound = 1;
  let currentBoardTemperature: 'cool' | 'warm' | 'hot' = 'warm';
  let pointsVisible = false;
  let dialogueTextString = 'CLICK NEXT TO START THE GAME.';
  let rows = 4;
  let cols = 7;
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
    startGame();
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
    dealCards('p1');
    dealCards('e1');
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

  function enemyCardClicked(): void {
    console.log('player card clicked!');
  }

  function gameBoardSquareClicked(): void {
    console.log('Square clicked!');
  }

  function dealCards(playerID): void {
    let handDealt = [];
    for (let i = 0; i < 7; i++) {
      const nextCardIndex = Math.floor(Math.random() * colorsDeck.length);
      const cardDrawn = colorsDeck[nextCardIndex];
      handDealt.push($deckDescription[cardDrawn]);
      colorsDeck.splice(nextCardIndex, 1);
    }

    if (playerID === 'p1') {
      player1.update($player1 => {
        $player1.hand = handDealt;
        return $player1;
      });
    } else if (playerID === 'e1') {
      enemyPlayer.update($enemyPlayer => {
        $enemyPlayer.hand = handDealt;
        return $enemyPlayer;
      });
    }
  }

  function drawCard(): void {
    const nextCardIndex = Math.floor(Math.random() * colorsDeck.length);
    const cardDrawn = colorsDeck[nextCardIndex];
    const newCard = cardDrawn;
    colorsDeck.splice(nextCardIndex, 1);

    return newCard;
  }

  function centerBoardClicked(): void {
    const temps = ['cool', 'warm', 'hot'];
    const randomNum = Math.floor(Math.random() * 3);
    currentBoardTemperature = temps[randomNum] as 'cool' | 'warm' | 'hot';
  }
</script>

<main>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="game-board">
    <div class="game-field">
      {#each $enemyPlayer.hand as card, i (i)}
        <div on:click={enemyCardClicked} class="board-square r1c{i + 1}">
          <BlankCard bgColor={card.bgColor} isRare={card.isRare} temperature={card.temperature} faceUp={false}/>
        </div>
      {/each}
      <div on:click={centerBoardClicked} class="center-board-square center-board-square-bg__{currentBoardTemperature}"></div> 
      {#each $player1.hand as card, i (i)}
        <div on:click={playerCardClicked} class="board-square r3c{i + 1}">
          <BlankCard bgColor={card.bgColor} isRare={card.isRare} temperature={card.temperature}/>
        </div>
      {/each}
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
    // height: 100vh;
    height: 100%;
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

  .game-board {
    position: relative;
    height: 100%;
    width: 100%;
  }
  
  .game-field {
    min-width: 750px;
    min-height: 400px;
    height: 100%;
    width: 100%;
    padding: 12px;

    display: grid;
    grid-template: 1fr 1fr 1fr / repeat(7, 1fr);
    gap: 6px;
  }

  .board-square {
    position: relative;
    background-color: #c5ac5942;
    border: 2px solid rgba(0, 0, 0, 0.664);
    box-shadow: inset 0 0 8px 0 #0000009f;
    border-radius: 20px;
    overflow: hidden;
    transition: border 0.2s ease-in-out;


    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
      background-color: #b69e5142;
      border: 2px solid #968652;
    }
  }
  
  .center-board-square {
    position: relative;
    background: linear-gradient(to top left, #32427762, #32773862, #ddceee62, #c0736962, #7e7e7e62, #855a2a62, #c2a84c62);
    border: 2px solid rgba(0, 0, 0, 0.664);
    box-shadow: inset 0 0 8px 0 #0000009f;
    border-radius: 20px;
    overflow: hidden;
    transition: scale 0.2s ease-out;
    grid-column: span 7;
    grid-row: 2;
    transition: border 0.2s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
      border: 2px solid #968652;
    }
  }

  .center-board-square-bg__hot {
    background: linear-gradient(to top left,#720e0e, #d32929);
  }

  .center-board-square-bg__warm {
    background: linear-gradient(to top left,#2c2315, #916a45);
  }

  .center-board-square-bg__cool {
    background: linear-gradient(to top left,#192255, #305770);
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

  // First row (enemy), cols 1-7
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

  // Third row (player), cols 1-7
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
</style>