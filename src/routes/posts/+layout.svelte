<script lang="ts">
import { posts } from "$lib/posts";
import { page as pageState } from "$app/state";
import { setContext } from "svelte";

let { children } = $props();
let currentSlug = $derived(pageState.params.slug);
let filter = $state("");

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "/") {
    e.preventDefault();
    document.querySelector<HTMLInputElement>("#filter")?.focus();
  } else if (
    e.key === "Backspace" &&
    document.activeElement?.tagName !== "INPUT"
  ) {
    window.location.href = "/";
  }
}

let groupedPosts = $derived(
  Object.entries(
    posts
      .filter(
        (p) =>
          filter === "" || p.title.toLowerCase().includes(filter.toLowerCase()),
      )
      .reduce(
        (acc, post) => {
          if (!acc[post.category]) acc[post.category] = [];
          acc[post.category].push(post);
          return acc;
        },
        {} as Record<string, typeof posts>,
      ),
  ),
);

setContext("posts", { posts });
</script>

<svelte:head>
  <title>posts - ./crscutas</title>
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<div class="min-h-screen bg-[#0d0d0d] font-mono flex">
  <aside class="w-64 h-screen sticky top-0 p-8 border-r border-[#2a2a2a]">
    <div class="text-xl tracking-tighter text-[#e8dfc7] mb-8">
      <a href="/" class="text-[#d5b87c] hover:underline">← home</a>
    </div>

    <input
      id="filter"
      type="text"
      placeholder="filter..."
      bind:value={filter}
      class="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded px-2 py-1 text-sm text-[#888] focus:outline-none focus:border-[#d5b87c] mb-4"
    />

    {#each groupedPosts as [category, categoryPosts]}
      <div class="mb-4">
        <h2 class="text-[#666] text-sm uppercase tracking-wider mb-2"
          >{category}</h2
        >
        <ul class="space-y-2">
          {#each categoryPosts as post (post.slug)}
            <li>
              <a
                href="/posts/{post.category}/{post.slug}"
                class="block {post.slug === currentSlug
                  ? 'text-[#d5b87c]'
                  : 'text-[#888] hover:text-[#d5b87c]'}"
              >
                {post.title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </aside>

  <main class="flex-1 p-8">
    {@render children()}
  </main>
</div>
