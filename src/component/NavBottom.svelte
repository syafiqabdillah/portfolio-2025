<script>
  const menu = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
  ];
</script>

<div class="fixed bottom-0 left-0 right-0 bg-slate-300 flex justify-around p-4">
  {#each menu as nav}
    <a href={`#${nav.id}`}>{nav.name}</a>
  {/each}
</div>
