<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { theme } from "../lib/theme.svelte";

  let { children } = $props();
</script>

<main
  class={twMerge(
    "min-h-screen",
    !theme.isDark ? "bg-zinc-200 text-zinc-700" : "bg-zinc-700 text-zinc-200"
  )}
>
  {@render children?.()}
  <div class="fixed top-2 right-2">
    <button onclick={theme.toggleTheme} class="text-5xl">
      {#if !theme.isDark}
        🌕
      {:else}
        🌑
      {/if}
    </button>
  </div>
</main>
