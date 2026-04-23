<script lang="ts">
import { othersPosts as posts } from "$lib/posts";
import CategoryLayout from "$lib/components/CategoryLayout.svelte";

let { children } = $props();
</script>

<CategoryLayout {posts} category="others">
  {@render children()}
</CategoryLayout>