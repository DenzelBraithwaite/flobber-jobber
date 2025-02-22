<script>
  // hooks
  import { createEventDispatcher } from 'svelte';

  // Transitions
  import { fly, fade } from 'svelte/transition';

  // props
  export let faceUp = true;
  export let displayTitle = 'Goblin Lord Smasher';
  export let title = 'Title';
  export let img = '/xenos/abyssolarian.png';
  export let points = 0;
  export let pointsVisible = false;
  export let race = 'xeno';
  export let rarity = 'common';
  export let description = '';
  export let trait = '';
  export let traitTitle = '';

  const createEvent = createEventDispatcher();

  function cardClickHandler(event) {    
    createEvent('cardClick', {
      'title': title,
      'points': points,
      'race': race,
      'trait': trait
    })
  }

</script>

{#if !faceUp}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click class="card facedown bottom-deck" in:fly={{x: 100}} out:fade></div>
{:else}
  <!-- If card is legendary, shows special race colors, otherwise matches race color -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={cardClickHandler} class="card bg-{race}{rarity === 'legendary' ? '-rare' : ''}" in:fly={{x: 100}} out:fade>
    <img class="card-img" src={img} alt="img of card">
    <!-- <p class="race {race}-race">{race}</p> -->
    {#if pointsVisible}
      <p class="points {race}-race">{points}</p>
    {/if}
    <span class="card-title-wrapper">
      <p class="card-title {race}-text-color">{displayTitle}</p>
    </span>
    <!-- <div class="card-bottom-section">
      <div class="bottom-section-wrapper">
        <p class="description">{description}</p>
        {#if trait}<p class="special-trait">{traitTitle}</p>{/if}
        <p>{trait}</p>
      </div>
    </div> -->
  </div>
{/if}

<style lang="scss">
  .card {
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-out;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    &:hover {
      z-index: 1;
      box-shadow: 0 4px 12px #000000a8;
    }
  }

  // .card-bottom-section {
  //   position: relative;
  //   width: 100%;
  //   height: 100%;
  //   background-color: #ffffff3b;
  //   overflow-y: scroll;
  //   border-radius: 0.25rem;
  //   text-align: center;
  //   line-height: 1.125;

  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  // }

  .card-title-wrapper {
    background-color: #000000dc;
    padding: 5px 0 2px;
    border-radius: 50% 50% 0 0;
    width: 100%;
    border-top: 1px solid #000000c9;
    box-shadow: inset 0 0 8px 0 #0000009f;

    position: absolute;
    bottom: 0;
  }

  .card-title {
    color: #ddd;
    text-shadow: 3px 3px 0 #000;
    font-size: 1.05rem;
    // font-weight: bold; // no bold with this font
    text-align: center;
    white-space: nowrap;
  }

  .card-img {
    width: 85%;
    object-fit: contain;
    object-position: center;
    border-radius: 0.25rem 0.25rem 0 0;
  }

  .bottom-section-wrapper::-webkit-scrollbar,
  .card-bottom-section::-webkit-scrollbar {
    background: transparent;
    width: 0;
  }

  .bottom-section-wrapper {
    width: 90%;
    padding-bottom: 0.9rem;
    font-size: 0.85rem;
    color: #ebebeb;
    text-shadow: 0 1px 3px #0000008f;
    padding-top: 0.5rem;
    overflow-y: scroll;
  }

  .race {
    color: #eee;
    z-index: 10;
    text-align: center;
    font-weight: 500;
    font-size: 0.8rem;
    letter-spacing: 1px;
    height: 1.5rem;
    max-height: 100%;
    border-radius: 1rem;
    padding: 0.25rem;
    // width: 3.75rem;
    box-shadow: inset -2px -2px 8px #0000004d;

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-25px, 10px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .points {
    color: #eee;
    text-align: center;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 1px;
    height: 20px;
    width: 32px;
    border-radius: 0 0 100% 100%;
    box-shadow: inset -2px -2px 8px #0000004d;
    transform: translateX(50%);

    position: absolute;
    top: 0;
    right: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .special-trait {
    // font-weight: bold; // no bold with this font
    color: #fdf3c8;
  }

  .description {
    margin-bottom: 0.25rem;
  }

  .facedown {
    background: url('/card-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
   
    &:hover {
      scale: 1.05;
      transform: translate(0, -0.4rem);
    }

    &:active {
      scale: 1;
    }
  }

  /* Utility classes */
  
  .flip-180 {
    transform: rotate(0.5turn);
  }
  
  /* bg color based on race */
  .bg-beast {
    background: linear-gradient(to top left, #55431e, #855a2a 50%);
    outline: 4px solid #55431e;
  }
  
  .bg-beast-rare {
    background: linear-gradient(to top left, #614d22 5%, #e0de69b6, #855a2a 90%);
    outline: 4px solid #774b32a8;
  }
  
  .bg-bot {
    background: linear-gradient(to top left, #424242, #7e7e7e 50%);
    outline: 4px solid #424242;
  }
  
  .bg-bot-rare {
    background: linear-gradient(to top left, #424242 5%, #e0de69, #7e7e7e 90%);
    outline: 4px solid #424242;
  }
  
  .bg-dwarf {
    background: linear-gradient(to top left, #774b32, #c07369 50%);
    outline: 4px solid #774b32a8;
  }
  
  .bg-dwarf-rare {
    background: linear-gradient(to top left, #774b32 5%, #e0de69, #c07369 90%);
    outline: 4px solid #774b32a8;
  }
  
  .bg-elf {
    background: linear-gradient(to top left, #726b7a, #ddceee 50%);
    outline: 4px solid #726b7a;
  }
  
  .bg-elf-rare {
    background: linear-gradient(to top left, #726b7a 5%, #e0de69, #ddceee 90%);
    outline: 4px solid #726b7a;
  }
  
  .bg-goblin {
    background: linear-gradient(to top left, #327738, #78c069 50%);
    outline: 4px solid #327738a8;
  }
  
  .bg-goblin-rare {
    background: linear-gradient(to top left, #327738 5%, #e0de69, #78c069 90%);
    outline: 4px solid #327738a8;
  }
  
  .bg-human {
    background: linear-gradient(to top left, #324277, #69c0ad 50%);
    outline: 4px solid #324277a8;
  }

  .bg-human-rare {
    background: linear-gradient(to top left, #324277 5%, #e0de69, #69c0ad 90%);
    outline: 4px solid #324277a8;
  }

  .bg-xeno {
    background: linear-gradient(to top left,#776832,#c2a84c 50%);
    outline: 4px solid #957c1e;
  }

  .bg-boost {
    background: linear-gradient(353deg, #90beff, #8bc8d13d 50%);
    outline: 4px solid #eeeeeed4;
  }

  .bg-trap {
    background: linear-gradient(353deg, #000000, #ffffff4a 50%);
    outline: 4px solid #111111;
  }

  .bg-neutral {
    background: linear-gradient(353deg,#31273e,rgb(147 60 233 / 16%) 50%);
    outline: 4px solid #3d1f5a;
}

  /* Race text color */  
  .beast-race {
    background-color: #55431e;
    border: 2px solid #55431e;
  }
  
  .bot-race {
    background-color: #424242;
    border: 2px solid #424242;
  }
  
  .dwarf-race {
    background-color: #774b32;
    border: 2px solid #774b32;
  }
  
  .elf-race {
    background-color: #726b7a;
    border: 2px solid #726b7a;
  }
  
  .goblin-race {
    background-color: #327738;
    border: 2px solid #327738;
  }
  
  .human-race {
    background-color: #324277;
    border: 2px solid #324277;
  }
  
  .xeno-race {
    background-color: #8e7419;
    border: 2px solid #8e7419;
  }

  .boost-race {
    background-color: #a0aec8;
    border: 2px solid #a0aec8;
  }

  .trap-race {
    background-color: #111;
    border: 2px solid #3e3e3e12;
  }

  .neutral-race {
    background-color: #462e59;
    border: 2px solid rgb(59 59 59 / 7%);
  }

  /* race title text color */
  .beast-text-color {
    // background-color: #55431e5e;
    color: #a37f37;
  }
  
  .bot-text-color {
    // background-color: #4242425e;
    color: #aaaaaa;
  }
  
  .dwarf-text-color {
    // background-color: #774b325e;
    color: #ca9779;
  }
  
  .elf-text-color {
    // background-color: #726b7a5e;
    color: #a89ab8;
  }
  
  .goblin-text-color {
    // background-color: #3277385e;
    color: #77c07d;
  }
  
  .human-text-color {
    // background-color: #3242775e;
    color: #98aae7;
  }
  
  .xeno-text-color {
    // background-color: #8e74195e;
    color: #cab568;
  }

  .boost-text-color {
    // background-color: #ffffff5e;
   color: #b4c1da;
  }

  .trap-text-color {
    // background-color: #0000005e;
    color: #830000;
  }

  .neutral-text-color {
    // background-color: #3b1d4e5e;
    color: #af93be;
  }
</style>