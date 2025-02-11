<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { theme } from "../lib/theme.svelte";

  const menu = [
    { name: "About", id: "about" },
    { name: "Personal Projects", id: "projects" },
    { name: "Experiences", id: "experience" },
    { name: "Skills", id: "skill" },
  ];
</script>

<div
  class={twMerge(
    "fixed bottom-0 left-0 right-0 flex justify-center",
    theme.isDark ? "bg-zinc-700 text-zinc-300" : "bg-zinc-200"
  )}
>
  <div class="flex justify-around max-w-[400px] items-stretch gap-2 flex-wrap">
    {#each menu as nav}
      <a
        href={`#${nav.id}`}
        class="hover:bg-zinc-300 hover:text-zinc-700 hover:rounded-xl hover:-translate-y-2 transition-all duration-500 p-3"
        >{nav.name}</a
      >
    {/each}
  </div>
</div>
