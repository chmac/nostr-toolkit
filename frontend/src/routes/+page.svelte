<script lang="ts">
  import Keys from "../lib/components/keys.svelte";
  import Nip11 from "../lib/components/nip11.svelte";
  import Nip5 from "../lib/components/nip5.svelte";
  import Relays from "../lib/components/relays.svelte";
  import Subscribe from "../lib/components/subscribe.svelte";
</script>

<div class="container">
  <Keys />
  <Nip5 />
  <Nip11 />
  <Relays />
  <Subscribe />
</div>

<style>
  .container {
    padding: 1rem;
  }
</style>
