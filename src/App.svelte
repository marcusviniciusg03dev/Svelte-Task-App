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
    color: #ffffff;
    padding: 1rem 2rem;
    background: #36ad3f;
    user-select: none;
    border-radius: 1rem;
  }
</style>
