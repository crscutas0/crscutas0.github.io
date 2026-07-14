<script>
import { onMount, tick } from "svelte";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import java from "highlight.js/lib/languages/java";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("java", java);
hljs.registerLanguage("python", python);

let { code = "", language = "plaintext" } = $props();

/** @type {HTMLElement} */
let codeEl;

/**
 * @param {string} lang
 * @returns {Promise<boolean>}
 */
async function loadLanguage(lang) {
  try {
    const mod = await import(
      /* @vite-ignore */ `highlight.js/lib/languages/${lang}`
    );
    hljs.registerLanguage(lang, mod.default);
    return true;
  } catch {
    return false;
  }
}

async function highlight() {
  if (!codeEl) return;

  let lang = language;

  if (lang !== "plaintext" && !hljs.getLanguage(lang)) {
    const loaded = await loadLanguage(lang);
    if (!loaded) lang = "javascript";
  }

  const result =
    lang === "plaintext"
      ? hljs.highlight(code, { language: "javascript" })
      : hljs.highlight(code, { language: lang });

  codeEl.innerHTML = result.value;
}

onMount(async () => {
  await tick();
  await highlight();
});

$effect(() => {
  code;
  language;

  highlight();
});
</script>

<pre>
  <code bind:this={codeEl}></code>
</pre>
