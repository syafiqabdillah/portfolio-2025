<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { twMerge } from "tailwind-merge";
  import { profile } from "../constants";
  import { theme } from "../lib/theme.svelte";
  import Container from "./Container.svelte";

  let accent = {
    syafiq: false,
    abdillah: false,
    umarghanis: false,
  };

  const toggleUseAccent = (key: "syafiq" | "abdillah" | "umarghanis") => {
    accent[key] = !accent[key];
  };

  const ioSyafiq = new IntersectionObserver(
    (entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      toggleUseAccent("syafiq");
    },
    {
      threshold: 0.01,
    }
  );

  const ioAbdillah = new IntersectionObserver(
    (entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      toggleUseAccent("abdillah");
    },
    {
      threshold: 0.03,
    }
  );

  const ioUmarghanis = new IntersectionObserver(
    (entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      toggleUseAccent("umarghanis");
    },
    {
      threshold: 0.06,
    }
  );

  onMount(() => {
    const observed = document.getElementById("projects");
    console.log("observed", observed);
    if (observed) {
      ioSyafiq.observe(observed);
      ioAbdillah.observe(observed);
      ioUmarghanis.observe(observed);
    }
  });

  onDestroy(() => {
    ioSyafiq.disconnect();
    ioAbdillah.disconnect();
    ioUmarghanis.disconnect();
  });
</script>

<Container id="about" className="items-start px-4 lg:items-center relative">
  <h1>
    <span
      class={twMerge(
        "text-3xl transition-colors duration-500",
        accent.syafiq ? "text-teal-300" : ""
      )}
    >
      Syafiq
    </span>
    <span
      class={twMerge(
        "text-3xl transition-colors duration-500",
        accent.abdillah ? "text-teal-300" : ""
      )}
    >
      Abdillah
    </span>
    <span
      class={twMerge(
        "text-3xl transition-colors duration-500",
        accent.umarghanis ? "text-teal-300" : ""
      )}
    >
      Umarghanis
    </span>
  </h1>
  <div
    class={twMerge(
      "text-xl font-semibold transition-colors duration-500",
      theme.isDark ? "text-zinc-400" : "text-zinc-700"
    )}
  >
    {profile.title}
  </div>
  <a
    href="mailto:${profile.email}"
    class={twMerge("mt-4", theme.isDark ? "text-blue-300" : "text-blue-700")}
  >
    {profile.email}
  </a>
</Container>
