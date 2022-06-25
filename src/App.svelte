<script lang="ts">
import Todos from "./Components/todos.svelte";  
</script>

<header>
  <h3 id="logo">Your tasks</h3>
</header>

<main>
  <Todos />
</main>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }

  #logo {
    color: #FF6900;
    user-select: none;
  }
</style>
