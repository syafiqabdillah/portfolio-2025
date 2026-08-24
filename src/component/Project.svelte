<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { twMerge } from "tailwind-merge";
  import { projects } from "../constants";
  import { theme } from "../lib/theme.svelte";
  import Container from "./Container.svelte";

  const isEven = (num: number) => {
    return num % 2 === 0;
  };

  const ios: IntersectionObserver[] = [];

  let currentlyLit: null | number = $state(null);

  const createIO = () => {
    return new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const doc = entry.target as HTMLElement;
        const id = Number(doc.id.split("-")[1]);
        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
          currentlyLit = id;
        }
      },
      {
        threshold: 1,
      },
    );
  };

  onMount(() => {
    projects.forEach((_, index) => {
      const io = createIO();
      const observed = document.getElementById(`project-${index}`);
      if (observed) {
        io.observe(observed);
        ios.push(io);
      }
    });
  });

  onDestroy(() => {
    ios.forEach((io) => io.disconnect());
  });
</script>

<Container id="projects">
  <h2 class="mb-[25px] text-2xl">Personal Projects</h2>
  {#each projects as project, index}
    <div
      id={`project-${index}`}
      class="mb-[50px] flex flex-col mx-4 w-full max-w-[700px] gap-3 px-4"
    >
      <div
        class={twMerge(
          "font-bold text-lg project-name transition-colors duration-500 ease-in-out",
          currentlyLit === index ? "text-emerald-500" : "",
        )}
      >
        {project.name}
      </div>
      <div class="text-md">
        {@html project.desc}
      </div>
      <div class="flex gap-2 flex-wrap">
        {#each project.tech as tech}
          <div
            class={twMerge(
              "text-xs flex items-center justify-center rounded-full text-nowrap",
              theme.isDark ? "border-zinc-600" : "border-zinc-100",
            )}
          >
            {tech}
          </div>
        {/each}
      </div>
      {#if project.src}
        <img
          class={twMerge(
            `mt-[10px] transition-all duration-700 hover:rounded-xl`,
            currentlyLit === index ? "translate-x-[3px] rounded-xl" : "",
          )}
          src={project.src}
          alt={project.name}
        />
      {/if}
    </div>
  {/each}
</Container>
