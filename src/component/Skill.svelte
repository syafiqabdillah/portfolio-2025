<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { projects } from "../constants";
  import { theme } from "../lib/theme.svelte";
  import Container from "./Container.svelte";
  const skills: string[] = [];
  for (let i = 0; i < projects.length; i++) {
    for (let j = 0; j < projects[i].tech.length; j++) {
      if (!skills.includes(projects[i].tech[j])) {
        skills.push(projects[i].tech[j]);
      }
    }
  }

  const openLink = (query: string) => {
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  };
</script>

<Container id="skill">
  <h2>Skills</h2>
  <div class="flex flex-wrap gap-4 px-4 justify-center max-w-2xl">
    {#each skills as skill}
      <button
        class={twMerge(
          "py-2 px-3 rounded-md hover:scale-[1.5] transition-all cursor-pointer",
          theme.isDark
            ? "text-zinc-700 bg-zinc-200 hover:text-zinc-800 hover:font-semibold"
            : "text-zinc-300 bg-zinc-500"
        )}
        onclick={() => openLink(skill)}
      >
        {skill}
      </button>
    {/each}
  </div>
</Container>
