<script>
  const menu = [
    { name: "Myself", id: "about" },
    { name: "Capabilities", id: "skill" },
    { name: "Experience", id: "experience" },
    { name: "Personal Projects", id: "projects" },
  ];
</script>

<div
  class="fixed bottom-0 left-0 right-0 bg-slate-300 flex justify-around p-4 flex-wrap gap-2"
>
  {#each menu as nav}
    <a href={`#${nav.id}`}>{nav.name}</a>
  {/each}
</div>
