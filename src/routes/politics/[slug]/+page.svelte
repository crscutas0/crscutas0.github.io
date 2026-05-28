<script lang="ts">
import CategoryPost from "$lib/components/CategoryPost.svelte";
let { data } = $props();
</script>

<CategoryPost data={data} />
