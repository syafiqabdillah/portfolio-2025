<script>
  import { projects } from "../constants";
  import Container from "./Container.svelte";
</script>

<Container id="projects">
  <h2>Projects</h2>
  {#each projects as project}
    <div>{project.name}</div>
  {/each}
</Container>
