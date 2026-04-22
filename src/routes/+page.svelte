<script lang="ts">
import { onMount } from "svelte";

let mainIndex = 0;
let categoryIndex = 0;
let menuEl: HTMLDivElement;
let currentMenu: "main" | "posts" = "main";

onMount(() => {
  menuEl?.focus();
});

const postCategories = [
  { label: "dev", href: "/dev" },
  { label: "religion", href: "/religion" },
  // { label: "politics", href: "/politics" },
  // { label: "others", href: "/others" },
];

const menuItems = [
  { label: "about", href: "/about" },
  { label: "posts" },
  { label: "top things", href: "/top-things" },
];

function cycleNext() {
  if (currentMenu === "posts") {
    categoryIndex = (categoryIndex + 1) % postCategories.length;
  } else {
    mainIndex = (mainIndex + 1) % menuItems.length;
  }
}

function cyclePrev() {
  if (currentMenu === "posts") {
    categoryIndex =
      (categoryIndex - 1 + postCategories.length) % postCategories.length;
  } else {
    mainIndex = (mainIndex - 1 + menuItems.length) % menuItems.length;
  }
}

function selectCurrent() {
  if (currentMenu === "posts") {
    const item = postCategories[categoryIndex];
    if (item?.href) {
      currentMenu = "main";
      setTimeout(() => {
        window.location.href = item.href;
      }, 200);
    }
  } else {
    const item = menuItems[mainIndex];
    if (item.label === "posts") {
      currentMenu = "posts";
    } else if (item.href) {
      setTimeout(() => {
        window.location.href = item.href;
      }, 200);
    }
  }
}

function cycle(e: KeyboardEvent) {
  switch (e.key) {
    case "ArrowDown":
    case "Tab":
      e.preventDefault();
      cycleNext();
      break;
    case "ArrowUp":
      e.preventDefault();
      cyclePrev();
      break;
    case "Enter":
      e.preventDefault();
      selectCurrent();
      break;
    case "Backspace":
      if (currentMenu === "posts") {
        e.preventDefault();
        currentMenu = "main";
        mainIndex = 1;
      }
      break;
  }
}

function handleMenuClick(index: number) {
  const item = menuItems[index];
  mainIndex = index;
  if (item.label === "posts") {
    currentMenu = "posts";
    mainIndex = 0;
  } else if (item.href) {
    setTimeout(() => {
      window.location.href = item.href;
    }, 200);
  }
}

function handleCategoryClick(category: (typeof postCategories)[number]) {
  currentMenu = "main";
  setTimeout(() => {
    window.location.href = category.href;
  }, 200);
}

const getClasses = (index: number) => {
  const active = index === mainIndex;
  const isPosts = currentMenu === "posts";

  if (isPosts) {
    return active
      ? "text-neutral-300 border-neutral-500"
      : "text-neutral-600 border-neutral-800";
  }

  return active
    ? "text-[#d5b87c] border-[#d5b87c]"
    : "text-neutral-700 border-neutral-900";
};
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
    on:keydown={cycle}
  >
    <div class="grid grid-cols-[auto_auto_1fr] gap-y-2 space-x-15">
      <div class="text-5xl tracking-tighter text-[#e8dfc7]">
        <span class="text-[#d5b87c]">❯</span>
        ./crscutas
      </div>

      <div class="text-5xl tracking-tighter text-[#333]">
        {menuItems[mainIndex].label}
      </div>

      <div class="text-5xl tracking-tighter text-[#333]">
        {currentMenu === "posts" ? postCategories[categoryIndex].label : ""}
      </div>

      <div></div>

      <div>
        {#if currentMenu !== "posts"}
          <nav class="mt-4 flex flex-col text-5xl tracking-tighter">
            {#each menuItems as item, index}
              <a
                href={item.href}
                class="group flex items-center border-l-4 py-2 pl-8 transition-all duration-200
                {getClasses(index)}"
                on:click|preventDefault={() => handleMenuClick(index)}
              >
                <span class="flex-1">{item.label}</span>
              </a>
            {/each}
          </nav>
        {/if}
      </div>
      {#if currentMenu === "posts"}
        <nav class="flex flex-col text-5xl tracking-tighter text-[#555] mt-4">
          {#each postCategories as category, index}
            <a
              href={category.href}
              class="group transition-all duration-200 flex items-center pl-8 py-2
            {index === categoryIndex
                ? 'text-[#d5b87c] border-l-4 border-[#d5b87c]'
                : 'text-[#444] border-l-4 border-[#2a2a2a]'}"
              on:click={(e) => {
                e.preventDefault();
                handleCategoryClick(category);
              }}
            >
              <span class="flex-1">{category.label}</span>
            </a>
          {/each}
        </nav>
      {/if}
    </div>
  </div>

  <div class="text-sm text-[#666] flex items-center gap-2 font-light">
    <div class="flex items-center gap-1.5">
      <kbd
        class="px-2 py-1 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-xs text-[#888]"
        >↑</kbd
      >
      <kbd
        class="px-2 py-1 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-xs text-[#888]"
        >↓</kbd
      >
      <span class="text-[#444]">or</span>
      <kbd
        class="px-2 py-1 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-xs text-[#888]"
        >Tab</kbd
      >
    </div>
    <span class="mx-2 text-[#333]">•</span>
    <span>
      <kbd
        class="px-2 py-1 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-xs text-[#888]"
        >Enter</kbd
      >
      to select
    </span>
    {#if currentMenu === "posts"}
      <span class="mx-2 text-[#333]">•</span>
      <span>
        <kbd
          class="px-2 py-1 bg-[#2a2a2a] border border-[#3a3a3a] rounded text-xs text-[#888]"
          >Backspace</kbd
        >
        to go back
      </span>
    {/if}
  </div>
</div>

