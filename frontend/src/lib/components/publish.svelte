<script lang="ts">
  import { privateKeyStore } from "$lib/stores/privateKey";
  import { relayStore } from "$lib/stores/relay";
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";
  import {
    getEventHash,
    getPublicKey,
    signEvent,
    validateEvent,
    type Event,
    type Relay,
  } from "nostr-tools";

  $: relayUrl =
    typeof $relayStore !== "undefined" ? $relayStore.url : "No relay connected";
  let eventInput = "";
  let event: Event;
  let preparedEvent = "";
  let prepared = false;
  let error = "";
  let publishing = false;
  let ok = false;
  let seen = false;
  // $: publicKey = $privateKeyStore === "" ? "" : getPublicKey($privateKeyStore);

  const prepare = () => {
    error = "";
    if (typeof $relayStore === "undefined") {
      error = "#oNMSD1 Connect to a relay in order to publish";
      return;
    }
    if ($privateKeyStore === "") {
      error = "#gVoA24 Set a private in order to publish";
      return;
    }
    event = JSON.parse(eventInput.trim());
    event.created_at = Math.floor(Date.now() / 1_000);
    event.pubkey = getPublicKey($privateKeyStore);
    if (!validateEvent(event)) {
      error = "#KBJSkv Invalid event";
      return;
    }
    event.id = getEventHash(event);
    event.sig = signEvent(event, $privateKeyStore);
    preparedEvent = JSON.stringify(event, null, 2);
    prepared = true;
  };

  const publish = () => {
    publishing = true;
    const publication = $relayStore.publish(event);
    publication.on("failed", (message: string) => {
      publishing = false;
      error = `#oPbGD5 Publishing failed with error: ${message}`;
    });
    publication.on("ok", () => {
      ok = true;
      eventInput = "";
      // @ts-ignore
      event = undefined;
      preparedEvent = "";
      prepared = false;
      error = "";
      publishing = false;
    });
    publication.on("seen", () => {
      seen = true;
      eventInput = "";
      // @ts-ignore
      event = undefined;
      preparedEvent = "";
      prepared = false;
      error = "";
      publishing = false;
    });
  };
</script>

<h2>Publish</h2>
<details>
  <summary>Publish events to relays (connect to a relay first)</summary>
  {#if $privateKeyStore === ""}
    <p>Please add a private key first</p>
  {:else}
    {#if ok}<p>
        Event successfully published{#if seen}{" and seen"}{/if}.
      </p>{/if}
    <form on:submit|preventDefault={prepare}>
      <p>Publish to relay: <code>{relayUrl}</code></p>
      <Textfield bind:value={eventInput} textarea style="width: 100%" />
      <Button>Prepare event</Button>
    </form>
    {#if error !== ""}
      <p><strong>ERROR:</strong>{error}</p>
    {/if}
    {#if prepared}
      <pre>{preparedEvent}</pre>
      <Button on:click={publish} disabled={publishing}>Publish</Button>
    {/if}
  {/if}
  <p />
</details>
