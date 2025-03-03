<script lang="ts">
  // hooks
  import { createEventDispatcher } from 'svelte';

  // Transitions
  import { fly, fade } from 'svelte/transition';

  // props
  export let faceUp = true;
  export let bgColor: 'blue' | 'light-blue' | 'green' | 'maroon' | 'grey' | 'silver' | 'black' | 'purple' | 'yellow' | 'brown' | string = '';
  export let isRare = false;
  export let temperature: 'cool' | 'netural' | 'hot' | string = '';

  const createEvent = createEventDispatcher();

  function cardClickHandler(event) {  
    console.log(bgColor);  
    createEvent('cardClick', bgColor);
  }

  function setBgColor(): string {
    if (bgColor === 'blue') return 'bg-blue';
    if (bgColor === 'rare blue') return 'bg-blue-rare';
    if (bgColor === 'light blue') return 'bg-light-blue';
    if (bgColor === 'rare light blue') return 'bg-light-blue-rare';
    if (bgColor === 'green') return 'bg-green';
    if (bgColor === 'rare green') return 'bg-green-rare';
    if (bgColor === 'maroon') return 'bg-maroon';
    if (bgColor === 'rare maroon') return 'bg-maroon-rare';
    if (bgColor === 'grey') return 'bg-grey';
    if (bgColor === 'rare grey') return 'bg-grey-rare';
    if (bgColor === 'silver') return 'bg-silver';
    if (bgColor === 'rare silver') return 'bg-silver-rare';
    if (bgColor === 'black') return 'bg-black';
    if (bgColor === 'rare black') return 'bg-black-rare';
    if (bgColor === 'purple') return 'bg-purple';
    if (bgColor === 'rare purple') return 'bg-purple-rare';
    if (bgColor === 'yellow') return 'bg-yellow';
    if (bgColor === 'rare yellow') return 'bg-yellow-rare';
    if (bgColor === 'brown') return 'bg-brown';
    if (bgColor === 'rare brown') return 'bg-brown-rare';

    return '';
  }
</script>

{#if faceUp}
  <!-- If card is legendary, shows special race colors, otherwise matches race color -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={cardClickHandler} class="card {setBgColor()}" in:fly={{x: 100}} out:fade>
  </div>
{:else}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click class="card facedown" in:fly={{x: 100}} out:fade></div>
{/if}

<style lang="scss">
  .card {
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-out;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
  }

  .facedown {
    // TODO: remove !important after testing, have to recreat all the bgs cuz they fck disappeared on me.
    background: url('/beast-card-back.png') !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
  }

  /* Utility classes */
  .flip-180 {
    transform: rotate(0.5turn);
  }

  /* bg color based on race */
  .bg-brown {
    background: linear-gradient(to bottom right, #55431e, #855a2a 50%);
    outline: 4px solid #55431e;
  }
  
  .bg-brown-rare {
    background: linear-gradient(to bottom right, #614d22, #855a2a 80%);
    border: 4px double #e6af70;
    border-radius: 20px;
  }
  
  .bg-grey {
    background: linear-gradient(to bottom right, #333, #555 50%);
    outline: 4px solid #333;
  }
  
  .bg-grey-rare {
    background: linear-gradient(to bottom right, #333, #555 80%);
    border: 4px double #e6af70;
    border-radius: 20px;
  }
  
  .bg-maroon {
    background: linear-gradient(to bottom right, #774032, #863126 50%);
    outline: 4px solid #774b32a8;
  }
  
  .bg-maroon-rare {
    background: linear-gradient(to bottom right, #774032, #863126 80%);
    border: 4px double #e6af70;
    border-radius: 20px;
  }
  
  .bg-silver {
    background: linear-gradient(to bottom right, #726b7a, #ddceee 50%);
    outline: 4px solid #726b7a;
  }
  
  .bg-silver-rare {
    background: linear-gradient(to bottom right, #726b7a, #ddceee 80%);
    border: 4px double #e6af70;
    border-radius: 20px;
  }
  
  .bg-green {
    background: linear-gradient(to bottom right, #327738, #78c069 50%);
    outline: 4px solid #327738a8;
  }
  
  .bg-green-rare {
    background: linear-gradient(to bottom right, #327738, #78c069 80%);
    border: 4px double #e6af70;
    border-radius: 20px;
  }
  
  .bg-blue {
    background: linear-gradient(to bottom right, #324277, #508c9e 50%);
    outline: 4px solid #324277a8;
  }

  .bg-blue-rare {
    background: linear-gradient(to bottom right, #324277, #508c9e 80%);
    border: 4px double #e6af70;
    border-radius: 20px;
  }

  .bg-yellow {
    background: linear-gradient(to bottom right,#776832,#c2a84c 50%);
    outline: 4px solid #957c1e;
  }

  .bg-yellow-rare {
    background: linear-gradient(to bottom right, #776832, #c2a84c 80%);
    border: 4px double #e6af70;
    border-radius: 20px;
  }

  .bg-light-blue {
    background: linear-gradient(to bottom right, #90beff, #8bc8d1 50%);
    outline: 4px solid #eeeeeed4;
  }

  .bg-light-blue-rare {
    background: linear-gradient(to bottom right, #90beff, #8bc8d1 80%);
    border: 4px double #e6af70;
    border-radius: 20px;
  }

  .bg-black {
    background: linear-gradient(to bottom right, #000000, #1a1a1a 50%);
    outline: 4px solid #111111;
  }

  .bg-black-rare {
    background: linear-gradient(to bottom right, #000, #1a1a1a 80%);
    border: 4px double #e6af70;
    border-radius: 20px;
  }
  
  .bg-purple {
    background: linear-gradient(to bottom right,#31273e,#933ce929 50%);
    outline: 4px solid #3d1f5a;
  }
  
  .bg-purple-rare {
    background: linear-gradient(to bottom right, #31273e, #933ce929 80%);
    border: 4px double #e6af70;
    border-radius: 20px;
  }
</style>