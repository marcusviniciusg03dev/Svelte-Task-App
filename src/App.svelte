<script lang="ts">
import Todos from "./Components/todos.svelte";  
</script>

<header>
  <img src="/logo.svg" id="logo" alt="task-app-logo" />
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
    user-select: none;
    width: auto;
    width: 5em;
  }
</style>
