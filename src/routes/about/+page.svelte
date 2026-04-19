<script lang="ts">
</script>

<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />


<svelte:head>
  <title>about - ./crscutas</title>
</svelte:head>

<svelte:window onkeydown={(e) => { if (e.key === 'Backspace' && (e.target as HTMLElement).tagName !== 'INPUT') window.location.href = '/'; }} />

<div class="min-h-screen bg-[#0d0d0d] font-mono p-8 flex justify-center">
  <div class="flex flex-col gap-y-10 max-w-2xl w-full">
    <a href="/" class="text-[#d5b87c] hover:underline">← back</a>
    
    <section>
      <h1>About</h1>
      <p class="text-lg leading-relaxed">
        Resumes are nice but limited. I also have not done enough public projects to fill a portfolio. So blogsite site it is!
      </p>
    </section>

    <section>
      <h2>Links</h2>
      <ul class="flex flex-col gap-x-8 gap-y-2">
        <li class="flex items-baseline gap-3 py-1">
          <i style="color:white" class="devicon-github-original"></i>
          <a href="https://github.com/crscutas0" target="_blank">github.com/crscutas0</a>
        </li>
        <li class="flex items-baseline gap-3 py-1">
           <i style="color:white" class="devicon-linkedin-plain"></i>
          <a href="https://www.linkedin.com/in/cristopher-cutas-352046a7/" target="_blank">linkedin.com/in/cristopher-cutas</a>
        </li>
      </ul>
    </section>

    <section>
      <h2>Hey! by the way...</h2>
      <p>Nothing I say here are my own thoughts and is no way reflective of the views of my employers.</p>
    </section>

    <footer class="mt-10 pt-8 border-t border-[#1a1a1a]">
      <p class="text-[#444] text-sm">
        Last updated:  April 2026
      </p>
    </footer>
  </div>
</div>
