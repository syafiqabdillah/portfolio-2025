<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { theme } from "../lib/theme.svelte";

  let { children } = $props();
</script>

<main
  class={twMerge(
    "min-h-screen select-none",
    !theme.isDark ? "bg-zinc-200 text-zinc-700" : "bg-zinc-700 text-zinc-200"
  )}
>
  {@render children?.()}
  <div class="fixed top-2 right-2">
    <button
      onclick={theme.toggleTheme}
      class="border-[1px] flex items-center justify-center h-[40px] w-[40px] border-solid border-zinc-200 rounded-full"
    >
      <span class="text-[38px] pb-1">
        {#if !theme.isDark}
          🌕
        {:else}
          🌑
        {/if}
      </span>
    </button>
  </div>
</main>
