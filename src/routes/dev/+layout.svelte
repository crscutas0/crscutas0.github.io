<script lang="ts">
import { devPosts as posts } from "$lib/posts";
import CategoryLayout from "$lib/components/CategoryLayout.svelte";

let { children } = $props();
</script>

<CategoryLayout posts={posts} category="dev">
  {@render children()}
</CategoryLayout>

