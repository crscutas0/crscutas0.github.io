<script lang="ts">
import { devPosts as posts } from "$lib/posts";
import CategoryIndex from "$lib/components/CategoryIndex.svelte";
</script>

<CategoryIndex {posts} category="dev" />