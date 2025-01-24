<script lang="ts">
  import { twMerge } from "tailwind-merge";

  const { id, children, className = "" } = $props();
</script>

<section
  class={twMerge(
    "min-h-screen flex flex-col justify-center items-center",
    className
  )}
  {id}
>
  {@render children?.()}
</section>
