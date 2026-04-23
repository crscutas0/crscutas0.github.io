<script lang="ts">
import { religionPosts as posts } from "$lib/posts";
import CategoryLayout from "$lib/components/CategoryLayout.svelte";

let { children } = $props();
</script>

<CategoryLayout {posts} category="religion">
  {@render children()}
</CategoryLayout>