<script lang="ts">
  import { projects } from "../constants";
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
  <div class="flex flex-wrap gap-4 px-4 justify-center">
    {#each skills as skill}
      <div
        class="bg-slate-200 hover:bg-slate-300 py-2 px-3 rounded-md hover:scale-[1.3] transition-all"
      >
        {skill}
      </div>
    {/each}
  </div>
</Container>
