<script>
  import { twMerge } from "tailwind-merge";
  import { profile } from "../constants";
  import { theme } from "../lib/theme.svelte";
  import Container from "./Container.svelte";
</script>

<Container id="about" className="items-start px-4 lg:items-center">
  <h1 class={twMerge("text-3xl")}>
    {profile.name}
  </h1>
  <div
    class={twMerge(
      "text-xl font-semibold",
      theme.isDark ? "text-zinc-400" : "text-zinc-700"
    )}
  >
    {profile.title}
  </div>
  <a
    href="mailto:${profile.email}"
    class={twMerge("mt-2", theme.isDark ? "text-blue-300" : "text-blue-700")}
  >
    {profile.email}
  </a>
</Container>
