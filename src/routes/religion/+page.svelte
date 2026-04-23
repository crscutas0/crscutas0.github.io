<script lang="ts">
import { religionPosts as posts } from "$lib/posts";
import CategoryIndex from "$lib/components/CategoryIndex.svelte";
</script>

<CategoryIndex {posts} category="religion" />