<script lang="ts">
</script>

<main>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="game-board">
    <div class="game-field">
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
    height: 100%;
    overflow: visible;
  }
  
  .game-board {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 12px;
  }
  
  .game-field {
    height: 100%;
    width: 100%;
    background-color: #c5ac5942;
    border: 2px solid rgba(0, 0, 0, 0.664);
    box-shadow: inset 0 0 8px 0 #0000009f;
    border-radius: 20px;
  }
</style>