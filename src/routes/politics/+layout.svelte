<script lang="ts">
import { politicsPosts as posts } from "$lib/posts";
import CategoryLayout from "$lib/components/CategoryLayout.svelte";

let { children } = $props();
</script>

<CategoryLayout posts={posts} category="politics">
  {@render children()}
</CategoryLayout>

