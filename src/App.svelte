<script lang="ts">
  import About from "./component/About.svelte";
  import Experience from "./component/Experience.svelte";
  import NavBottom from "./component/NavBottom.svelte";
  import Project from "./component/Project.svelte";
  import Skill from "./component/Skill.svelte";
  import ThemeProvider from "./component/ThemeProvider.svelte";
</script>

<ThemeProvider>
  <About />
  <Skill />
  <Experience />
  <Project />
  <NavBottom />
</ThemeProvider>
