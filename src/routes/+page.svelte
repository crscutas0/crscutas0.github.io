<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let selectedIndex = 0;
  let menuEl: HTMLDivElement;
  let navVisible = true;

  onMount(() => {
    menuEl?.focus();
  });

  const menuItems = [
    { label: 'about', href: '/about' },
    { label: 'posts', href: '/posts' },
    { label: 'top things', href: '/top-things' },
  ];

  function cycleNext() {
    selectedIndex = (selectedIndex + 1) % menuItems.length;
  }

  function cyclePrev() {
    selectedIndex = (selectedIndex - 1 + menuItems.length) % menuItems.length;
  }

  function selectCurrent() {
    const item = menuItems[selectedIndex];
    if (item?.href) {
      navVisible = false;
      setTimeout(() => {
        window.location.href = item.href;
      }, 250);
    }
  }

  function cycle(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowDown':
      case 'Tab':
        e.preventDefault();
        cycleNext();
        break;

      case 'ArrowUp':
        e.preventDefault();
        cyclePrev();
        break;

      case 'Enter':
        e.preventDefault();
        selectCurrent();
        break;

      case 'Escape':
        selectedIndex = 0;
        break;
    }
  }
</script>

<svelte:head>
  <title>./crscutas</title>
</svelte:head>

<div class="min-h-screen font-mono flex flex-col p-8">
  <div
    role="menu"
    tabindex="0"
    class="flex-1 focus:outline-none"
    bind:this={menuEl}
    on:keydown={cycle}>
    <div class="grid grid-cols-[auto_1fr] gap-y-2">
      <div class="text-5xl tracking-tighter text-[#e8dfc7] pr-10">
        <span class="text-[#d5b87c]">❯</span>
        ./crscutas
      </div>

      <div class="text-5xl tracking-tighter text-[#333]">
        {menuItems[selectedIndex].label}
      </div>

      <div></div>

      {#if navVisible}
        <nav
          class="flex flex-col text-5xl tracking-tighter text-[#555] mt-4"
          out:fade={{ duration: 200 }}>
          {#each menuItems as item, index}
            <a
              href={item.href}
              class="group transition-all duration-200 flex items-center pl-8 py-2
            {index === selectedIndex
                ? 'text-[#d5b87c] border-l-4 border-[#d5b87c]'
                : 'text-[#444] border-l-4 border-[#2a2a2a]'}"
              on:click={(e) => {
                e.preventDefault();
                selectedIndex = index;
                navVisible = false;
                setTimeout(() => {
                  window.location.href = item.href;
                }, 500);
              }}>
              <span class="flex-1">{item.label}</span>
            </a>
          {/each}
        </nav>
      {/if}
    </div>
  </div>

  <div class="text-sm text-[#666] flex items-center gap-2 font-light">
    <div class="flex items-center gap-1.5">
      <kbd class="px-2 py-1 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-xs text-[#888]">
        ↑
      </kbd>
      <kbd class="px-2 py-1 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-xs text-[#888]">
        ↓
      </kbd>
      <span class="text-[#444]">or</span>
      <kbd class="px-2 py-1 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-xs text-[#888]">
        Tab
      </kbd>
    </div>
    <span class="mx-2 text-[#333]">•</span>
    <span>
      Press <kbd class="px-2 py-1 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-xs text-[#888]">
        Enter
      </kbd>
      to open
    </span>
  </div>
</div>

<style>
  :global(body) {
    font-family:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  kbd {
    font-family: inherit;
  }
</style>
