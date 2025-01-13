<script>
  const { id, children } = $props();
</script>

<section class="min-h-screen flex flex-col justify-center items-center" {id}>
  {@render children?.()}
</section>
