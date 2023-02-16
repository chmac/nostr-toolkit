import type { Relay } from "nostr-tools";
import { writable } from "svelte/store";

export const relayStore = writable<Relay>();
