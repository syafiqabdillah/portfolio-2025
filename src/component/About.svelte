<script>
  import { profile } from "../constants";
  import Container from "./Container.svelte";
</script>

<Container id="about">
  <h1>{profile.name}</h1>
  <div>
    {profile.title}
  </div>
  <div>
    {profile.email}
  </div>
</Container>
