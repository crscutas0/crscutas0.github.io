<script lang="ts">
import { politicsPosts as posts } from "$lib/posts";
import CategoryIndex from "$lib/components/CategoryIndex.svelte";
</script>

<CategoryIndex posts={posts} category="politics" />

