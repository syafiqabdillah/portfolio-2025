<script>
  import { twMerge } from "tailwind-merge";
  import { projects } from "../constants";
  import { theme } from "../lib/theme.svelte";
  import Container from "./Container.svelte";
</script>

<Container id="projects">
  <h2 class="mb-[25px]">Personal Projects</h2>
  {#each projects as project}
    <div class="mb-[50px] flex flex-col mx-4 w-full max-w-[700px] gap-3 px-4">
      <div class="font-bold">
        {project.name}
      </div>
      <div class="text-xs tracking-wide leading-5">
        {@html project.desc}
      </div>
      <div class="flex gap-2 flex-wrap">
        {#each project.tech as tech}
          <div
            class={twMerge(
              "px-2 py-1 text-xs border border-solid flex items-center justify-center rounded-full text-nowrap",
              theme.isDark ? "border-zinc-600" : "border-zinc-400"
            )}
          >
            {tech}
          </div>
        {/each}
      </div>
      {#if project.src}
        <img class="mt-[10px]" src={project.src} alt={project.name} />
      {/if}
    </div>
  {/each}
</Container>
