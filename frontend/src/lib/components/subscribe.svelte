<script lang="ts">
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";
  import type { Event, Relay, Sub } from "nostr-tools";
  import { relayStore } from "../stores/relay";

  let relay: Relay;
  relayStore.subscribe((r) => (relay = r));

  let subscription: Sub | undefined;
  let subscribed = false;
  let events: Event[] = [];
  let gotEose = false;
  let timerId: NodeJS.Timeout | undefined;

  const unsubscribe = () => {
    if (typeof subscription !== "undefined") {
      subscription.unsub();
    }
    subscribed = false;
    gotEose = false;
  };

  const resetState = () => {
    unsubscribe();
    subscription = undefined;
    if (typeof timerId !== "undefined") {
      clearTimeout(timerId);
    }
  };

  const startTimeout = () => {
    timerId = setTimeout(unsubscribe, 30_000);
  };

  const startFirehose = () => {
    resetState();
    subscription = relay.sub([{ since: Math.floor(Date.now() / 1_000) }]);
    subscribed = true;
    subscription.on("event", (event: Event) => {
      events = [...events, event];
      if (events.length >= 30) {
        unsubscribe();
      }
    });
    subscription.on("eose", () => {
      gotEose = true;
    });
    startTimeout();
  };

  let publicKey = "";
  let profileEvent: Event;

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

  let kind = "";

  const subscribeToKind = () => {
    if (kind.length === 0 || typeof relay === "undefined") {
      return;
    }
    resetState();
    subscription = relay.sub([{ kinds: [parseInt(kind)] }]);
    subscription.on("event", (event: Event) => {
      events = [...events, event];
      if (events.length >= 30) {
        unsubscribe();
      }
    });
    subscription.on("eose", () => {
      gotEose = true;
    });
    startTimeout();
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
    <Button on:click={() => unsubscribe()}>Stop firehose</Button>
  {/if}

  <h3>Profile</h3>
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
  {#if gotEose && typeof profileEvent === "undefined"}<p>
      No profile found
    </p>{/if}

  <h3>Kind</h3>
  <form
    on:submit|preventDefault={() => {
      subscribeToKind();
    }}
  >
    <Textfield bind:value={kind} />
    <Button>Subscribe for this kind</Button>
  </form>

  <h3>Events</h3>
  <ul>
    {#each events as event}
      <li><pre>{JSON.stringify(event, null, 2)}</pre></li>
    {:else}<li>No events</li>
    {/each}
  </ul>
</details>
