<script lang="ts">
  import { nip05 } from "nostr-tools";
  import Textfield from "@smui/textfield";
  import Button from "@smui/button";

  let nip5Address = "";
  let output = "";

  const fetchNip5 = async () => {
    const result = await nip05.queryProfile(nip5Address);
    output = JSON.stringify(result);
  };
</script>

<h2>NIP05</h2>
<details>
  <summary>Fetch NIP05 profiles</summary>
  <form on:submit|preventDefault={() => fetchNip5()}>
    <Textfield
      type="text"
      label="Address"
      bind:value={nip5Address}
      style="width: 100%"
      on:enter
    />
    <Button type="submit">Fetch</Button>
  </form>
  <p>
    <code>{output}</code>
  </p>
</details>
