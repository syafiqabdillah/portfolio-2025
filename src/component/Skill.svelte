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
</script>

<Container id="skill">
  <h2>Skills</h2>
  <div class="flex flex-wrap gap-4 px-4 justify-center max-w-2xl">
    {#each skills as skill}
      <div
        class={twMerge(
          "py-2 px-3 rounded-md",
          theme.isDark
            ? "text-zinc-700 bg-zinc-200 hover:text-zinc-800"
            : "text-zinc-300 bg-zinc-500"
        )}
      >
        {skill}
      </div>
    {/each}
  </div>
</Container>
