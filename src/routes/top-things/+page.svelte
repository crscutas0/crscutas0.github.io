<script lang="ts">
  const things = [
    {
      category: 'Tools',
      items: [
        { name: 'Neovim', description: 'build your own text editor' },
        { name: 'Intellij', description: 'probably anything from Jetbrains' },
        { name: 'starship-rs', description: 'Make shell nicer' },
        { name: 'superfile', description: '' },
        { name: 'Ghostty | Konsole', description: '' },
      ],
    },
    {
      category: 'Games',
      items: [
        { name: 'Overwatch', description: 'Since season ow1:s2' },
        { name: 'Dragon Age', description: '' },
        { name: 'Mass Effect', description: 'The trilogy' },
        { name: 'Transistor', description: 'Turn base re-imagined' },
        { name: 'Summoner', description: 'Sahagani' },
      ],
    },
    {
      category: 'Gadgets',
      items: [
        { name: 'ElecFox Inky75', description: 'aluminum or nothing' },
        { name: 'G304', description: 'Charged for months' },
        { name: 'Letshuoer S08', description: '' },
      ],
    },
  ];
</script>

<svelte:head>
  <title>top things - ./crscutas</title>
</svelte:head>

<svelte:window
  onkeydown={(e) => {
    if (e.key === 'Backspace' && (e.target as HTMLElement).tagName !== 'INPUT')
      window.location.href = '/';
  }} />

<div class="min-h-screen bg-[#0d0d0d] font-mono p-8 flex justify-center">
  <article class="max-w-4xl w-full">
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
                <span class="text-[#444] text-sm">
                  {#if item.description}
                    // {item.description}
                  {/if}
                </span>
              </li>
            {/each}
          </ul>
        </section>
      {/each}
    </div>
  </article>
</div>
