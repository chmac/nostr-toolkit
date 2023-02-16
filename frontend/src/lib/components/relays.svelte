<script lang="ts">
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";
  import { relayInit, type Relay } from "nostr-tools";
  import { relayStore } from "../stores/relay";

  let relayUrl = "";
  let relay: Relay;
  let notices: string[] = [];
  let errors: string[] = [];
  let connecting = false;
  let connected = false;

  const connect = () => {
    if (connecting || connected) {
      return;
    }
    relay = relayInit(relayUrl);
    relayStore.set(relay);
    relay.on("notice", (notice: string) => {
      notices = [...notices, notice];
    });
    relay.on("error", (error: string) => {
      errors = [...errors, error];
    });
    relay.on("connect", () => {
      connecting = false;
      connected = true;
    });
    relay.on("disconnect", () => {
      connecting = false;
      connected = false;
    });
    relay.connect();
    connecting = true;
  };
</script>

<h2>Relays</h2>
<details>
  <summary>Connect to relays and monitor notices and errors</summary>
  <form on:submit|preventDefault={() => connect()}>
    <Textfield type="url" bind:value={relayUrl} style="width: 100%" />
    <Button>Connect</Button>
  </form>
  <p>Connecting: {connecting}</p>
  <p>Connected: {connected}</p>
  <h3>Notices</h3>
  <ul>
    {#each notices as notice}
      <li>
        <code>
          {notice}
        </code>
      </li>
    {:else}<li>No notices</li>
    {/each}
  </ul>
  <h3>Errors</h3>
  <ul>
    {#each notices as notice}
      <li>
        <code>
          {notice}
        </code>
      </li>
    {:else}<li>No errors</li>
    {/each}
  </ul>
</details>
