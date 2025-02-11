<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { twMerge } from "tailwind-merge";
  import { profile, socials } from "../constants";
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
      threshold: 0.02,
    }
  );

  const ioUmarghanis = new IntersectionObserver(
    (entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      toggleUseAccent("umarghanis");
    },
    {
      threshold: 0.03,
    }
  );

  onMount(() => {
    const observed = document.getElementById("projects");
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
        accent.syafiq ? "text-emerald-500" : ""
      )}
    >
      Syafiq
    </span>
    <span
      class={twMerge(
        "text-3xl transition-colors duration-500",
        accent.abdillah ? "text-emerald-500" : ""
      )}
    >
      Abdillah
    </span>
    <span
      class={twMerge(
        "text-3xl transition-colors duration-500",
        accent.umarghanis ? "text-emerald-500" : ""
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

  <section class="flex gap-3 mt-3">
    <a
      href="mailto:${profile.email}"
      class={twMerge("", theme.isDark ? "text-blue-300" : "text-blue-700")}
    >
      Email
    </a>
    {#each socials as social}
      <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        class={twMerge("", theme.isDark ? "text-blue-300" : "text-blue-700")}
      >
        {social.text}
      </a>
    {/each}
  </section>
</Container>
