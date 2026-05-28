<script lang="ts">
import { othersPosts as posts } from "$lib/posts";
import CategoryIndex from "$lib/components/CategoryIndex.svelte";
</script>

<CategoryIndex posts={posts} category="others" />

