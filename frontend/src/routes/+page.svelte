<script lang="ts">
  import { generatePrivateKey, getPublicKey, nip19 } from "nostr-tools";
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";

  const getPublicKeyOrEmpty = (privateKey: string): string => {
    try {
      return getPublicKey(privateKey);
    } catch {
      return "";
    }
  };

  const getNsecOrEmpty = (privateKey: string): string => {
    try {
      // NOTE: It seems `.nsecEncode()` returns a value for an empty private key
      if (privateKey.length !== 64) {
        return "";
      }
      return nip19.nsecEncode(privateKey);
    } catch {
      return "";
    }
  };

  const getNpubOrEmpty = (privateKey: string): string => {
    try {
      return nip19.npubEncode(getPublicKey(privateKey));
    } catch {
      return "";
    }
  };

  let privateKey: string = "";
  $: publicKey = getPublicKeyOrEmpty(privateKey);
  $: nsec = getNsecOrEmpty(privateKey);
  $: npub = getNpubOrEmpty(privateKey);
  let textfield: Textfield;

  const generateAndFillKey = () => {
    privateKey = generatePrivateKey();
  };
</script>

<div class="container">
  <h2>Private key</h2>
  <Textfield
    type="text"
    label="Private key"
    style="width: 100%"
    bind:value={privateKey}
    bind:this={textfield}
  />
  <Button on:click={() => generateAndFillKey()}>Generate key</Button>
  <p>
    Public key: <code>
      {publicKey}
    </code>
  </p>
  <h3>Nip19</h3>
  <p>
    nsec: <code>
      {nsec}
    </code>
  </p>
  <p>
    npub: <code>
      {npub}
    </code>
  </p>
</div>

<style>
  .container {
    padding: 1rem;
  }
</style>
