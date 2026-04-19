<script lang="ts">
  const things = [
    {
      category: 'tools',
      items: [
        { name: 'vim', description: 'text editor' },
        { name: 'tmux', description: 'terminal multiplexer' },
        { name: 'svelte', description: 'framework' },
        { name: 'rust', description: 'language' },
        { name: 'neovim', description: 'editor' },
        { name: 'alacritty', description: 'terminal' },
        { name: 'fish', description: 'shell' },
        { name: 'btop', description: 'system monitor' }
      ]
    },
    {
      category: 'web',
      items: [
        { name: 'hacker news', description: 'news' },
        { name: 'youtube', description: 'videos' },
        { name: ' Mard', description: 'wiki' },
        { name: 'github', description: 'code' }
      ]
    },
    {
      category: 'games',
      items: [
        { name: 'civ iv', description: 'strategy' },
        { name: 'factorio', description: 'automation' },
        { name: 'rimworld', description: 'simulation' }
      ]
    }
  ];
</script>

<svelte:head>
  <title>top things - ./crscutas</title>
</svelte:head>

<svelte:window onkeydown={(e) => { if (e.key === 'Backspace' && (e.target as HTMLElement).tagName !== 'INPUT') window.location.href = '/'; }} />

<div class="min-h-screen bg-[#0d0d0d] font-mono p-8 flex justify-center">
  <article class="max-w-2xl w-full">
    <a href="/" class="text-[#d5b87c] hover:underline">← back</a>
    
    <h1 class="text-[#e8dfc7] text-4xl tracking-tight mt-8 mb-8">top things</h1>
    
    <div class="space-y-10">
      {#each things as section}
        <section>
          <h2 class="text-[#e8dfc7] text-xl mb-4 capitalize">{section.category}</h2>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
            {#each section.items as item}
              <li class="flex items-baseline gap-3 py-1">
                <span class="text-[#d5b87c]">❯</span>
                <span class="text-[#888]">{item.name}</span>
                <span class="text-[#444] text-sm">// {item.description}</span>
              </li>
            {/each}
          </ul>
        </section>
      {/each}
    </div>
  </article>
</div>
