<script lang="ts">
let { data } = $props();
</script>

<svelte:head>
  <title>{data.title} - ./crscutas</title>
  <meta name="description" content={data.description} />
  <meta property="og:title" content="{data.title} - ./crscutas" />
  <meta property="og:description" content={data.description} />
</svelte:head>

<article class="prose prose-invert max-w-2xl">
  <p class="text-[#444] text-sm">{data.date}</p>
  <data.content />
</article>