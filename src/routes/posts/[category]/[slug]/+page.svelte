<script lang="ts">
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.title} - ./crscutas</title>
  <link href="https://cdn.jsdelivr.net/npm/prismjs/themes/prism-tomorrow.css" rel="stylesheet" />
</svelte:head>

<article class="max-w-2xl">
  <p class="text-[#444] text-sm mb-8">{data.date}</p>
  <data.content />
</article>
