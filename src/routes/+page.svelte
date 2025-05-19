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

<style>
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f6fa;
    color: #2f3640;
  }

  .navbar {
    background: linear-gradient(135deg, #4e54c8, #8f94fb);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .nav-brand {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .nav-burger {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .container {
    max-width: 700px;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  .card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    margin-bottom: 2rem;
  }

  h1, h2 {
    margin-bottom: 1rem;
  }

  textarea {
    width: 100%;
    padding: 0.8rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 1rem;
    resize: vertical;
    margin-bottom: 1rem;
  }

  button {
    background-color: #4e54c8;
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background-color: #5e63d2;
  }

  .blog-entry {
    background: #fdfdfd;
    padding: 1rem;
    border-left: 5px solid #4e54c8;
    border-radius: 10px;
    margin-bottom: 1rem;
    position: relative;
  }

  .delete {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    color: #e84118;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .footer {
    text-align: center;
    color: #888;
    font-size: 0.9rem;
    margin-top: 2rem;
    padding: 1rem;
  }

  @media (max-width: 600px) {
    .nav-brand {
      font-size: 1.4rem;
    }

    button {
      width: 100%;
    }
  }
</style>

<header class="navbar">
  <h1 class="nav-brand">📝 Bloggers</h1>
  <div class="nav-burger">≡</div>
</header>

<main class="container">
  <div class="card">
    <h1>Create Blog</h1>
    <textarea
      bind:value={newItem}
      rows="4"
      placeholder="Write your blog..."
    ></textarea>
    <button on:click={saveItem}>Submit</button>
  </div>

  <div class="card">
    <h2>🗂 Saved Blogs</h2>
    {#if items.length === 0}
      <p style="color: #888;">No blogs saved yet.</p>
    {:else}
      {#each items as item, i}
        <div class="blog-entry">
          {item}
          <button class="delete" on:click={() => deleteItem(i)} title="Delete">×</button>
        </div>
      {/each}
    {/if}
  </div>
</main>

<footer class="footer">
  &copy; 2025 pjdeveloper869
</footer>
