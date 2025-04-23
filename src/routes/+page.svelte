<script>
  import { onMount } from 'svelte';

  let items = [];
  let newItem = '';

  function loadItems() {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      items = JSON.parse(savedItems);
    }
  }

  function saveItem() {
    if (newItem.trim() === '') return;
    items.push(newItem);
    localStorage.setItem('items', JSON.stringify(items));
    newItem = '';
  }

  function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
  }

  onMount(loadItems);
</script>
<header class="navbar">
  <div class="box"><h1 class="title is-4 nav-brand">bloggers</h1><div class="nav-burger">///</div></div>
</header>
<main class="section">
  <div class="container">
    <div class="box">
      <h1 class="title is-4">Create Blog</h1>
      <textarea
        class="textarea mb-3"
        bind:value={newItem}
        rows="4"
        placeholder="Write your blog..."
      ></textarea>
      <button on:click={saveItem} class="button is-link is-rounded">Submit</button>
    </div>

    <div class="box">
      <h2 class="title is-5">Saved Blogs</h2>
      {#if items.length === 0}
        <p class="has-text-grey">No blogs saved yet.</p>
      {:else}
        <ul>
          {#each items as item, i}
            <li class="mb-2">
              <div class="notification is-light">
                {item}
                <button
                  on:click={() => deleteItem(i)}
                  class="delete is-pulled-right"
                  title="Delete"
                ></button>
              </div>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</main>
<footer class="section mb-7">
  <div class="box">
    <h1 class="subtitle">@copyright pjdeveloper869</h1>
  </div>
</footer>