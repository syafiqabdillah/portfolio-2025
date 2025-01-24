<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { theme } from "../lib/theme.svelte";

  const menu = [
    { name: "Myself", id: "about" },
    { name: "Skills", id: "skill" },
    { name: "Experiences", id: "experience" },
    { name: "Personal Projects", id: "projects" },
  ];
</script>

<div
  class={twMerge(
    "fixed bottom-0 left-0 right-0 flex justify-around p-4 flex-wrap gap-2",
    theme.isDark ? "bg-zinc-700 text-zinc-300" : "bg-zinc-200"
  )}
>
  {#each menu as nav}
    <a href={`#${nav.id}`}>{nav.name}</a>
  {/each}
</div>
