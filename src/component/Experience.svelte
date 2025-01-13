<script>
  import { experiences } from "../constants";
  import Container from "./Container.svelte";
</script>

<Container id="experience">
  <h2 class="mb-4" id="experience">Experiences</h2>
  <div class="flex flex-col gap-4">
    {#each experiences as { name, timeline, description }}
      <div class="flex flex-col justify-between">
        <div>{name}</div>
        <div>{timeline}</div>
      </div>
    {/each}
  </div>
</Container>
