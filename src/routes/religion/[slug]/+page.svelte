<script lang="ts">
let { data } = $props();
</script>

<svelte:head>
  <title>{data.title} - ./crscutas</title>
</svelte:head>

<article class="prose prose-invert max-w-2xl">
  <p class="text-[#444] text-sm">{data.date}</p>
  <data.content />
</article>
