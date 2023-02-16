<script lang="ts">
  import { generatePrivateKey, getPublicKey, nip19 } from "nostr-tools";
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";

  import { privateKeyStore } from "$lib/stores/privateKey";

  let privateKeyInputValue = "";
  let privateKeyInputValueInvalid = false;
  $: publicKey = $privateKeyStore === "" ? "" : getPublicKey($privateKeyStore);
  $: nsec = $privateKeyStore === "" ? "" : nip19.nsecEncode($privateKeyStore);
  $: npub = $privateKeyStore === "" ? "" : nip19.npubEncode($privateKeyStore);
  let error = "";

  const generateAndSetPrivateKey = () => {
    $privateKeyStore = generatePrivateKey();
  };

  const importPrivateKey = () => {
    privateKeyInputValueInvalid = false;
    if (privateKeyInputValue.startsWith("nsec")) {
      try {
        const { data } = nip19.decode(privateKeyInputValue);
        $privateKeyStore = data as string;
        return;
      } catch {}
    }
    if (privateKeyInputValue.length === 64) {
      $privateKeyStore = privateKeyInputValue;
      return;
    }
    privateKeyInputValueInvalid = true;
  };
</script>

<h2>Keys</h2>
<details>
  <summary> Private key related operations</summary>
  <p>Private key: <code>{$privateKeyStore}</code></p>
  <p>
    Public key: <code>
      {publicKey}
    </code>
  </p>
  <Button on:click={() => generateAndSetPrivateKey()}>Generate key</Button>

  <details>
    <summary>Import an existing private key</summary>
    <Textfield
      type="text"
      label="Private key"
      style="width: 100%"
      bind:value={privateKeyInputValue}
      invalid={privateKeyInputValueInvalid}
    >
      <HelperText validationMsg slot="helper">
        Invalid private key, unable to import.
      </HelperText>
    </Textfield>
    <Button on:click={() => importPrivateKey()}>Import</Button>
    {#if error !== ""}
      <p>{error}</p>
    {/if}
  </details>

  <h3>NIP19</h3>
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
</details>
