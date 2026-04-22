<script lang="ts">
import { religionPosts as posts } from "$lib/posts";
const category = "religion";
</script>

<svelte:head>
  <title>DevPosts - ./crscutas</title>
</svelte:head>

<article class="prose prose-invert prose-lg max-w-2xl">
  <h1 class="text-[#e8dfc7] text-4xl tracking-tight">/{category}</h1>

  {#if posts.length > 0}
    <ul class="mt-8 space-y-4">
      {#each posts as post (post.slug)}
        <li>
          <a
            href="/{category}/{post.slug}"
            class="text-[#888] hover:text-[#d5b87c] transition-colors"
          >
            {post.title}
          </a>
        </li>
      {/each}
    </ul>
  {:else}
    <p class="text-[#444] mt-8">No posts yet.</p>
  {/if}

  <div class="mt-12 pt-8 border-t border-[#2a2a2a]">
    <a href="/" class="text-[#444] hover:text-[#d5b87c]">← home</a>
  </div>
</article>
