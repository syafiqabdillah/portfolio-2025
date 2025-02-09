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

  const getTransform = (id: number) => {
    return isEven(id) ? `translate-x-[20px]` : `translate-x-[-20px]`;
  };

  const createIO = () => {
    return new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const doc = entry.target as HTMLElement;
        const id = Number(doc.id.split("-")[1]);
        const img = doc.querySelector("img");
        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
          img?.classList.add(getTransform(id), "rounded-xl");
        }
        if (
          entry.intersectionRatio <= 0 &&
          img?.classList.contains(getTransform(id))
        ) {
          img?.classList.remove(getTransform(id), "rounded-xl");
        }
      },
      {
        threshold: 1,
      }
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
  <h2 class="mb-[25px]">Personal Projects</h2>
  {#each projects as project, index}
    <div
      id={`project-${index}`}
      class="mb-[50px] flex flex-col mx-4 w-full max-w-[700px] gap-3 px-4"
    >
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
        <img
          class={twMerge(
            `mt-[10px] transition-all duration-700 hover:rounded-xl`
          )}
          src={project.src}
          alt={project.name}
        />
      {/if}
    </div>
  {/each}
</Container>
