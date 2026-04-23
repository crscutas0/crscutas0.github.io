<script lang="ts">
import { page as pageState } from "$app/state";
import type { Post } from "$lib/posts";

type GroupedPosts = [string, Post[]][];

let { posts, category, children } = $props<{
  posts: Post[];
  category: string;
  children: import("svelte").Snippet;
}>();

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
        (p: Post) =>
          filter === "" || p.title.toLowerCase().includes(filter.toLowerCase()),
      )
      .reduce(
        (acc: Record<string, Post[]>, post: Post) => {
          if (!acc[post.category]) acc[post.category] = [];
          acc[post.category].push(post);
          return acc;
        },
        {} as Record<string, Post[]>,
      ),
  ),
) as GroupedPosts;
</script>

<svelte:head>
  <title>{category} - ./crscutas</title>
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<div class="min-h-screen bg-[#0d0d0d] font-mono flex">
  <aside class="w-80 h-screen sticky top-0 p-8 border-r border-[#2a2a2a]">
    <div class="text-xl tracking-tighter text-[#e8dfc7] mb-8">
      <a href="/" class="text-[#d5b87c] hover:underline">← home</a>
    </div>

    <input
      id="filter"
      type="text"
      placeholder="filter..."
      bind:value={filter}
      class="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded px-2 py-1 text-sm text-[#888] focus:outline-none focus:border-[#d5b87c]"
    />

    {#each groupedPosts as [group, groupPosts]}
      <div class="mb-4">
        <h3>{group}</h3>
        <ul class="space-y-2">
          {#each groupPosts as post (post.slug)}
            <li>
              <a
                href="/{category}/{post.slug}"
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

