<script lang="ts">
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.title} - ./crscutas</title>
</svelte:head>

<article class="max-w-2xl">
  <h1 class="text-[#e8dfc7] text-4xl tracking-tight capitalize mb-2">{data.title}</h1>
  <p class="text-[#444] text-sm mb-8">{data.date}</p>
  <data.content />
</article>
