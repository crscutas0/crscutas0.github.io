<script lang="ts">
</script>

<svelte:head>
  <title>about - ./crscutas</title>
</svelte:head>

<svelte:window onkeydown={(e) => { if (e.key === 'Backspace' && (e.target as HTMLElement).tagName !== 'INPUT') window.location.href = '/'; }} />

<div class="min-h-screen bg-[#0d0d0d] font-mono p-8 flex justify-center">
  <article class="max-w-2xl w-full">
    <a href="/" class="text-[#d5b87c] hover:underline">← back</a>
    
    <h1 class="text-[#e8dfc7] text-4xl tracking-tight mt-8 mb-8">about</h1>
    
    <section class="space-y-6">
      <p class="text-[#888] text-lg leading-relaxed">
        A personal site where I write about things I find interesting — programming, 
        design, and whatever else catches my attention.
      </p>

      <div class="border-l-4 border-[#2a2a2a] pl-6 py-2">
        <h2 class="text-[#e8dfc7] text-xl mb-3">what this is</h2>
        <p class="text-[#666] leading-relaxed">
          Built with Svelte, because I wanted something simple and fast. 
          No databases, no frameworks to maintain — just static pages that load instantly.
        </p>
      </div>

      <div class="border-l-4 border-[#2a2a2a] pl-6 py-2">
        <h2 class="text-[#e8dfc7] text-xl mb-3">who I am</h2>
        <p class="text-[#666] leading-relaxed">
          Developer. Problem solver. I like building things that work well and feel right.
        </p>
      </div>
    </section>

    <footer class="mt-16 pt-8 border-t border-[#1a1a1a]">
      <p class="text-[#444] text-sm">
        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </p>
    </footer>
  </article>
</div>