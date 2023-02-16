<script lang="ts">
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";
  import type { Event, Relay, Sub } from "nostr-tools";
  import { relayStore } from "../stores/relay";

  let relay: Relay;
  relayStore.subscribe((r) => (relay = r));

  let publicKey = "";
  let subscription: Sub;
  let subscribed = false;
  let events: Event[] = [];
  let gotEose = false;

  let profileEvent: Event;

  const startFirehose = () => {
    subscription = relay.sub([{ since: Math.floor(Date.now() / 1_000) }]);
    subscribed = true;
    subscription.on("event", (event: Event) => {
      events = [...events, event];
      if (events.length >= 30) {
        subscription.unsub();
        subscribed = false;
      }
    });
    subscription.on("eose", () => {
      gotEose = true;
    });
    setTimeout(() => {
      if (subscribed) {
        subscription.unsub();
      }
    }, 30_000);
  };

  const subscribeToProfile = () => {
    if (typeof relay === "undefined") {
      return;
    }

    const profileSubscription = relay.sub([
      {
        authors: [publicKey],
        kinds: [0],
      },
    ]);
    profileSubscription.on("event", (event: Event) => {
      profileEvent = event;
      profileSubscription.unsub();
    });
    profileSubscription.on("eose", () => {
      gotEose = true;
      profileSubscription.unsub();
    });
  };
</script>

<h2>Subscribe</h2>
<details>
  <summary
    >Subscribe to events of various kinds (connect to a relay first)</summary
  >
  <h3>Firehose</h3>
  <p>Subscribe to all events from this relay (stops after 30s or 30 events)</p>
  {#if !subscribed}
    <Button on:click={() => startFirehose()}>Start firehose</Button>
  {:else}
    <Button on:click={() => subscription.unsub()}>Stop firehose</Button>
  {/if}
  <h3>Profiles</h3>
  <form
    on:submit|preventDefault={() => {
      subscribeToProfile();
    }}
  >
    <Textfield bind:value={publicKey} style="width: 100%" />
    <Button>Subscribe to profile</Button>
  </form>
  {#if typeof profileEvent !== "undefined"}
    <pre>{JSON.stringify(profileEvent, null, 2)}</pre>
    <p>Content unpacked</p>
    <pre>{JSON.stringify(JSON.parse(profileEvent.content), null, 2)}</pre>
  {/if}

  <h3>Events</h3>
  <ul>
    {#each events as event}
      <li><pre>{JSON.stringify(event, null, 2)}</pre></li>
    {:else}<li>No events</li>
    {/each}
  </ul>
</details>
