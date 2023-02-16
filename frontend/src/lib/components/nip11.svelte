<script type="ts">
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";

  let relayUrl = "";
  let output = "";

  const getRelayInfo = async () => {
    const result = await fetch("https://relay.nostr.nu", {
      headers: { accept: "application/nostr+json" },
    });
    const data = await result.json();
    output = JSON.stringify(data, null, 2);
  };
</script>

<h2>NIP11</h2>
<details>
  <summary>Fetch NIP11 info for relays</summary>
  <form on:submit|preventDefault={() => getRelayInfo()}>
    <Textfield type="url" bind:value={relayUrl} style="width: 100%" />
    <Button>Fetch relay info</Button>
  </form>
  <pre>{output}</pre>
</details>
